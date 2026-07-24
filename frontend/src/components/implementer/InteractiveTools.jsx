import React, { useState, useEffect } from 'react';
import { ToolContainer, DraggableToken, DropZone, ActionSlider, InteractiveSelect } from './ImplementerUI';

// 1. PESTLE Canvas
export function PESTLECanvas({ data, onComplete, initialPayload }) {
  const [items, setItems] = useState(data.items);
  const [categories, setCategories] = useState(
    data.categories.reduce((acc, cat) => ({ ...acc, [cat]: [] }), {})
  );

  // Restore initial payload if exists
  useEffect(() => {
    if (!initialPayload || Object.keys(initialPayload).length === 0) return;

    // Prevent infinite ping-pong loops by comparing state
    const currentPayload = {};
    Object.keys(categories).forEach(k => {
      currentPayload[k] = categories[k].map(i => i.id);
    });
    if (JSON.stringify(currentPayload) === JSON.stringify(initialPayload)) return;

    const restoredCategories = { ...categories };
    let restoredItems = [...data.items];

    for (const [cat, itemIds] of Object.entries(initialPayload)) {
      restoredCategories[cat] = itemIds.map(id => data.items.find(i => i.id === id)).filter(Boolean);
      restoredItems = restoredItems.filter(i => !itemIds.includes(i.id));
    }
    setCategories(restoredCategories);
    setItems(restoredItems);
  }, [initialPayload]);

  const handleDrop = (itemId, targetCategory) => {
    const item = data.items.find(i => i.id === itemId);
    if (!item) return;

    setCategories(prev => {
      const next = { ...prev };
      // Remove from any existing category
      Object.keys(next).forEach(k => {
        next[k] = next[k].filter(i => i.id !== itemId);
      });
      // Add to new category
      next[targetCategory] = [...next[targetCategory], item];
      return next;
    });

    setItems(prev => prev.filter(i => i.id !== itemId));
  };

  const handleRemove = (itemId, category) => {
    const item = data.items.find(i => i.id === itemId);
    if (!item) return;
    setCategories(prev => ({
      ...prev,
      [category]: prev[category].filter(i => i.id !== itemId)
    }));
    setItems(prev => [...prev, item]);
  };

  // Notify parent of changes
  useEffect(() => {
    const payload = {};
    Object.keys(categories).forEach(k => {
      payload[k] = categories[k].map(i => i.id);
    });
    if (onComplete) onComplete(payload);
  }, [categories]);

  return (
    <ToolContainer title="PESTLE Analysis Canvas" icon="fa-table-cells">
      <div className="mb-6 bg-white p-4 rounded-xl border border-dashed border-gray-300">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Unassigned Issues</h4>
        <div className="flex flex-wrap gap-2">
          {items.map(item => (
            <DraggableToken key={item.id} id={item.id} text={item.text} />
          ))}
          {items.length === 0 && <span className="text-emerald-500 text-sm font-bold"><i className="fa-solid fa-check-circle mr-1"></i> All issues categorized!</span>}
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {data.categories.map(cat => (
          <DropZone 
            key={cat} 
            id={cat} 
            title={cat} 
            items={categories[cat]} 
            onDropItem={handleDrop}
            onRemoveItem={handleRemove}
          />
        ))}
      </div>
    </ToolContainer>
  );
}

// 2. Policy Editor
export function PolicyEditor({ data, onComplete, initialPayload }) {
  const [highlighted, setHighlighted] = useState(initialPayload || []);

  const toggleHighlight = (id) => {
    setHighlighted(prev => {
      const next = prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
      if (onComplete) onComplete(next);
      return next;
    });
  };

  return (
    <ToolContainer title="Environmental Policy Editor" icon="fa-file-signature">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-lg leading-relaxed font-serif text-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center">Draft Environmental Policy</h1>
        <div className="space-y-4">
          {data.sentences.map(sentence => (
            <span 
              key={sentence.id}
              onClick={() => toggleHighlight(sentence.id)}
              className={`cursor-pointer rounded transition-colors inline-block p-1 ${
                highlighted.includes(sentence.id) ? 'bg-yellow-200 border-b-2 border-yellow-400' : 'hover:bg-gray-100'
              }`}
            >
              {sentence.text}
            </span>
          ))}
        </div>
      </div>
    </ToolContainer>
  );
}

