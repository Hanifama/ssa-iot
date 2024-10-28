"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiDashboardLine, RiUser3Line, RiDeviceLine } from "react-icons/ri";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {    
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
    setActivePath(window.location.pathname); 
  }, []);

  const handleNavigation = (path: string) => {
    setActivePath(path);
    router.push(path);
  };

  return (
    <div className="flex flex-col w-64 h-screen bg-white shadow-md">
      <div className="flex items-center justify-center h-16 text-accent">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2 cursor-pointer">
          {role === 'admin' && (
            <ul>
              <li>
                <div
                  className={`flex items-center w-full p-2 text-gray-700 rounded-lg ${
                    activePath === "/dashboard" ? "border-l-4 border-accent" : ""
                  } hover:bg-yellow-50`}
                  onClick={() => handleNavigation("/dashboard")}
                >
                  <RiDashboardLine className="mr-2" />
                  <span>Dashboard</span>
                </div>
              </li>
              <li>
                <div
                  className={`flex items-center w-full p-2 text-gray-700 rounded-lg ${
                    activePath === "/dashboard/user-management" ? "border-l-4 border-accent" : ""
                  } hover:bg-yellow-50`}
                  onClick={() => handleNavigation("/dashboard/user-management")}
                >
                  <RiUser3Line className="mr-2" />
                  <span>User Management</span>
                </div>
              </li>
            </ul>
          )}

          {role === 'user' && (
            <ul>
              <li>
                <div
                  className={`flex items-center w-full p-2 text-gray-700 rounded-lg ${
                    activePath === "/dashboard/user" ? "border-l-4 border-accent" : ""
                  } hover:bg-blue-50`}
                  onClick={() => handleNavigation("/dashboard/user")}
                >
                  <RiDashboardLine className="mr-2" />
                  <span>Dashboard</span>
                </div>
              </li>
              <li>
                <div
                  className={`flex items-center w-full p-2 text-gray-700 rounded-lg ${
                    activePath === "/dashboard/user/produk" ? "border-l-4 border-accent" : ""
                  } hover:bg-blue-50`}
                  onClick={() => handleNavigation("/dashboard/user/produk")}
                >
                  <RiDeviceLine className="mr-2" />
                  <span>Produk IoT</span>
                </div>
              </li>
            </ul>
          )}
                  
        </ul>
      </nav>

      <div className="p-4 text-gray-600 text-xs">
        &copy; 2024 PT. LSKK. All rights reserved.
      </div>
    </div>
  );
};

export default Sidebar;
