import React, { useState } from 'react';

export default function LoginScreen({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !code.trim()) {
      setErrorMsg("All credentials (Name, Email, Access Code) required.");
      return;
    }
    setErrorMsg('');
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/verify-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim(), studentEmail: email.trim(), studentName: name.trim() })
      });
      const data = await res.json();
      
      if (!res.ok) {
        setErrorMsg(data.detail || "Authentication Failed.");
        setIsLoading(false);
        return;
      }

      onLogin(name.trim(), email.trim(), code.trim(), data.exam_id, data.savedState);
    } catch (e) {
      setErrorMsg("Vault Connection Refused. System down.");
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-200 transform transition-all my-auto">
        <div className="bg-brand-dark p-6 md:p-8 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
            <i className="fa-solid fa-fingerprint text-4xl mb-4 text-brand-gold opacity-90 drop-shadow-md"></i>
            <h2 className="text-xl font-black mb-1 uppercase tracking-widest leading-tight">Identity Verification</h2>
            <p className="text-emerald-100/70 text-xs font-medium px-4">Provide your Vault Access Code.</p>
        </div>
        <div className="p-6 md:p-8 bg-slate-50">
            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 flex items-center shadow-sm animate-pulse">
                 <i className="fa-solid fa-triangle-exclamation text-xl mr-3 text-red-500"></i>
                 <span className="text-[11px] uppercase tracking-widest font-black leading-tight">{errorMsg}</span>
              </div>
            )}
            <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Full Name</label>
                  <div className="relative">
                    <i className="fa-solid fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white shadow-sm text-sm font-bold text-gray-800 transition placeholder-gray-300" 
                      placeholder="Jane Doe" 
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Professional Email</label>
                  <div className="relative">
                    <i className="fa-solid fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white shadow-sm text-sm font-bold text-gray-800 transition placeholder-gray-300" 
                      placeholder="corporate address"
                      disabled={isLoading} 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-brand-primary uppercase tracking-widest mb-1.5 ml-1">Vault Access Code</label>
                  <div className="relative">
                    <i className="fa-solid fa-key absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-primary"></i>
                    <input 
                      type="text" 
                      value={code} 
                      onChange={(e) => setCode(e.target.value)} 
                      className="w-full pl-11 pr-4 py-3 border-2 border-brand-primary/30 rounded-xl outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white shadow-sm text-lg font-black tracking-widest text-brand-dark transition placeholder-gray-300 uppercase" 
                      placeholder="ASTUTE-XXXX" 
                      disabled={isLoading}
                    />
                  </div>
                </div>
            </div>
            <button 
              onClick={handleSubmit} 
              disabled={isLoading}
              className="w-full bg-brand-primary text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:bg-emerald-600 transition flex justify-center items-center group disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? "Verifying..." : "Authorize & Proceed"} 
                {!isLoading && <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>}
            </button>
        </div>
      </div>
    </div>
  );
}
