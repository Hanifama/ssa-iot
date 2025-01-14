"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
    label: string;
    icon?: IconType; 
    className?: string;
    redirectTo?: string; 
    onClick?: () => void; 
    type?: 'button' | 'submit';
}

const CustomButton: React.FC<ButtonProps> = ({ label, icon: Icon, className, redirectTo, onClick, type = 'button' }) => {
    const router = useRouter();

    const handleClick = () => {
        if (redirectTo) {
            router.push(redirectTo); 
        } else if (onClick) {
            onClick(); 
        }
    };

    return (
        <button 
            type={type} 
            onClick={handleClick} 
            className={`btn px-6 py-3 flex items-center justify-center space-x-2 ${className}`}
        >
            {label}
            {Icon && <span className="ml-2"><Icon /> </span>} 
        </button>
    );
};

export default CustomButton;
