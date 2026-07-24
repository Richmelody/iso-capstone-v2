import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Instructions from '../components/Instructions';

describe('Instructions Component', () => {

  it('renders standard protocols without examData', () => {
    render(<Instructions onStartExam={vi.fn()} onLogout={vi.fn()} />);
    expect(screen.getByText('Engagement Protocols')).toBeInTheDocument();
    // Should not render exam notices
    expect(screen.queryByText('Exam Notice')).not.toBeInTheDocument();
  });

  it('renders ExamNoticeCard when instrument_notice is present in examData', () => {
    const mockExamData = {
      instrument_notice: 'This is a strict evaluation of internal auditing skills.'
    };
    render(<Instructions examData={mockExamData} onStartExam={vi.fn()} onLogout={vi.fn()} />);
    expect(screen.getByText('Exam Notice')).toBeInTheDocument();
    expect(screen.getByText('This is a strict evaluation of internal auditing skills.')).toBeInTheDocument();
  });

  it('renders Blueprint when blueprint data is provided', () => {
    const mockExamData = {
      blueprint: {
        "Planning": "20%",
        "Execution": "50%"
      }
    };
    render(<Instructions examData={mockExamData} onStartExam={vi.fn()} onLogout={vi.fn()} />);
    expect(screen.getByText('Exam Blueprint')).toBeInTheDocument();
    expect(screen.getByText('Planning')).toBeInTheDocument();
    expect(screen.getByText('20%')).toBeInTheDocument();
    expect(screen.getByText('Execution')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

});
