"use client";
import { useState } from "react";
import DashboardContent from "@/components/Dashboard/ContentAdmin";
import DashboardHeader from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function AdminPage() {
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
                {/* Sidebar */}
                <div className={`fixed top-0 left-0 h-screen bg-gray-800 text-white ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden transition-all`}>
                    <Sidebar />
                </div>
                
                {/* Konten */}
                <div className={`flex-1 p-8 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} overflow-hidden`}>
                    <DashboardContent />
                </div>
            </div>
        </div>
    );
}
