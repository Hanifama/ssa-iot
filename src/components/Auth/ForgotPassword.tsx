import React, { useState } from "react";
import CustomForm from "@/components/_shared/CustomForm/Index";
import CustomInput from "../_shared/CustomInput/Index";

const ForgotPassword: React.FC<{ switchToLogin: () => void }> = ({ switchToLogin }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleForgotPasswordSubmit = (formData: Record<string, string>) => {
    console.log("Email untuk reset password:", formData.email);
    switchToLogin();
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Lupa Password</h2>
        <p className="text-sm mb-6">Masukkan email Anda untuk mengatur ulang password</p>
        <CustomForm
          handleSubmit={handleForgotPasswordSubmit}
          submitLabel="Kirim Permintaan"
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
        </CustomForm>
        <button
          className="mt-4 text-foreground hover:text-gray-700"
          onClick={switchToLogin}
        >
          Kembali ke Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
