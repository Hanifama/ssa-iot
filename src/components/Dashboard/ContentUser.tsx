"use client"; 
import React from "react";

const iotDevices = [
    {
        name: "Center Of Gravity",
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 50 },
            { name: "Alat Peraga", value: 30 },
            { name: "Implementasi", value: 20 },
        ],
    },
    {
        name: "Environmental Sensor",
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 40 },
            { name: "Alat Peraga", value: 25 },
            { name: "Implementasi", value: 35 },
        ],
    },
    {
        name: "SmartCard Saga",
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 60 },
            { name: "Alat Peraga", value: 20 },
            { name: "Implementasi", value: 15 },
        ],
    },
    {
        name: "Smart Watering",
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 70 },
            { name: "Alat Peraga", value: 10 },
            { name: "Implementasi", value: 25 },
        ],
    },
    {
        name: "Home Automation",
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 30 },
            { name: "Alat Peraga", value: 50 },
            { name: "Implementasi", value: 40 },
        ],
    },
    {
        name: "Robotics Flex Sensor",
        products: [
            { name: "IWK (IoT Workshop Kit)", value: 20 },
            { name: "Alat Peraga", value: 35 },
            { name: "Implementasi", value: 45 },
        ],
    },
];

const DashboardContentUser: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Card Ucapan Selamat Datang dan Saldo */}
            <div className="bg-blue-100 p-4 rounded-lg shadow mb-6">
                <h1 className="text-xl font-bold">Selamat Datang, User</h1>
                <p className="mt-2">Token Anda: <span className="font-semibold">Rp 1.500.000</span></p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Daftar Perangkat IoT dan Produk</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {iotDevices.map((device) => (
                    <div key={device.name} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                        <h4 className="text-lg font-semibold mb-2">{device.name}</h4>
                        <h5 className="text-md font-semibold">Produk:</h5>
                        <ul className="list-disc pl-5">
                            {device.products.map((product) => (
                                <li key={product.name} className="text-gray-700">{product.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardContentUser;
