"use client";
import { useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { RiLogoutBoxLine, RiMenuLine, RiUser2Fill } from 'react-icons/ri';

interface DashboardHeaderProps {
    onToggleSidebar: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onToggleSidebar }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('role');
        window.location.href = '/authentication';
    };

    return (
        <div className="flex items-center justify-between bg-white p-4 text-accent">
            <button onClick={onToggleSidebar} className="text-2xl">
                <RiMenuLine />
            </button>

            <div className="relative">
                <div
                    className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <FiHome className="text-accent w-6 h-6" />
                </div>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-gray-700 z-10">
                        <ul>
                            <li
                                className="flex items-center p-2 cursor-pointer hover:bg-blue-100"
                                onClick={handleLogout}
                            >
                                <RiUser2Fill className="mr-2" />
                                <span>Profile</span>
                            </li>
                            <li
                                className="flex items-center p-2 cursor-pointer hover:bg-blue-100"
                                onClick={handleLogout}
                            >
                                <RiLogoutBoxLine className="mr-2" />
                                <span>Logout</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardHeader;


