import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IntlProvider } from "react-intl";
import CssBaseline from "@mui/material/CssBaseline";
import AppLocale from "./lang";
const Home = React.lazy(() => import("./routes/home"));
const Blogs = React.lazy(() => import("./pages/blogs"));
const NoPage = React.lazy(() => import("./routes/NoPage"));


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

// -------  language  ----------------

const lang = 'fa'
const currentAppLocale = AppLocale[lang];

export default function App() {

  return (
    <div className={lang==="fa" ?"fontRtl":''}>
      <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
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
    </IntlProvider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
