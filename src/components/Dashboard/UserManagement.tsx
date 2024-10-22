"use client";
import React from "react";
import { RiAddCircleFill } from "react-icons/ri";

const UserManagement: React.FC = () => {

    return (
        <div className="flex flex-col space-y-6">
            {/* Judul Dashboard */}
            <h2 className="text-3xl font-bold">User Management</h2>

             {/* Tombol Aksi */}
             <div className="flex justify-end">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                    Tambah <RiAddCircleFill className="ml-2" />
                </button>
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
        </div>
    );
};

export default UserManagement;


