import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IntlProvider } from "react-intl";
import CssBaseline from "@mui/material/CssBaseline";
import AppLocale from "./lang";
// import Home from "./pages/home";
// import Blogs from "./pages/blogs";
const Home = React.lazy(() => import("./routes/home"));
const Blogs = React.lazy(() => import("./pages/blogs"));
const NoPage = React.lazy(() => import("./routes/NoPage"));

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

// -------  language  ----------------
// const messages = {
//   en: messages_en,
//   fr: messages_fr,
// };
const currentAppLocale = AppLocale["en"];

export default function App() {
  // const [locale, setLocale] = useState("en");

  // const switchLanguage = (lang) => {
  //   setLocale(lang);
  // };
  return (
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
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
