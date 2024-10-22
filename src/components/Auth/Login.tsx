"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login: React.FC<{ switchToRegister: () => void; switchToForgotPassword: () => void; }> = ({ switchToRegister, switchToForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  
  const dummyAccounts = {
    admin: {
      email: 'admin@gmail.com',
      password: 'admin123',
      role: 'admin',
    },
    user: {
      email: 'user@gmail.com',
      password: 'user123',
      role: 'user',
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (email === dummyAccounts.admin.email && password === dummyAccounts.admin.password) {      
      console.log("Logged in as Admin");
      localStorage.setItem('role', 'admin'); 
      router.push('/dashboard');
    }     
    else if (email === dummyAccounts.user.email && password === dummyAccounts.user.password) {      
      console.log("Logged in as User");
      localStorage.setItem('role', 'user'); 
      router.push('/dashboard/user');
    }     
    else {      
      alert("Akun Anda Belum Terdaftar");
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
      {/* Form Section */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center w-full h-full p-8 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          <p className="text-sm mb-6">Masukkan Email dan Password Anda</p>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
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

            <motion.p
              className="mt-2 text-blue-600 hover:underline cursor-pointer self-start"              
              transition={{ duration: 0.2 }}
              onClick={switchToForgotPassword}
            >
              Lupa Password?
            </motion.p>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded shadow hover:bg-blue-700 transition duration-200 mt-2"
            >
              Login
            </button>
          </form>

          <p>
            Belum Punya akun?  <motion.span 
            onClick={switchToRegister}
            className="mt-4 text-blue-600 hover:underline cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            >
              Daftar
            </motion.span>
          </p>
        </motion.div>
      </div>
      
      <div className="hidden lg:flex items-center justify-center w-1/2 h-full bg-blue-200">        
        <img src="/assets/header.jpg" alt="Descriptive Alt Text" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Login;
