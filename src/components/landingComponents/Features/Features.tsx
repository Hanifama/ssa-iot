"use client"
import React, { useState } from 'react';
import { RiSensorLine, RiTimerLine, RiShieldCheckLine, RiSettings3Line } from 'react-icons/ri';
import featuresDataJson from '@/lib/mocks/featuresData.json'; 
import { FeaturesTypes } from '@/lib/types/features';

const Features: React.FC = () => {
  const featuresData: FeaturesTypes = featuresDataJson;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); 

  return (
    <section className="section__container feature__container px-2 md:py-10 py-16 flex flex-col md:flex-row" id='service'>
      
      <div className="feature__content w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center px-4">
        <h3 className="section__subheader text-lg font-semibold">{featuresData.featuresContent.content.subheader}</h3>
        <h2 className="section__header text-3xl md:text-4xl font-bold mb-4">{featuresData.featuresContent.content.header}</h2>
        <p className="py-4 text-gray-600 text-base md:text-lg">{featuresData.featuresContent.content.description}</p>
        <div className="feature__btn">
          <button className={featuresData.featuresContent.content.button.className}>
            {featuresData.featuresContent.content.button.label} <span><i className="ri-arrow-right-up-line"></i></span>
          </button>
        </div>
      </div>
      
      <div className="feature__grid w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4">
        {featuresData.featuresContent.featuresList.map((feature, index) => {
          let Icon;
          switch (index) {
            case 0:
              Icon = RiSensorLine;
              break;
            case 1:
              Icon = RiTimerLine;
              break;
            case 2:
              Icon = RiShieldCheckLine;
              break;
            case 3:
              Icon = RiSettings3Line;
              break;
            default:
              Icon = null;
          }                    

          return (
            <div
              key={index}
              className="feature__card p-4 border-2 border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)} 
            >
              <span className={`inline-block text-3xl mb-2 transition duration-300 ease-in-out ${hoveredIndex === index ? 'text-accent' : 'text-gray-800'}`}>                
                {Icon ? <Icon className={`text-2xl ${hoveredIndex === index ? 'text-accent' : 'text-gray-800'}`} /> : null}
              </span>
              <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
