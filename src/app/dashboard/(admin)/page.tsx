import DashboardContent from "@/components/Dashboard/ContentAdmin";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function AdminPage() {
    return (
        <div className="flex">
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white hidden md:block">
            <Sidebar />
        </div>
        <div className="flex-1 p-8 md:ml-64">
            <DashboardContent />
        </div>
    </div>
    )
}