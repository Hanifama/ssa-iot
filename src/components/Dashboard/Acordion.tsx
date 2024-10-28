import React, { useState } from "react";

interface AccordionProps {
    title: string;
    content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-300 mb-4">
            {/* Header */}
            <button
                onClick={toggleAccordion}
                className="flex justify-between items-center w-full p-4 bg-gray-100 text-left text-lg font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 rounded transition duration-300"
            >
                <span>{title}</span>
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Content */}
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40" : "max-h-0"
                }`}
            >
                <p className="p-4 text-gray-600">{content}</p>
            </div>
        </div>
    );
};

export default Accordion;
