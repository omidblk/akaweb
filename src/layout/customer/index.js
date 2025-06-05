import React from "react";
import CustomerFooter from "./footer";
import CustomerHeader from "./header";

const CustomerLayout = ({children}) => {
  return (
    <>
      <CustomerHeader/>
      {children}
      <CustomerFooter/>
    </>
  );
};

export default CustomerLayout;