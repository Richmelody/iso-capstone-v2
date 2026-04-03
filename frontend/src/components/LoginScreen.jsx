import React, { useState } from 'react';

export default function LoginScreen({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!name || !email) {
      alert("Professional Identification required.");
      return;
    }
    onLogin(name, email);
  };

  return (
    <div className="page-container bg-white rounded-2xl shadow-xl overflow-hidden border">
      <div className="iso-header-bg p-12 text-white text-center">
          <h2 className="text-3xl font-black mb-2 uppercase">Auditor Login</h2>
          <p className="text-emerald-100 italic">Secure access to the EMS Evaluation Environment.</p>
      </div>
      <div className="p-8 md:p-12 text-center">
          <div className="max-w-md mx-auto space-y-4 mb-8">
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-brand-primary" 
                placeholder="Full Auditor Name" 
              />
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-brand-primary" 
                placeholder="Professional Email Address" 
              />
          </div>
          <button 
            onClick={handleSubmit} 
            className="bg-brand-dark text-white font-black text-xl px-12 py-5 rounded-2xl shadow-xl hover:bg-black transition"
          >
              Enter Evaluation Zone <i className="fa-solid fa-id-badge ml-2"></i>
          </button>
      </div>
    </div>
  );
}
