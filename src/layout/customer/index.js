import React from "react";
import CustomerFooter from "./footer";
import CustomerHeader from "./header";
import { Outlet, useLocation } from "react-router-dom";

const CustomerLayout = () => {
  const location = useLocation()
  return (
    <>
      <CustomerHeader />
      <div className={`grow ${location?.pathname !== '/' ? "mt-28" : "" }`}>
        <Outlet />
      </div>
      <CustomerFooter />
    </>
  );
};

export default CustomerLayout;
