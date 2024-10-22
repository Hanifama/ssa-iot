import React from 'react';

import { RiWirelessChargingLine, RiBattery2ChargeLine } from 'react-icons/ri';

import specsData from '@/lib/mocks/specsData.json';
import { Spec } from '@/lib/types/specs';

const Specs: React.FC = () => {
  const specs: Spec[] = specsData.map((spec, index) => {
    let icon: React.ReactNode;
    switch (index) {
      case 0:
        icon = <RiWirelessChargingLine className="text-3xl text-gray-800 transition duration-300" />;
        break;
      case 1:
        icon = <RiBattery2ChargeLine className="text-3xl text-gray-800 transition duration-300" />;
        break;
      default:
        icon = null;
    }

    return {
      icon,
      title: spec.title,
      description: spec.description,
    };
  });

  return (
    <section className="specs relative bg-[#e1e8e1] bg-cover bg-fixed md:bg-fixed" style={{ backgroundImage: "url('/assets/specs.png')" }}>
      <div className="absolute inset-0 md:hidden">
        <div className="h-full w-full bg-cover" style={{ backgroundImage: "url('/assets/specs.png')" }}></div>
      </div>

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="section__container specs__container grid md:grid-cols-2 gap-8 p-4 md:p-8 relative z-7">
        <h1 className="col-span-2 text-3xl font-bold text-white text-center mb-6">
          Kelebihan Produk IoT Kami
        </h1>
        {specs.map((spec, index) => (
          <div className="specs__row" key={index}>
            <div className="specs__card p-4 bg-white rounded-lg shadow-md flex items-start">
              <span className="mr-4">{spec.icon}</span>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{spec.title}</h4>
                <p className="text-gray-600">{spec.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specs;
