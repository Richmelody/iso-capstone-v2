import React from 'react';

export default function ExhibitViewer({ exhibitData }) {
  if (!exhibitData) return null;

  const { description, paragraphs, likelihood_scale, impact_scale, bands, acceptance_criteria, rows } = exhibitData;

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
            <p className="text-sm font-semibold text-blue-900 leading-relaxed whitespace-pre-line">{description}</p>
          </div>
        )}

        {/* Paragraphs for multi-part stories */}
        {paragraphs && paragraphs.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             <div className="bg-slate-100 px-4 py-3 border-b border-gray-200">
               <h4 className="text-xs font-black uppercase text-slate-700 tracking-widest"><i className="fa-solid fa-align-left mr-2"></i>Case Study Narrative</h4>
             </div>
             <div className="p-6 space-y-4">
               {paragraphs.map((para, idx) => (
                 <p key={idx} className="text-sm text-gray-700 leading-relaxed">
                   <span className="font-bold text-brand-dark mr-2">{idx + 1}.</span>
                   {para}
                 </p>
               ))}
             </div>
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

        {/* Table Specific UI */}
        {rows && rows.length > 0 && (
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
             {rows[0].control !== undefined ? (
               <>
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
                             <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${row.included?.toLowerCase() === 'included' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-600'}`}>
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
               </>
             ) : rows[0].obligation !== undefined ? (
               <>
                 <div className="bg-slate-100 px-4 py-3 border-b border-gray-200">
                   <h4 className="text-xs font-black uppercase text-slate-700 tracking-widest"><i className="fa-solid fa-list-check mr-2"></i>Compliance Obligations Register</h4>
                 </div>
                 <div className="overflow-x-auto">
                   <table className="w-full text-left text-sm">
                     <thead className="bg-gray-50 border-b border-gray-200">
                       <tr>
                         <th className="px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Obligation</th>
                         <th className="px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Owner</th>
                         <th className="px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Review Date</th>
                         <th className="px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Evidence</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                       {rows.map((row, idx) => (
                         <tr key={idx} className="hover:bg-gray-50 transition-colors">
                           <td className="px-4 py-3 font-bold text-brand-dark w-1/4">{row.obligation}</td>
                           <td className="px-4 py-3 text-gray-800 font-semibold text-xs w-1/4">{row.owner || <span className="text-red-400 font-bold">[Not assigned]</span>}</td>
                           <td className="px-4 py-3 text-gray-600 italic text-xs w-1/4">{row.review_date}</td>
                           <td className="px-4 py-3 text-gray-600 text-xs w-1/4">{row.evidence}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               </>
             ) : (
               <div className="p-4 text-center text-gray-500 italic">Unknown table format.</div>
             )}
           </div>
        )}
        {/* DYNAMIC LEGO COMPONENTS */}
        {Object.entries(exhibitData).map(([key, value]) => {
          if (['description', 'paragraphs', 'likelihood_scale', 'impact_scale', 'bands', 'acceptance_criteria', 'rows'].includes(key)) {
            return null; // Handled by legacy code above
          }

          // TextBlockViewer for Strings
          if (typeof value === 'string') {
            return (
              <div key={key} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mt-4">
                <div className="bg-slate-100 px-4 py-3 border-b border-gray-200">
                  <h4 className="text-xs font-black uppercase text-slate-700 tracking-widest">{key.replace(/_/g, ' ')}</h4>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">{value}</p>
                </div>
              </div>
            );
          }

          // Array logic
          if (Array.isArray(value) && value.length > 0) {
            // InterviewTranscriptViewer
            if (value[0].speaker && value[0].line) {
              return (
                <div key={key} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mt-4">
                  <div className="bg-slate-100 px-4 py-3 border-b border-gray-200">
                    <h4 className="text-xs font-black uppercase text-slate-700 tracking-widest"><i className="fa-solid fa-comments mr-2"></i>{key.replace(/_/g, ' ')}</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    {value.map((exchange, idx) => (
                      <div key={idx} className={`p-4 rounded-lg ${idx % 2 === 0 ? 'bg-blue-50 ml-8 border-l-4 border-blue-400' : 'bg-gray-50 mr-8 border-l-4 border-gray-400'}`}>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-1">{exchange.speaker}:</span>
                        <p className="text-sm font-medium text-gray-800">{exchange.line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // DynamicTableViewer for other arrays of objects
            const headers = Object.keys(value[0]);
            return (
              <div key={key} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mt-4">
                <div className="bg-slate-100 px-4 py-3 border-b border-gray-200">
                  <h4 className="text-xs font-black uppercase text-slate-700 tracking-widest"><i className="fa-solid fa-table mr-2"></i>{key.replace(/_/g, ' ')}</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        {headers.map((h, i) => (
                          <th key={i} className="px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">{h.replace(/_/g, ' ')}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {value.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          {headers.map((h, i) => (
                            <td key={i} className="px-4 py-3 text-gray-800 font-semibold text-xs">{String(row[h])}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          // KeyValueViewer for Objects
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            return (
              <div key={key} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mt-4">
                <div className="bg-slate-100 px-4 py-3 border-b border-gray-200">
                  <h4 className="text-xs font-black uppercase text-slate-700 tracking-widest"><i className="fa-solid fa-list mr-2"></i>{key.replace(/_/g, ' ')}</h4>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(value).map(([k, v], idx) => (
                    <div key={idx} className="border border-gray-100 p-3 rounded-lg bg-gray-50">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-1">{k}:</span>
                      <p className="text-sm font-bold text-gray-800">{String(v)}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return null;
        })}

      </div>
    </div>
  );
}
