import React from "react";
// import AdminFooter from "./footer";
import AdminHeader from "./header";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar className="text-2xl" />
      <div className="flex flex-col">
        <AdminHeader/>
        <div className="">
          <Outlet/>
        </div>
      {/* <AdminFooter/> */}
      </div>
    </div>
  );
};

export default AdminLayout;