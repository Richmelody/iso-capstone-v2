import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuizEngine from '../components/QuizEngine';

describe('QuizEngine Component - TDD Bug Fixes', () => {
  const mockExamData = {
    questions: [
      {
        section: "Clause 4",
        text: "What is the context of the organization?",
        category: "Context",
        options: [
          { text: "Option A", correct: true },
          { text: "Option B", correct: false }
        ]
      }
    ]
  };

  const PINNED_STATE = {
    currentIdx: 0,
    timeLeft: 1200,
    userAnswers: {},
    layout: [{ qIdx: 0, optMap: [0, 1] }],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers(); // Control time
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('Test 1: Timer does not stutter (clearInterval not excessively called) when answering', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval');
    
    render(<QuizEngine examData={mockExamData} onFinish={vi.fn()} onSyncNetwork={vi.fn()} recoveredState={PINNED_STATE} accessCode="TEST1" />);
    
    // Initial mount might call clearInterval once or twice depending on React StrictMode
    const initialCalls = clearIntervalSpy.mock.calls.length;

    // Click an option
    const optionA = screen.getByText(/Option A/i);
    fireEvent.click(optionA);

    // The bug: changing userAnswers causes the useEffect to re-run, clearing the interval again.
    // We expect it NOT to be called any additional times after clicking.
    expect(clearIntervalSpy).toHaveBeenCalledTimes(initialCalls);
  });

  it('Test 2: Proctoring remains active if onFinish throws/fails (Network Lockout Bug)', async () => {
    const mockOnFinish = vi.fn().mockRejectedValue(new Error('Network error'));
    const mockOnBurnNetwork = vi.fn();
    
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={vi.fn()} onBurnNetwork={mockOnBurnNetwork} recoveredState={PINNED_STATE} accessCode="TEST2" />);
    
    // Select answer and submit
    fireEvent.click(screen.getByText(/Option A/i));
    fireEvent.click(screen.getByText(/Submit/i)); // Top bar submit
    
    // Modal confirm submit
    const finalizeBtn = screen.getByText(/Finalize & Submit/i);
    await act(async () => {
        fireEvent.click(finalizeBtn);
    });

    // At this point, onFinish failed. The user is still in the exam.
    // The bug: hasTrippedRef was permanently set to true, disabling proctoring.
    // If they hit PrintScreen now, onBurnNetwork should be called.
    const printScreenEvent = new KeyboardEvent('keydown', { key: 'PrintScreen' });
    fireEvent(window, printScreenEvent);

    expect(mockOnBurnNetwork).toHaveBeenCalled();
  });

  it('Test 3: LocalStorage Quota Exceeded shows warning', () => {
    // Mock localStorage.setItem to throw QuotaExceededError
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });

    render(<QuizEngine examData={mockExamData} onFinish={vi.fn()} onSyncNetwork={vi.fn()} recoveredState={PINNED_STATE} accessCode="TEST3" />);

    // Click an option to trigger save
    const optionA = screen.getByText(/Option A/i);
    fireEvent.click(optionA);

    // Verify warning is displayed
    expect(screen.getByText(/Warning: Local backup unavailable/i)).toBeInTheDocument();
  });
});
