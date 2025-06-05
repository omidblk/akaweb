import React from "react";
import IntlMessages from "../../../lang/components/IntlMessages";
import { Outlet } from "react-router-dom";

const UiComponents = () => {
  return (
    <div>
      <h1 className="m-3 font-bold text-center">
        <IntlMessages id="UIcomponents" />
      </h1>
    <Outlet />
    </div>
  );
};

export default UiComponents;
