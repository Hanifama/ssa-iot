"use client";
import React, { useState } from "react";

const ActivateAccount: React.FC = () => {
  const [activationCode, setActivationCode] = useState<string[]>(Array(6).fill(''));

  const handleChange = (index: number, value: string) => {
    const newCode = [...activationCode];
    newCode[index] = value.replace(/[^0-9]/g, '');
    setActivationCode(newCode);
    
    if (value && index < 5) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleActivateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = activationCode.join(''); 
    console.log("Activation Code:", code);    
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Aktivasi Akun</h2>
        <p className="text-sm mb-6">Masukkan kode aktivasi Anda:</p>
        <form onSubmit={handleActivateSubmit} className="w-full max-w-sm">
          <div className="flex space-x-2 mb-4">
            {activationCode.map((digit, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                maxLength={1}
                className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-foreground text-white p-3 rounded shadow hover:bg-blue-700 transition duration-200"
          >
            Aktivasi Akun
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActivateAccount;
