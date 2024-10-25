import React, { useState } from 'react';
import Label from './Label';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

interface CustomInputProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ 
    label, 
    type, 
    name, 
    placeholder, 
    value, 
    onChange, 
    required 
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mb-4 relative">
            <Label required={required}>{label}</Label> 
            <input
                name={name} 
                type={showPassword && type === 'password' ? 'text' : type} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-foreground transition duration-200"
            />
            {type === 'password' && ( 
                <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute inset-y-0 top-5 right-3 flex items-center"
                >
                    {showPassword ? (
                        <FaEyeSlash className="h-5 w-5 text-gray-500" />
                    ) : (
                        <FaEye className="h-5 w-5 text-gray-500" />
                    )}
                </button>
            )}
        </div>
    );
};

export default CustomInput;
