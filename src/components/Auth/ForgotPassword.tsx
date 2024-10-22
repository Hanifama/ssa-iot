import React, { useState } from "react";

const ForgotPassword: React.FC<{ switchToLogin: () => void }> = ({ switchToLogin }) => {
  const [email, setEmail] = useState('');

  const handleForgotPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email untuk reset password:", email);    
    switchToLogin();
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Lupa Password</h2>
        <p className="text-sm mb-6">Masukkan email Anda untuk mengatur ulang password:</p>
        <form onSubmit={handleForgotPasswordSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded shadow hover:bg-blue-700 transition duration-200"
          >
            Kirim Permintaan
          </button>
        </form>
        <button
          className="mt-4 text-blue-600 hover:underline"
          onClick={switchToLogin} 
        >
          Kembali ke Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