// 3. Risk Calculator
export function RiskCalculator({ data, onComplete, initialPayload }) {
  const [severity, setSeverity] = useState(initialPayload?.severity || 1);
  const [likelihood, setLikelihood] = useState(initialPayload?.likelihood || 1);

  const score = severity * likelihood;
  let band = "Not Significant";
  let color = "bg-green-100 text-green-800 border-green-300";
  if (score >= 7) { band = "Monitor"; color = "bg-yellow-100 text-yellow-800 border-yellow-300"; }
  if (score >= 15) { band = "Significant"; color = "bg-red-100 text-red-800 border-red-300"; }

  useEffect(() => {
    if (onComplete) onComplete({ severity, likelihood });
  }, [severity, likelihood]);

  return (
    <ToolContainer title="Significance Scoring Calculator" icon="fa-calculator">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <ActionSlider 
            label="Severity (1-5)" 
            value={severity} 
            min={data.severity_scale[0]} max={data.severity_scale[1]} 
            onChange={setSeverity} 
            markers={['Very Small', 'Small', 'Moderate', 'Big', 'Very Big']}
          />
          <ActionSlider 
            label="Likelihood (1-5)" 
            value={likelihood} 
            min={data.likelihood_scale[0]} max={data.likelihood_scale[1]} 
            onChange={setLikelihood} 
            markers={['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain']}
          />
        </div>
        <div className="w-full md:w-64 flex flex-col items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <span className="text-xs font-black uppercase text-gray-500 tracking-widest mb-2">Final Score</span>
          <span className="text-6xl font-black text-brand-dark mb-4">{score}</span>
          <div className={`px-4 py-2 rounded-lg border-2 font-bold text-sm uppercase tracking-wider ${color}`}>
            {band}
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}

// 4. Communication Matrix
export function CommunicationMatrix({ data, onComplete, initialPayload }) {
  const [matrix, setMatrix] = useState(initialPayload || {});

  const handleChange = (row, colId, value) => {
    setMatrix(prev => {
      const nextRow = { ...(prev[row] || {}), [colId]: value };
      const next = { ...prev, [row]: nextRow };
      if (onComplete) onComplete(next);
      return next;
    });
  };

  return (
    <ToolContainer title="Communication Matrix Builder" icon="fa-network-wired">
      <div className="overflow-x-auto">
        <table className="w-full text-left bg-white rounded-xl shadow-sm border border-gray-200">
          <thead className="bg-slate-100 border-b-2 border-gray-300">
            <tr>
              <th className="p-4 text-xs font-black uppercase tracking-widest text-gray-600">Scenario</th>
              {data.columns.map(col => (
                <th key={col.id} className="p-4 text-xs font-black uppercase tracking-widest text-gray-600">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map(row => (
              <tr key={row} className="border-b border-gray-100">
                <td className="p-4 font-bold text-gray-800">{row}</td>
                {data.columns.map(col => (
                  <td key={col.id} className="p-4">
                    <InteractiveSelect 
                      options={col.options.map(o => ({ value: o, label: o }))} 
                      value={matrix[row]?.[col.id]}
                      onChange={(val) => handleChange(row, col.id, val)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ToolContainer>
  );
}

// 5. Flowchart Arranger
export function FlowchartArranger({ data, onComplete, initialPayload }) {
  const [steps, setSteps] = useState(data.steps);

  useEffect(() => {
    if (initialPayload && initialPayload.length > 0) {
      const restored = initialPayload.map(id => data.steps.find(s => s.id === id)).filter(Boolean);
      const unassigned = data.steps.filter(s => !initialPayload.includes(s.id));
      setSteps([...restored, ...unassigned]);
    } else {
      if (onComplete) onComplete(data.steps.map(s => s.id));
    }
  }, [initialPayload]);

  const moveStep = (dragIndex, hoverIndex) => {
    const draggedStep = steps[dragIndex];
    const newSteps = [...steps];
    newSteps.splice(dragIndex, 1);
    newSteps.splice(hoverIndex, 0, draggedStep);
    setSteps(newSteps);
    if (onComplete) onComplete(newSteps.map(s => s.id));
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDrop = (e, index) => {
    e.stopPropagation();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (isNaN(dragIndex) || dragIndex === index) return;
    moveStep(dragIndex, index);
  };

  const handleContainerDrop = (e) => {
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (isNaN(dragIndex)) return;
    moveStep(dragIndex, steps.length - 1);
  };

  return (
    <ToolContainer title="Emergency Flowchart Arranger" icon="fa-arrow-down-up-across-line">
      <div className="max-w-2xl mx-auto w-full bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Drag to reorder the steps logically</p>
        <div 
          className="flex flex-col gap-3 min-h-[200px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleContainerDrop}
        >
          {steps.map((step, index) => (
            <div 
              key={step.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index)}
              className="flex items-center gap-4 bg-slate-50 border-2 border-gray-200 hover:border-brand-primary p-4 rounded-xl cursor-grab transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-black flex-shrink-0">
                {index + 1}
              </div>
              <span className="font-bold text-gray-800">{step.text}</span>
              <i className="fa-solid fa-bars text-gray-400 ml-auto"></i>
            </div>
          ))}
        </div>
      </div>
    </ToolContainer>
  );
}

// 6. NCR Generator
export function NCRGenerator({ data, onComplete, initialPayload }) {
  const [classification, setClassification] = useState(initialPayload?.classification || '');
  const [clause, setClause] = useState(initialPayload?.clause || '');

  useEffect(() => {
    if (onComplete) onComplete({ classification, clause });
  }, [classification, clause]);

  return (
    <ToolContainer title="Nonconformity Report (NCR) Generator" icon="fa-file-circle-xmark">
      <div className="max-w-3xl mx-auto w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-red-50 p-6 border-b border-red-100 flex gap-4 items-start">
          <i className="fa-solid fa-triangle-exclamation text-red-500 text-3xl mt-1"></i>
          <div>
            <h4 className="text-red-800 font-black uppercase tracking-widest text-sm mb-2">Audit Finding</h4>
            <p className="text-red-900 font-semibold italic">"{data.findings}"</p>
          </div>
        </div>
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">1. Classification</label>
            <InteractiveSelect 
              options={data.classifications.map(c => ({ value: c, label: c }))} 
              value={classification} 
              onChange={setClassification} 
              placeholder="Select severity classification..."
            />
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">2. ISO 14001 Requirement Violated</label>
            <InteractiveSelect 
              options={data.clauses.map(c => ({ value: c, label: c }))} 
              value={clause} 
              onChange={setClause} 
              placeholder="Select ISO Clause..."
            />
          </div>
        </div>
      </div>
    </ToolContainer>
  );
}

// 7. Root Cause Tree (5 Whys)
export function RootCauseTree({ data, onComplete, initialPayload }) {
  const [answers, setAnswers] = useState(initialPayload || {});

  const handleAnswer = (levelId, val) => {
    setAnswers(prev => {
      const next = { ...prev, [levelId]: val };
      // Optional: Clear downstream answers if an upstream answer changes
      let found = false;
      data.levels.forEach(lvl => {
        if (found) delete next[lvl.id];
        if (lvl.id === levelId) found = true;
      });
      if (onComplete) onComplete(next);
      return next;
    });
  };

  return (
    <ToolContainer title="Root Cause Analysis (5 Whys)" icon="fa-diagram-project">
      <div className="max-w-3xl mx-auto w-full space-y-4">
        {data.levels.map((level, index) => {
          const isVisible = index === 0 || answers[data.levels[index - 1].id];
          if (!isVisible) return null;

          return (
            <div key={level.id} className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-200 animate-in slide-in-from-top-4 fade-in duration-300">
              {index > 0 && (
                <div className="absolute -top-4 left-8 w-0.5 h-4 bg-brand-primary"></div>
              )}
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-black flex-shrink-0 text-sm">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h4 className="text-gray-800 font-bold mb-3">{level.question}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {level.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(level.id, opt)}
                        className={`text-left p-3 text-sm font-semibold rounded-lg border-2 transition-colors ${
                          answers[level.id] === opt 
                            ? 'border-brand-primary bg-brand-primary/10 text-brand-dark' 
                            : 'border-gray-200 hover:border-brand-primary/50 text-gray-600 bg-slate-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ToolContainer>
  );
}
