import React from "react";
import AdminFooter from "./footer";
import AdminHeader from "./header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader/>
        <div className="grow mt-24">
          <Outlet/>
        </div>
      <AdminFooter/>
    </div>
  );
};

export default AdminLayout;