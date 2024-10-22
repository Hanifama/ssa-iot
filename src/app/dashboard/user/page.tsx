import DashboardContentUser from "@/components/Dashboard/ContentUser";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function UserPage() {
    return (
        <div className="flex">
            <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white hidden md:block">
                <Sidebar />
            </div>
            <div className="flex-1 p-8 md:ml-64">
                <DashboardContentUser />
            </div>
        </div>
    )
}
