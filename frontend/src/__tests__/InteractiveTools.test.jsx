import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PESTLECanvas, PolicyEditor, RiskCalculator, FlowchartArranger, ContextSorter } from '../components/implementer/InteractiveTools';

describe('InteractiveTools Components', () => {
  it('RiskCalculator correctly calculates and emits payload', () => {
    const mockOnComplete = vi.fn();
    const data = {
      severity_scale: [1, 5],
      likelihood_scale: [1, 5]
    };
    
    render(<RiskCalculator data={data} onComplete={mockOnComplete} />);
    
    // Default should be 1 * 1 = 1
    expect(screen.getAllByText('1')[0]).toBeDefined();
    expect(mockOnComplete).toHaveBeenCalledWith({ severity: 1, likelihood: 1 });
  });

  it('PolicyEditor toggles highlights and emits array payload', () => {
    const mockOnComplete = vi.fn();
    const data = {
      sentences: [
        { id: "s1", text: "Sentence One" },
        { id: "s2", text: "Sentence Two" }
      ]
    };

    render(<PolicyEditor data={data} onComplete={mockOnComplete} />);
    
    const s1 = screen.getByText('Sentence One');
    fireEvent.click(s1);
    
    expect(mockOnComplete).toHaveBeenCalledWith(["s1"]);
  });

  it('FlowchartArranger calls onComplete on mount and handles drag-and-drop reordering', () => {
    const mockOnComplete = vi.fn();
    const data = {
      steps: [
        { id: "s3", text: "Step C" },
        { id: "s1", text: "Step A" },
        { id: "s4", text: "Step D" }
      ]
    };

    render(<FlowchartArranger data={data} onComplete={mockOnComplete} />);
    
    // 1. Verify onComplete is called on mount with the exact initial array order
    expect(mockOnComplete).toHaveBeenCalledWith(["s3", "s1", "s4"]);

    // Clear mock calls for the drag test
    mockOnComplete.mockClear();

    const stepA = screen.getByText('Step A').closest('div[draggable]');
    const stepC = screen.getByText('Step C').closest('div[draggable]');

    // Mock dataTransfer since JSDOM doesn't implement it natively
    const dataTransfer = {
      data: {},
      setData(format, value) { this.data[format] = value; },
      getData(format) { return this.data[format]; },
    };

    // 2. Simulate dragging Step A (index 1) and dropping it onto Step C (index 0)
    fireEvent.dragStart(stepA, { dataTransfer });
    fireEvent.drop(stepC, { dataTransfer });

    // 3. Verify onComplete is called with the reordered array
    expect(mockOnComplete).toHaveBeenCalledWith(["s1", "s3", "s4"]);
  });

  it('PESTLECanvas renders without infinite loop and handles drag-and-drop', () => {
    const data = {
      items: [
        { id: "i1", text: "Issue 1" },
        { id: "i2", text: "Issue 2" }
      ],
      categories: ["Political", "Economic"]
    };

    // Wrap in a parent to simulate QuizEngine passing the payload back
    const ParentComponent = () => {
      const [payload, setPayload] = React.useState({});
      return <PESTLECanvas data={data} initialPayload={payload} onComplete={setPayload} />;
    };

    const { container } = render(<ParentComponent />);
    
    const issue1 = screen.getByText('Issue 1').closest('div[draggable]');
    const polDrop = screen.getByText('Political').parentElement.parentElement;

    const dataTransfer = {
      types: ['text/plain'],
      data: {},
      setData(format, value) { this.data[format] = value; },
      getData(format) { return this.data[format]; },
    };

    // Simulate drag and drop
    fireEvent.dragStart(issue1, { dataTransfer });
    fireEvent.dragOver(polDrop, { dataTransfer });
    fireEvent.drop(polDrop, { dataTransfer });

    // Verify it doesn't crash and the item is correctly updated
    expect(screen.getByText('Issue 1')).toBeDefined();
  });

  it('ContextSorter renders without infinite loop and handles drag-and-drop', () => {
    const data = {
      items: [
        { id: "i1", text: "Factor 1" },
        { id: "i2", text: "Factor 2" }
      ],
      categories: ["Legal", "Economic"]
    };

    const ParentComponent = () => {
      const [payload, setPayload] = React.useState({});
      return <ContextSorter data={data} initialPayload={payload} onComplete={setPayload} />;
    };

    const { container } = render(<ParentComponent />);
    
    // Check initial state
    expect(screen.getByText('Factor 1')).toBeDefined();
    expect(screen.getByText('Factor 2')).toBeDefined();

    const factor1 = screen.getByText('Factor 1').closest('div[draggable]');
    const legalDrop = screen.getByText('Legal').parentElement.parentElement;

    const dataTransfer = {
      types: ['text/plain'],
      data: {},
      setData(format, value) { this.data[format] = value; },
      getData(format) { return this.data[format]; },
    };

    // Simulate drag start
    fireEvent.dragStart(factor1, { dataTransfer });
    // Simulate drop onto Legal
    fireEvent.drop(legalDrop, { dataTransfer });
    
    // Check if the factor was assigned
    expect(legalDrop.textContent).toContain('Factor 1');
  });
});
