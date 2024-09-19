import React from "react";
import { Route, Routes } from "react-router-dom";
import UiComponents from "./components";

const UI = () => {
    return ( <>
        <Routes>
            <Route index element={<UiComponents/>} />
        </Routes>
    </> );
}
 
export default UI;