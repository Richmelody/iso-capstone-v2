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

});
