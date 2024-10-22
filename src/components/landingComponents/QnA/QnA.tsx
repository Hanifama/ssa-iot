"use client";

import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import { QuestionProps } from '@/lib/types/QnA';
import qnaData from '@/lib/mocks/QnAData.json'; 

const Question: React.FC<QuestionProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`border border-accent rounded-md p-4 transition duration-300 hover:bg-gray-200 shadow-lg ${isOpen ? 'h-auto' : 'h-[60px]'}`} id='QnA'>
      <div onClick={onToggle} className={`cursor-pointer flex justify-between items-center transition duration-300 ${isOpen ? 'text-accent' : 'text-gray-800'}`}>
        <h4 className="text-lg font-semibold">{question}</h4>
        <span className={`transform transition-transform duration-300`}>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>
      <div className={`mt-2 text-gray-600 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0'}`}>
        <p className={`transition-all duration-300 ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const QnASection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-10 bg-gray-50 text-accent">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-accent">Q&A</h2>
        <h1 className="text-2xl font-bold mb-6 text-center text-primary">Pertanyaan Yang Paling Sering Ditanyakan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qnaData.map((item, index) => (
            <Question
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleAnswer(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QnASection;
