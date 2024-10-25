"use client"
import CustomForm from "../_shared/CustomForm/Index";
import { motion } from "framer-motion";
import CustomInput from "../_shared/CustomInput/Index";
import { useState } from "react";
import Image from "next/image";

const Register: React.FC<{ switchToLogin: () => void }> = ({ switchToLogin }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const handleRegisterSubmit = (formData: Record<string, string>) => {
    console.log('Registration data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
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

      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="w-full max-w-xl items-center flex flex-col bg-white p-8">
          <h2 className="text-3xl font-bold text-gray-800">Register</h2>
          <p className="text-sm mb-6">Daftarkan Akun Anda untuk Mengakses Fitur Kami</p>
          <CustomForm
            handleSubmit={handleRegisterSubmit}
            submitLabel="Register"
            showAdditionalFields={true}
          >
            <CustomInput
              label="Nama"
              name="name"
              type="text"
              placeholder="Masukan Nama Anda"
              required
              onChange={handleChange}
              value={formData["name"] || ""}
            />
            <CustomInput
              label="No Telp"
              name="notelp"
              type="tel"
              placeholder="Masukan No Telp Anda"
              required
              onChange={handleChange}
              value={formData["notelp"] || ""}
            />
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
            Sudah Punya Akun?
            <motion.span
              onClick={switchToLogin}
              className="mt-4 ml-1 text-foreground hover:underline cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Masuk
            </motion.span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
