import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import Home from "./pages/home";
// import Blogs from "./pages/blogs";
const Home = React.lazy(() => import("./pages/home"));
const Blogs = React.lazy(() => import("./pages/blogs"));

//--------------- dark theme -------------------
// const darkTheme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });
//-- costomize palette color -- &&&&-- dark theme ----------
const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    mode: "light",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" exact element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
