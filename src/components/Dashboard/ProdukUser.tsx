"use client";
import React, { useState } from "react";

const iotDevices = [
    {
        name: "Center Of Gravity",
        products: [
            { name: "IWK (IoT Workshop Kit)", price: 1000000 },
            { name: "Alat Peraga", price: 800000 },
            { name: "Implementasi", price: 1200000 },
        ],
    },
    {
        name: "Environmental Sensor",
        products: [
            { name: "IWK (IoT Workshop Kit)", price: 950000 },
            { name: "Alat Peraga", price: 700000 },
            { name: "Implementasi", price: 1100000 },
        ],
    },
    {
        name: "SmartCard Saga",
        products: [
            { name: "IWK (IoT Workshop Kit)", price: 1100000 },
            { name: "Alat Peraga", price: 750000 },
            { name: "Implementasi", price: 900000 },
        ],
    },
    {
        name: "Smart Watering",
        products: [
            { name: "IWK (IoT Workshop Kit)", price: 1200000 },
            { name: "Alat Peraga", price: 600000 },
            { name: "Implementasi", price: 1400000 },
        ],
    },
    {
        name: "Home Automation",
        products: [
            { name: "IWK (IoT Workshop Kit)", price: 800000 },
            { name: "Alat Peraga", price: 900000 },
            { name: "Implementasi", price: 1000000 },
        ],
    },
    {
        name: "Robotics Flex Sensor",
        products: [
            { name: "IWK (IoT Workshop Kit)", price: 950000 },
            { name: "Alat Peraga", price: 650000 },
            { name: "Implementasi", price: 1100000 },
        ],
    },
];

const ProdukUser: React.FC = () => {
    const [view, setView] = useState<"card" | "table">("card");

    const formatPrice = (price: number) => {
        return `Rp ${price.toLocaleString("id-ID")}`;
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Daftar Perangkat IoT dan Produk</h3>

            {/* Navbar Pilihan Tampilan */}
            <div className="mb-4 flex space-x-4">
                <span
                    className={`cursor-pointer ${view === "card" ? "border-b-2 border-blue-500 text-black" : "text-gray-600"}`}
                    onClick={() => setView("card")}
                >
                    Gambar
                </span>
                <span
                    className={`cursor-pointer ${view === "table" ? "border-b-2 border-blue-500 text-black" : "text-gray-600"}`}
                    onClick={() => setView("table")}
                >
                    Tabel
                </span>
            </div>

            {view === "table" ? (
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 text-left">Nama Perangkat IoT</th>
                            <th className="py-2 text-left">Produk</th>
                            <th className="py-2 text-left">Harga</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {iotDevices.map((device) => (
                            <tr key={device.name}>
                                <td className="border-b py-2">{device.name}</td>
                                <td className="border-b py-2">
                                    <ul>
                                        {device.products.map((product) => (
                                            <li key={product.name}>{product.name}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="border-b py-2">
                                    <ul>
                                        {device.products.map((product) => (
                                            <li key={product.name}>
                                                {formatPrice(product.price)} 
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {iotDevices.map((device) => (
                        <div key={device.name} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                            <h4 className="text-lg font-semibold mb-2">{device.name}</h4>
                            <h5 className="text-md font-semibold">Produk:</h5>
                            <ul className="list-disc pl-5">
                                {device.products.map((product) => (
                                    <li key={product.name} className="text-gray-700">
                                        {product.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProdukUser;
