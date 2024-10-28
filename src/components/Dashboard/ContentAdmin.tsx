"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { RiArrowRightCircleLine } from "react-icons/ri";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

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

const DashboardContent: React.FC = () => {
    const [selectedDevice, setSelectedDevice] = useState<string>("");

    const filteredDevices = selectedDevice
        ? iotDevices.filter(device => device.name === selectedDevice)
        : iotDevices;

    const labels = selectedDevice
        ? filteredDevices[0].products.map(product => product.name)
        : iotDevices.map(device => device.name);

    const productValues = selectedDevice
        ? filteredDevices[0].products.map(product => product.value)
        : iotDevices.map(device =>
            device.products.reduce((total, product) => total + product.value, 0)
        );

    const data = {
        labels,
        datasets: [
            {
                label: "Total Produk",
                data: productValues,
                backgroundColor: "rgba(255, 215, 0, 0.6)",
                borderColor: "rgba(255, 215, 0, 1)",      
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: selectedDevice ? `${selectedDevice} - Jumlah Total Produk` : "Jumlah Total Produk per Perangkat IoT",
            },
        },
    };

    return (
        <div className="flex flex-col space-y-6">            

            {/* Kartu Statistik */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md flex flex-col justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Total Users</h3>
                    <p className="text-3xl font-bold text-amber-600">1,234</p>
                    <span className="text-gray-500">Lorem Ipsum</span>
                </div>
                <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md flex flex-col justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Produk IoT</h3>
                    <p className="text-3xl font-bold text-teal-600">567</p>
                    <span className="text-gray-500">Lorem Ipsum</span>
                </div>
                <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md flex flex-col justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Saldo Masuk</h3>
                    <p className="text-3xl font-bold text-indigo-600">Rp 4 Milliar</p>
                    <span className="text-gray-500">Lorem Ipsum</span>
                </div>
            </div>


            {/* Grafik */}
            {/* Dropdown Filter */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Produk IoT</h2>
                <label className="mr-4" htmlFor="deviceFilter">
                    Filter by Produk:
                </label>
                <select
                    id="deviceFilter"
                    value={selectedDevice}
                    onChange={(e) => setSelectedDevice(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                >
                    <option value="">All Devices</option>
                    {iotDevices.map((device) => (
                        <option key={device.name} value={device.name}>
                            {device.name}
                        </option>
                    ))}
                </select>
                <Bar data={data} options={options} />
            </div>

            {/* Tabel Data */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Managemen User</h3>
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 text-left">Pengguna</th>
                            <th className="py-2 text-left">Role</th>
                            <th className="py-2 text-left">Tanggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b py-2">Ali Ahmad</td>
                            <td className="border-b py-2">User</td>
                            <td className="border-b py-2">20 Okt 2024</td>
                        </tr>
                        <tr>
                            <td className="border-b py-2">Budi Santoso</td>
                            <td className="border-b py-2">User</td>
                            <td className="border-b py-2">19 Okt 2024</td>
                        </tr>
                        <tr>
                            <td className="border-b py-2">Citra Dewi</td>
                            <td className="border-b py-2">User</td>
                            <td className="border-b py-2">18 Okt 2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* Tombol Aksi */}
            <div className="flex justify-end">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                    View All User <RiArrowRightCircleLine className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default DashboardContent;


