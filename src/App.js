import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import AppLocale from "./lang";
import UI from "./routes/ui";
import User from "./routes/user";
import Login from "./routes/user/login";
import Register from "./routes/user/register";
import Buttons from "./routes/ui/components/Buttons";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Alerts from "./routes/ui/components/Alerts";
import Badges from "./routes/ui/components/Badges";
import Cards from "./routes/ui/components/Cards";
import Drawer from "./routes/ui/components/Drawer";
import Modal from "./routes/ui/components/Modal";
import AdminLayout from "./layout/admin";
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

const lang = "fa";
const currentAppLocale = AppLocale[lang];

export default function App() {
  return (
    <div className={lang === "fa" ? "fontRtl rtl" : "ltr"}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<AdminLayout />}>
                <Route index element={<Home />} />
                <Route path="blogs"  element={<Blogs />} />
                <Route path="Ui"  element={<UI />}>
                  <Route index  element={<Buttons />} />
                  <Route path="buttons"  element={<Buttons />} />
                  <Route path="alerts"  element={<Alerts />} />
                  <Route path="badges"  element={<Badges />} />
                  <Route path="cards"  element={<Cards />} />
                  <Route path="drawer"  element={<Drawer />} />
                  <Route path="modals"  element={<Modal />} />
                </Route>
                <Route path="user" element={<User />}>
                  <Route index element={<Login />} />
                  <Route path="register" element={<Register />} />
                </Route>
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </IntlProvider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
