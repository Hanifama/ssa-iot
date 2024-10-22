import React from 'react';
import orderStepsData from '@/lib/mocks/orderStepsData.json';
import { OrderStepsData } from '@/lib/types/stepsorder';


const OrderSteps: React.FC = () => {  
  const { title, description, steps } = orderStepsData as OrderStepsData;

  return (
    <section className="bg-gray-100 py-16" id='stepsorder'>
      <div className="container mx-auto text-center px-6">
        <h2 className="font-bold">{title}</h2>
        <p className="text-3xl mb-12 text-gray-600">{description}</p>
                
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {steps.slice(0, 3).map((step) => (
            <div className="relative transform rotate-2 transition-transform duration-300 hover:rotate-0" key={step.number}>
              <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center absolute left-0 top-0 -translate-y-1/2">
                {step.number}
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-left pl-12">
                <div className="text-lg font-semibold">{step.title}</div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
                
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.slice(3).map((step) => (
            <div className="relative transform rotate-2 transition-transform duration-300 hover:rotate-0" key={step.number}>
              <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center absolute left-0 top-0 -translate-y-1/2">
                {step.number}
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-left pl-12">
                <div className="text-lg font-semibold">{step.title}</div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;
