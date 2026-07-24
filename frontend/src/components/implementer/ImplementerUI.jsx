import React from 'react';

/**
 * Main wrapper for any interactive tool.
 */
export function ToolContainer({ title, subtitle, icon, children, onReset }) {
  return (
    <div className="w-full bg-slate-50 rounded-xl shadow-inner border border-gray-200 overflow-hidden flex flex-col min-h-[400px]">
      <div className="bg-slate-800 p-4 border-b-4 border-brand-gold flex justify-between items-center flex-shrink-0">
        <div className="flex items-center">
          {icon && <i className={`fa-solid ${icon} text-brand-gold mr-3 text-lg`}></i>}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm">{title}</h3>
            {subtitle && <p className="text-slate-300 text-[10px] font-bold mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {onReset && (
          <button 
            onClick={onReset}
            className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold px-3 py-1.5 rounded transition-colors"
            title="Reset Tool"
          >
            <i className="fa-solid fa-rotate-right mr-1"></i> Reset
          </button>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
}

/**
 * Draggable token for PESTLE or Flowcharts.
 * Uses native HTML5 Drag and Drop.
 */
export function DraggableToken({ id, text, type = 'token', onDragStart }) {
  return (
    <div
      draggable
      onDragStart={(e) => {
        const payload = JSON.stringify({ id, type });
        e.dataTransfer.setData('text/plain', payload);
        e.dataTransfer.effectAllowed = 'move';
        if (onDragStart) onDragStart(e, id);
      }}
      className="bg-white border-2 border-gray-200 hover:border-brand-primary text-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing transition-all flex items-center select-none"
    >
      <i className="fa-solid fa-grip-vertical text-gray-400 mr-3"></i>
      <span className="text-sm font-bold">{text}</span>
    </div>
  );
}

/**
 * DropZone for placing DraggableTokens.
 */
export function DropZone({ 
  id, 
  title, 
  acceptType = 'token', 
  items = [], 
  onDropItem, 
  onRemoveItem,
  className = ""
}) {
  const [isOver, setIsOver] = React.useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsOver(false);
    try {
      const payloadString = e.dataTransfer.getData('text/plain');
      if (!payloadString) return;
      
      const parsed = JSON.parse(payloadString);
      if (parsed && parsed.id && parsed.type === acceptType) {
        if (onDropItem) onDropItem(parsed.id, id);
      }
    } catch (err) {
      // Ignore parse errors from foreign drags
    }
  };

  return (
    <div 
      className={`rounded-xl border-2 transition-all flex flex-col overflow-hidden min-h-[120px] ${
        isOver ? 'border-brand-primary bg-brand-primary/5 shadow-inner' : 'border-dashed border-gray-300 bg-gray-50'
      } ${className}`}
      onDragOver={handleDragOver}
      onDragEnter={() => setIsOver(true)}
      onDragLeave={() => setIsOver(false)}
      onDrop={handleDrop}
    >
      {title && (
        <div className="bg-gray-200/50 p-2 text-center border-b border-gray-200">
          <span className="text-[10px] font-black uppercase text-gray-600 tracking-widest">{title}</span>
        </div>
      )}
      <div className="p-3 flex-grow flex flex-col gap-2">
        {items.length === 0 && (
          <div className="flex-grow flex items-center justify-center text-gray-400 text-xs italic font-semibold">
            Drop items here
          </div>
        )}
        {items.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-200 p-2 rounded shadow-sm text-xs font-bold text-gray-800 flex justify-between items-center group relative animate-in fade-in zoom-in duration-200">
            <span>{item.text}</span>
            {onRemoveItem && (
              <button 
                onClick={() => onRemoveItem(item.id, id)}
                className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity ml-2"
                title="Remove"
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Highly styled Action Slider.
 */
export function ActionSlider({ label, value, min = 1, max = 5, onChange, markers = [] }) {
  // Color calculation: green -> yellow -> red
  const pct = (value - min) / (max - min);
  let colorClass = "accent-green-500";
  if (pct > 0.4) colorClass = "accent-yellow-500";
  if (pct > 0.7) colorClass = "accent-red-500";

  return (
    <div className="flex flex-col w-full my-4">
      <div className="flex justify-between items-end mb-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-600">{label}</label>
        <span className="text-xl font-black text-brand-dark">{value}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${colorClass}`}
      />
      {markers.length > 0 && (
        <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400 uppercase">
          {markers.map((m, i) => <span key={i}>{m}</span>)}
        </div>
      )}
    </div>
  );
}

/**
 * Standardized dropdown select.
 */
export function InteractiveSelect({ value, options, onChange, placeholder = "Select an option..." }) {
  return (
    <select
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white border-2 border-gray-200 hover:border-brand-primary focus:border-brand-primary focus:ring-0 rounded-lg p-3 text-sm font-bold text-gray-800 transition-colors shadow-sm outline-none cursor-pointer"
    >
      <option value="" disabled className="text-gray-400 italic">{placeholder}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value} className="font-semibold">{opt.label}</option>
      ))}
    </select>
  );
}
