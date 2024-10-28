"use client";
import { useState } from "react";
import DashboardHeader from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className={`fixed top-0 ${isSidebarOpen ? 'left-64' : 'left-0'} right-0 z-10 transition-all`}>
                <DashboardHeader onToggleSidebar={toggleSidebar} />
            </div>

            <div className="flex flex-1 pt-16">
                <div className={`fixed top-0 left-0 h-screen bg-gray-800 text-white ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden transition-all`}>
                    <Sidebar />
                </div>
                
                <div className={`flex-1 p-8 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} overflow-hidden`}>
                    {children} 
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
