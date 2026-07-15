import React from 'react';

export default function ExhibitViewer({ exhibitData }) {
  if (!exhibitData) return null;

  const { description, likelihood_scale, impact_scale, bands, acceptance_criteria, rows } = exhibitData;

  return (
    <div className="h-full w-full bg-white rounded-2xl shadow-inner border border-gray-200 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between border-b-4 border-brand-gold">
        <h3 className="font-black text-lg uppercase tracking-widest flex items-center">
          <i className="fa-solid fa-book-open text-brand-gold mr-3"></i>
          Reference Exhibit
        </h3>
        <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest bg-slate-700 px-2 py-1 rounded">Required Context</span>
      </div>

      {/* Content Area */}
      <div className="p-6 overflow-y-auto flex-grow bg-slate-50 space-y-6">
        
        {/* Description (Common to all exhibits) */}
        {description && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
            <h4 className="text-[10px] font-black uppercase text-blue-800 tracking-widest mb-2"><i className="fa-solid fa-circle-info mr-2"></i>Exhibit Context</h4>
            <p className="text-sm font-semibold text-blue-900 leading-relaxed">{description}</p>
          </div>
        )}

        {/* Risk Matrix Specific UI */}
        {(likelihood_scale || impact_scale || (bands && bands.length > 0)) && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-slate-100 px-4 py-3 border-b border-gray-200">
               <h4 className="text-xs font-black uppercase text-slate-700 tracking-widest"><i className="fa-solid fa-table-cells mr-2"></i>Risk Assessment Framework</h4>
            </div>
            <div className="p-4 space-y-4">
              {likelihood_scale && (
                <div>
                  <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest block mb-1">Likelihood Scale</span>
                  <p className="text-sm font-bold text-gray-800 bg-gray-50 p-2 rounded border border-gray-100">{likelihood_scale}</p>
                </div>
              )}
              {impact_scale && (
                <div>
                  <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest block mb-1">Impact Scale</span>
                  <p className="text-sm font-bold text-gray-800 bg-gray-50 p-2 rounded border border-gray-100">{impact_scale}</p>
                </div>
              )}
              
              {bands && bands.length > 0 && (
                <div>
                  <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest block mb-2 mt-4">Risk Classification Bands</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {bands.map((band, idx) => {
                      // Determine visual color based on standard risk levels
                      let colorClass = "bg-gray-100 text-gray-700 border-gray-300";
                      const lvl = band.level.toLowerCase();
                      if (lvl.includes("low")) colorClass = "bg-green-100 text-green-800 border-green-300";
                      if (lvl.includes("medium")) colorClass = "bg-yellow-100 text-yellow-800 border-yellow-300";
                      if (lvl.includes("high")) colorClass = "bg-orange-100 text-orange-800 border-orange-300";
                      if (lvl.includes("critical") || lvl.includes("severe")) colorClass = "bg-red-100 text-red-800 border-red-300";

                      return (
                        <div key={idx} className={`p-3 rounded-lg border-2 flex flex-col items-center justify-center text-center ${colorClass}`}>
                          <span className="text-xl font-black">{band.range || `${band.min}-${band.max}`}</span>
                          <span className="text-[10px] uppercase tracking-widest font-bold mt-1">{band.level}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {acceptance_criteria && (
                <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                  <span className="text-[10px] font-black uppercase text-brand-primary tracking-widest block mb-1">Acceptance Criteria</span>
                  <p className="text-sm font-bold text-gray-800">{acceptance_criteria}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SoA Excerpt Specific UI */}
        {rows && rows.length > 0 && (
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             <div className="bg-slate-100 px-4 py-3 border-b border-gray-200">
               <h4 className="text-xs font-black uppercase text-slate-700 tracking-widest"><i className="fa-solid fa-list-check mr-2"></i>Statement of Applicability (SoA)</h4>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left text-sm">
                 <thead className="bg-gray-50 border-b border-gray-200">
                   <tr>
                     <th className="px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Control</th>
                     <th className="px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</th>
                     <th className="px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Justification</th>
                     <th className="px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Implementation</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                   {rows.map((row, idx) => (
                     <tr key={idx} className="hover:bg-gray-50 transition-colors">
                       <td className="px-4 py-3 font-bold text-brand-dark w-1/3">{row.control}</td>
                       <td className="px-4 py-3">
                         <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${row.included.toLowerCase() === 'included' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-600'}`}>
                           {row.included}
                         </span>
                       </td>
                       <td className="px-4 py-3 text-gray-600 italic text-xs w-1/3">{row.justification || <span className="text-red-400 font-bold">[BLANK]</span>}</td>
                       <td className="px-4 py-3 text-gray-800 font-semibold text-xs">{row.status}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
        )}

      </div>
    </div>
  );
}
