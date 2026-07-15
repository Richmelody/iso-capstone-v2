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

describe('QuizEngine Component - Exhibit Hybrid UI', () => {
  const mockExamWithExhibits = {
    exhibits: {
      case_study_1: { description: 'This is a test exhibit.' }
    },
    questions: [
      {
        section: "Implementer",
        text: "Question with exhibit?",
        category: "Test",
        exhibit_ref: "case_study_1",
        options: [{ text: "A", correct: true }]
      },
      {
        section: "Implementer",
        text: "Question without exhibit?",
        category: "Test",
        options: [{ text: "A", correct: true }]
      }
    ]
  };

  const PINNED_STATE = {
    currentIdx: 0,
    timeLeft: 1200,
    userAnswers: {},
    layout: [
      { qIdx: 0, optMap: [0] },
      { qIdx: 1, optMap: [0] },
    ],
  };

  it('renders the ExhibitViewer and Mobile toggle button when an exhibit_ref is present', () => {
    render(<QuizEngine examData={mockExamWithExhibits} onFinish={vi.fn()} onSyncNetwork={vi.fn()} recoveredState={PINNED_STATE} />);
    
    // Check if the exhibit viewer rendered the description
    expect(screen.getByText('This is a test exhibit.')).toBeInTheDocument();
    
    // Check if the mobile toggle button is rendered
    expect(screen.getByText(/View Attached Exhibit/i)).toBeInTheDocument();
  });

  it('hides the ExhibitViewer when navigating to a question without an exhibit', () => {
    render(<QuizEngine examData={mockExamWithExhibits} onFinish={vi.fn()} onSyncNetwork={vi.fn()} recoveredState={PINNED_STATE} />);
    
    expect(screen.getByText('This is a test exhibit.')).toBeInTheDocument();
    
    // Click skip to go to Q2 (which has no exhibit)
    fireEvent.click(screen.getByText("Skip Question"));
    
    expect(screen.queryByText('This is a test exhibit.')).not.toBeInTheDocument();
    expect(screen.queryByText(/View Attached Exhibit/i)).not.toBeInTheDocument();
  });
});
