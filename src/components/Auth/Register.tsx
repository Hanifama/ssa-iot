"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register: React.FC<{ switchToLogin: () => void }> = ({ switchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);    
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
      <div className="hidden lg:flex items-center justify-center w-1/2 h-full bg-blue-200">
        {/* Gambar */}
        <img src="/assets/header.jpg" alt="Descriptive Alt Text" className="object-cover w-full h-full" />
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 20 }} 
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center w-full h-full p-8 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-800">Daftar Akun Anda</h2>
          <p className="text-sm mb-3">Isi detail Anda di bawah untuk bergabung bersama kami.</p>

          <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col">
            {/* Sub-bab Akun Anda */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Akun Anda</h3>
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
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-5 w-5 text-gray-500" />
                    ) : (
                      <FaEye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Sub-bab Data Diri Anda */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Data Diri Anda</h3>
              <div className="mb-4">
                <label className="block text-gray-700">Nama</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
                />
              </div>
              <div>
                <label className="block text-gray-700">No Telepon</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded shadow hover:bg-blue-700 transition duration-200 mt-4"
            >
              Daftar
            </button>
          </form>
          <p>
            Sudah Punya akun? 
            <motion.span            
            onClick={switchToLogin}
            className=" ml-1 mt-4 text-blue-600 hover:underline cursor-pointer"
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.2 }} 
            >
              Masuk
              </motion.span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
