"use client";
import React from "react";
import { FiBox } from "react-icons/fi"; 
import Accordion from "./Acordion";

const iotDevices = [
    {
        name: "Center Of Gravity",
        icon: <FiBox />, 
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 50 },
            { name: "Alat Peraga", value: 30 },
            { name: "Implementasi", value: 20 },
        ],
    },
    {
        name: "Environmental Sensor",
        icon: <FiBox />, 
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 40 },
            { name: "Alat Peraga", value: 25 },
            { name: "Implementasi", value: 35 },
        ],
    },
    {
        name: "SmartCard Saga",
        icon: <FiBox />, 
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 60 },
            { name: "Alat Peraga", value: 20 },
            { name: "Implementasi", value: 15 },
        ],
    },
    {
        name: "Smart Watering",
        icon: <FiBox />, 
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 70 },
            { name: "Alat Peraga", value: 10 },
            { name: "Implementasi", value: 25 },
        ],
    },
    {
        name: "Home Automation",
        icon: <FiBox />,
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 30 },
            { name: "Alat Peraga", value: 50 },
            { name: "Implementasi", value: 40 },
        ],
    },
    {
        name: "Robotics Flex Sensor",
        icon: <FiBox />,
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 20 },
            { name: "Alat Peraga", value: 35 },
            { name: "Implementasi", value: 45 },
        ],
    },
];

const DashboardContentUser: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Card Ucapan Selamat Datang dan Saldo */}
            <div className="bg-blue-200 p-4 rounded-lg shadow mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Selamat Datang, { }</h1>
                <p className="mt-2 text-gray-700">Token Anda: <span className="font-semibold">Rp 1.500.000</span></p>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">Daftar Perangkat IoT dan Produk</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {iotDevices.map((device) => (
                    <div
                        key={device.name}
                        className="relative bg-gray-100 p-4 rounded-lg shadow-lg transition-all duration-300 border-l-4 border-accent flex flex-col overflow-hidden hover:bg-accent hover:shadow-xl"
                    >
                        <div className="relative z-10 flex items-center mb-4 transition-colors duration-300 ease-in-out hover:text-white">
                            {device.icon}
                            <h4 className="text-lg font-semibold text-gray-800 ml-2">{device.name}</h4>
                        </div>
                        <h5 className="text-md font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-white">Produk:</h5>
                        <ul className="list-disc pl-5 mt-2">
                            {device.products.map((product) => (
                                <li key={product.name} className="text-gray-700 mt-1 transition-colors duration-300 ease-in-out hover:text-white">
                                    {product.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="p-8 max-w-lg mx-auto">
                <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
                <Accordion
                    title="What is your return policy?"
                    content="Our return policy allows returns within 30 days of purchase. Make sure the item is in its original condition."
                />
                <Accordion
                    title="How long does shipping take?"
                    content="Shipping usually takes 3-5 business days within the country and 7-14 days internationally."
                />
                <Accordion
                    title="Do you offer customer support?"
                    content="Yes, our customer support is available 24/7. Reach us via chat, email, or phone."
                />
            </div>

        </div>
    );
};

export default DashboardContentUser;
