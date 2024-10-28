"use client";
import UserManagement from "@/components/Dashboard/UserManagement";
import DashboardLayout from "@/layouts/Dashboard/Index";

export default function ManagementUserPage() {
    return (
        <DashboardLayout>
            <UserManagement/>
        </DashboardLayout>
    );
}
