import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExhibitViewer from '../components/ExhibitViewer';

describe('ExhibitViewer Component', () => {

  it('renders nothing when exhibitData is null or undefined', () => {
    const { container } = render(<ExhibitViewer exhibitData={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders the header and description when provided', () => {
    render(<ExhibitViewer exhibitData={{ description: 'Test Case Study Description' }} />);
    expect(screen.getByText('Reference Exhibit')).toBeInTheDocument();
    expect(screen.getByText('Test Case Study Description')).toBeInTheDocument();
  });

  it('renders the Risk Assessment Framework when risk matrix data is provided', () => {
    const riskData = {
      description: 'Risk Matrix Intro',
      likelihood_scale: '1-5 Scale',
      impact_scale: 'A-E Scale',
      bands: [
        { min: 1, max: 4, level: 'Low' },
        { min: 16, max: 25, level: 'Critical' }
      ]
    };
    render(<ExhibitViewer exhibitData={riskData} />);
    expect(screen.getByText('Risk Assessment Framework')).toBeInTheDocument();
    expect(screen.getByText('1-5 Scale')).toBeInTheDocument();
    expect(screen.getByText('A-E Scale')).toBeInTheDocument();
    expect(screen.getByText('Critical')).toBeInTheDocument();
    expect(screen.getByText('16-25')).toBeInTheDocument();
  });

  it('renders the Statement of Applicability when rows are provided', () => {
    const soaData = {
      rows: [
        { control: 'A.5.1', included: 'Included', justification: 'Required by policy', status: 'Implemented' }
      ]
    };
    render(<ExhibitViewer exhibitData={soaData} />);
    expect(screen.getByText('Statement of Applicability (SoA)')).toBeInTheDocument();
    expect(screen.getByText('A.5.1')).toBeInTheDocument();
    expect(screen.getByText('Required by policy')).toBeInTheDocument();
    expect(screen.getByText('Implemented')).toBeInTheDocument();
  });

  it('renders paragraphs when provided', () => {
    const paragraphData = {
      description: 'Test Description',
      paragraphs: [
        'This is the first paragraph of the narrative.',
        'This is the second paragraph.'
      ]
    };
    render(<ExhibitViewer exhibitData={paragraphData} />);
    expect(screen.getByText('Case Study Narrative')).toBeInTheDocument();
    expect(screen.getByText('This is the first paragraph of the narrative.')).toBeInTheDocument();
    expect(screen.getByText('This is the second paragraph.')).toBeInTheDocument();
  });

  it('gracefully handles malformed or missing fields within valid objects', () => {
    // Missing description, empty bands array, missing justification in row
    const weirdData = {
      bands: [],
      rows: [
        { control: 'A.6.2', included: 'Excluded', justification: '', status: 'N/A' }
      ]
    };
    render(<ExhibitViewer exhibitData={weirdData} />);
    expect(screen.queryByText('Risk Assessment Framework')).not.toBeInTheDocument(); // Shouldn't render if bands is empty and scales are missing
    expect(screen.getByText('Statement of Applicability (SoA)')).toBeInTheDocument();
    expect(screen.getByText('A.6.2')).toBeInTheDocument();
    expect(screen.getByText('[BLANK]')).toBeInTheDocument(); // Falls back to blank indicator
  });

  // --- NEW TESTS FOR DYNAMIC LEGO COMPONENTS ---

  it('renders a DynamicTableViewer for array of objects like schedule', () => {
    const scheduleData = {
      description: 'Audit Schedule',
      schedule: [
        { quarter: 'Q1', area: 'Production', auditor: 'Jane' },
        { quarter: 'Q2', area: 'Logistics', auditor: 'John' }
      ]
    };
    render(<ExhibitViewer exhibitData={scheduleData} />);
    // Should render headers from keys
    expect(screen.getByText('quarter')).toBeInTheDocument();
    expect(screen.getByText('area')).toBeInTheDocument();
    expect(screen.getByText('auditor')).toBeInTheDocument();
    // Should render data
    expect(screen.getByText('Q1')).toBeInTheDocument();
    expect(screen.getByText('Production')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  it('renders an InterviewTranscriptViewer for exchange arrays', () => {
    const interviewData = {
      exchange: [
        { speaker: 'Auditor', line: 'Can you explain the procedure?' },
        { speaker: 'Manager', line: 'Yes, it is documented here.' }
      ]
    };
    render(<ExhibitViewer exhibitData={interviewData} />);
    expect(screen.getByText('Auditor:')).toBeInTheDocument();
    expect(screen.getByText('Can you explain the procedure?')).toBeInTheDocument();
    expect(screen.getByText('Manager:')).toBeInTheDocument();
    expect(screen.getByText('Yes, it is documented here.')).toBeInTheDocument();
  });

  it('renders a KeyValueViewer for nested objects', () => {
    const permitData = {
      permit_record: {
        permit_number: 'P-12345',
        status: 'Closed'
      }
    };
    render(<ExhibitViewer exhibitData={permitData} />);
    expect(screen.getByText('permit_number:')).toBeInTheDocument();
    expect(screen.getByText('P-12345')).toBeInTheDocument();
    expect(screen.getByText('status:')).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument();
  });

  it('renders a TextBlockViewer for string values', () => {
    const formulaData = {
      formula_reference: 'X = Y + Z'
    };
    render(<ExhibitViewer exhibitData={formulaData} />);
    expect(screen.getByText('formula reference')).toBeInTheDocument();
    expect(screen.getByText('X = Y + Z')).toBeInTheDocument();
  });

});
