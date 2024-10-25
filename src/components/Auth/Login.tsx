"use client"
import { useRouter } from 'next/navigation';

import { motion } from "framer-motion";
import CustomForm from "../_shared/CustomForm/Index";
import CustomInput from '../_shared/CustomInput/Index';
import { useState } from 'react';
import Image from 'next/image';


const Login: React.FC<{ switchToRegister: () => void; switchToForgotPassword: () => void; }> = ({ switchToRegister, switchToForgotPassword }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
  const handleLoginSubmit = (formData: Record<string, string>) => {
    const { email, password } = formData;

    if (email === dummyAccounts.admin.email && password === dummyAccounts.admin.password) {
      localStorage.setItem('role', 'admin');
      router.push('/dashboard');
    } else if (email === dummyAccounts.user.email && password === dummyAccounts.user.password) {
      localStorage.setItem('role', 'user');
      router.push('/dashboard/user');
    } else {
      alert("Akun Anda Belum Terdaftar");
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
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
          <CustomForm
            handleSubmit={handleLoginSubmit}
            submitLabel="Login"
            switchToForgotPassword={switchToForgotPassword}
          >
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Masukan Email Anda"
              required
              onChange={handleChange}
              value={formData["email"] || ""}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="Masukan Password Anda"
              required
              onChange={handleChange}
              value={formData["password"] || ""}
            />
          </CustomForm>
          <p>
            Belum Punya akun?
            <motion.span
              onClick={switchToRegister}
              className="mt-4 ml-1 text-foreground hover:underline cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Daftar
            </motion.span>
          </p>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex items-center justify-center w-1/2 h-full bg-blue-200">
        <div className="relative w-full h-full">
          <Image
            src="/assets/header.jpg"
            alt="Header"
            width={700}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
