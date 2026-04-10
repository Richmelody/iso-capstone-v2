import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultsScreen from '../components/ResultsScreen';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('ResultsScreen Component', () => {
  const renderWithRouter = (props, initialEntries = ['/exam/14001']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/exam/:examId" element={<ResultsScreen {...props} />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it('renders the passing state correctly when score >= 80%', () => {
    // 14001 has 20 questions, so 16/20 = 80%
    const props = {
      score: 18,
      failedCats: new Set(),
      studentName: 'Test Student',
      studentEmail: 'test@example.com'
    };
    
    renderWithRouter(props);
    
    // Check if the passing banner is displayed
    expect(screen.getByText(/Assessment Session Closed/i)).toBeInTheDocument();
    
    // Check for "Board Review Note" denoting passing
    expect(screen.getByText(/Board Review Note/i)).toBeInTheDocument();
    
    // Assure passing button is rendered to Dashboard
    expect(screen.getByText(/Return to Dashboard/i)).toBeInTheDocument();
    
    // Assure targeted remediation is strictly hidden
    expect(screen.queryByText(/Targeted Remediation Directive/i)).not.toBeInTheDocument();
  });

  it('renders the failing state and specific categories when score < 80%', () => {
    // 14001 has 20 questions, 10/20 = 50%
    const failedCategories = new Set(['Clause 4: Context of the Organization', 'Clause 5: Leadership']);
    const props = {
      score: 10,
      failedCats: failedCategories,
      studentName: 'Test Student',
      studentEmail: 'test@example.com'
    };
    
    renderWithRouter(props);
    
    // Should display Targeted Remediation
    expect(screen.getByText(/Targeted Remediation Directive/i)).toBeInTheDocument();
    
    // Should map the exact categories to the screen
    expect(screen.getByText(/Technical Directive: Clause 4: Context of the Organization/i)).toBeInTheDocument();
    expect(screen.getByText(/Technical Directive: Clause 5: Leadership/i)).toBeInTheDocument();
    
    // It should NOT render the Board Review
    expect(screen.queryByText(/Board Review Note/i)).not.toBeInTheDocument();
    
    // Assure button indicates failure
    expect(screen.getByText(/Acknowledge & Exit/i)).toBeInTheDocument();
  });

  it('renders the global Audit Roadmap visualizer perfectly', () => {
    renderWithRouter({ score: 10, failedCats: new Set() });
    
    // Ensure all 3 steps of the roadmap are always present regardless of pass/fail
    expect(screen.getByText(/Certification Audit Roadmap/i)).toBeInTheDocument();
    expect(screen.getByText(/Step 1: Technical Submission/i)).toBeInTheDocument();
    expect(screen.getByText(/Step 2: Performance & Integrity Validation/i)).toBeInTheDocument();
    expect(screen.getByText(/Step 3: Final Certification Decision/i)).toBeInTheDocument();
  });
});
