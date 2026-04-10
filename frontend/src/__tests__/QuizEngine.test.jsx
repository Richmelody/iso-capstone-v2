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

  const mockOnFinish = vi.fn();
  const mockOnSync = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders exactly on the first question upon mount', () => {
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={mockOnSync} />);
    
    // Check HUD and question rendering
    expect(screen.getByText(/What is the context of the organization\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Assessment Task #1/i)).toBeInTheDocument();
    expect(screen.getByText(/Option A/i)).toBeInTheDocument();
    expect(screen.getByText(/Option B/i)).toBeInTheDocument();
    expect(screen.getByText("Skip Question")).toBeInTheDocument(); // Since no option is selected yet
  });

  it('allows a user to select an option, sync to the network, and advance to the next question', () => {
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={mockOnSync} />);
    
    // Select Option A
    const optionA = screen.getByText(/Option A/i);
    fireEvent.click(optionA);

    // The button should dynamically change to "Commit & Continue"
    const commitBtn = screen.getByText(/Commit & Continue/i);
    expect(commitBtn).toBeInTheDocument();

    // Click commit
    fireEvent.click(commitBtn);

    // Verify it called sync
    expect(mockOnSync).toHaveBeenCalled();

    // Verify it advanced to the second question
    expect(screen.getByText(/Assessment Task #2/i)).toBeInTheDocument();
    expect(screen.getByText(/What represents top management\?/i)).toBeInTheDocument();
  });

  it('allows a user to skip a question without answering', () => {
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={mockOnSync} />);
    
    // Do NOT select an option, immediately hit Skip
    const skipBtn = screen.getByText(/Skip Question/i);
    fireEvent.click(skipBtn);

    // Should advance without syncing an answer
    expect(screen.getByText(/Assessment Task #2/i)).toBeInTheDocument();
  });

  it('opens the review drawer and shows correct completion statuses', () => {
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={mockOnSync} />);
    
    // Select an option on Question 1, don't commit it, just open review drawer
    fireEvent.click(screen.getByText(/Option A/i));
    
    const drawerBtn = screen.getByText(/Open Review Panel/i);
    fireEvent.click(drawerBtn);

    // Drawer should open showing progress
    expect(screen.getByText(/Audit Progress/i)).toBeInTheDocument();
    expect(screen.getByText(/1 of 2 Completed/i)).toBeInTheDocument(); // Because we selected 1 answer
    
    // Verify it contains buttons to navigate dynamically
    const qButtons = screen.getAllByRole('button', { name: /^[1-2]$/ });
    expect(qButtons).toHaveLength(2);
  });

  it('finishes the exam accurately scoring the logical flows', () => {
    render(<QuizEngine examData={mockExamData} onFinish={mockOnFinish} onSyncNetwork={mockOnSync} />);
    
    // Answer Q1 correctly
    fireEvent.click(screen.getByText(/Option A/i));
    fireEvent.click(screen.getByText("Commit & Continue"));

    // Answer Q2 incorrectly
    fireEvent.click(screen.getByText(/Option C/i));
    fireEvent.click(screen.getByText("Commit & Continue"));

    // Because it was the last question, the drawer opens.
    // Click Review & Submit from the drawer
    fireEvent.click(screen.getByText(/Review & Submit/i));

    // The confirmation modal should pop up
    expect(screen.getByText(/Finalize Assessment/i)).toBeInTheDocument();
    
    // Assume we hit Finalize
    fireEvent.click(screen.getByText(/Finalize & Submit/i));

    // Score evaluation: Q1 correct, Q2 wrong.
    // Expect final score = 1. Failed Category = 'Leadership'
    expect(mockOnFinish).toHaveBeenCalledWith(1, new Set(["Leadership"]));
  });
});
