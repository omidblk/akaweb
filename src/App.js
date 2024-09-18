import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
// import Home from "./pages/home";
// import Blogs from "./pages/blogs";
const Home = React.lazy(() => import("./pages/home"));
const Blogs = React.lazy(() => import("./pages/blogs"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="blogs" exact element={<Blogs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
