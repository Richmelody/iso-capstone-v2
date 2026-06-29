import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuizEngine from '../components/QuizEngine';

describe('QuizEngine Component - Standard User Flows', () => {
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
      },
      {
        section: "Clause 5",
        text: "What represents top management?",
        category: "Leadership",
        options: [
          { text: "Option C", correct: false },
          { text: "Option D", correct: true }
        ]
      }
    ]
  };

  // ─── Pinned layout: identity optMap so Option A stays at display position 0
  // and Option D stays at display position 1. Prevents shuffle non-determinism
  // from breaking tests. Production always gets a real random layout.
  const PINNED_RECOVERED_STATE = {
    currentIdx: 0,
    timeLeft: 1200,
    userAnswers: {},
    layout: [
      { qIdx: 0, optMap: [0, 1] }, // Q0: Option A=pos0, Option B=pos1
      { qIdx: 1, optMap: [0, 1] }, // Q1: Option C=pos0, Option D=pos1
    ],
  };

  const mockOnFinish = vi.fn();
  const mockOnSync = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders exactly on the first question upon mount', () => {
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={mockOnSync} recoveredState={PINNED_RECOVERED_STATE} />);
    
    expect(screen.getByText(/What is the context of the organization\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Assessment Task #1/i)).toBeInTheDocument();
    expect(screen.getByText(/Option A/i)).toBeInTheDocument();
    expect(screen.getByText(/Option B/i)).toBeInTheDocument();
    expect(screen.getByText("Skip Question")).toBeInTheDocument();
  });

  it('allows a user to select an option, sync to the network, and advance to the next question', () => {
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={mockOnSync} recoveredState={PINNED_RECOVERED_STATE} />);
    
    const optionA = screen.getByText(/Option A/i);
    fireEvent.click(optionA);

    const commitBtn = screen.getByText(/Commit & Continue/i);
    expect(commitBtn).toBeInTheDocument();
    fireEvent.click(commitBtn);

    expect(mockOnSync).toHaveBeenCalled();
    expect(screen.getByText(/Assessment Task #2/i)).toBeInTheDocument();
    expect(screen.getByText(/What represents top management\?/i)).toBeInTheDocument();
  });

  it('allows a user to skip a question without answering', () => {
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={mockOnSync} recoveredState={PINNED_RECOVERED_STATE} />);
    
    const skipBtn = screen.getByText(/Skip Question/i);
    fireEvent.click(skipBtn);

    expect(screen.getByText(/Assessment Task #2/i)).toBeInTheDocument();
  });

  it('opens the review drawer and shows correct completion statuses', () => {
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={mockOnSync} recoveredState={PINNED_RECOVERED_STATE} />);
    
    fireEvent.click(screen.getByText(/Option A/i));
    
    const drawerBtn = screen.getByText(/Open Review Panel/i);
    fireEvent.click(drawerBtn);

    expect(screen.getByText(/Audit Progress/i)).toBeInTheDocument();
    expect(screen.getByText(/1 of 2 Completed/i)).toBeInTheDocument();
    
    const qButtons = screen.getAllByRole('button', { name: /^[1-2]$/ });
    expect(qButtons).toHaveLength(2);
  });

  it('finishes the exam accurately scoring the logical flows', () => {
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={mockOnSync} recoveredState={PINNED_RECOVERED_STATE} />);
    
    // Answer Q1 correctly (Option A = original idx 0 = correct for Q0)
    fireEvent.click(screen.getByText(/Option A/i));
    fireEvent.click(screen.getByText("Commit & Continue"));

    // Answer Q2 incorrectly (Option C = original idx 0 = wrong for Q1)
    fireEvent.click(screen.getByText(/Option C/i));
    fireEvent.click(screen.getByText("Commit & Continue"));

    fireEvent.click(screen.getByText(/Review & Submit/i));
    expect(screen.getByText(/Finalize Assessment/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Finalize & Submit/i));

    // Epic 2.1: onFinish now passes (score, failedCats, assignedLayout, userAnswers)
    expect(mockOnFinish).toHaveBeenCalledWith(
      1,
      new Set(["Leadership"]),
      expect.any(Array),
      expect.any(Object)
    );
  });
});
