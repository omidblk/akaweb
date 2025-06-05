import React from "react";
// import AdminLayout from "../layout/admin";
import { Button } from "@mui/material";
import IntlMessages from "../lang/components/IntlMessages";
// import CustomerLayout from "../layout/customer";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="m-3">
        <IntlMessages id="home" />
      </h1>
      <Button className="m-3" variant="contained">
        Hello world
      </Button>
    </div>
  );
};

export default Home;
