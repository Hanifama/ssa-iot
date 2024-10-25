import React, { ReactNode } from 'react';
import CustomButton from '../CusctomBotton/Index';

interface CustomFormProps {
    handleSubmit: (formData: Record<string, string>) => void;
    submitLabel: string;
    switchToForgotPassword?: () => void;
    children?: ReactNode; 
    showAdditionalFields?: boolean; 
}

const CustomForm: React.FC<CustomFormProps> = ({
    handleSubmit,
    submitLabel,
    switchToForgotPassword,
    children,
}) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const formData: Record<string, string> = {};
        
        const formElements = e.currentTarget.elements; 
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i] as HTMLInputElement;
            if (element.name) {
                formData[element.name] = element.value; 
            }
        }

        handleSubmit(formData); 
    };

    return (
        <form onSubmit={onSubmit} className="w-full max-w-sm"> 
            {children}

            {switchToForgotPassword && (
                <p
                    className="mt-2 text-foreground hover:underline cursor-pointer self-start"
                    onClick={switchToForgotPassword}
                >
                    Lupa Password?
                </p>
            )}

            <CustomButton
                label={submitLabel}
                type="submit"
                className="w-full bg-foreground text-white p-3 rounded shadow hover:bg-gray-800 transition duration-200 mt-2"
            />
        </form>
    );
};

export default CustomForm;
