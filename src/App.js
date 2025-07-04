import React from "react";
import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import AppLocale from "./lang";
import UI from "./routes/ui";
import User from "./routes/user";
import Login from "./routes/user/login";
import Register from "./routes/user/register";
import Buttons from "./routes/ui/components/Buttons";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Alerts from "./routes/ui/components/Alerts";
import Badges from "./routes/ui/components/Badges";
import Cards from "./routes/ui/components/Cards";
import Drawer from "./routes/ui/components/Drawer";
import Modal from "./routes/ui/components/Modal";
import AdminLayout from "./layout/admin";
import Inputs from "./routes/ui/components/Inputs";
import LoginFormik from "./routes/user/loginformik";
import LoginFormik2 from "./routes/user/loginformik copy";
import Portfolio from "./routes/portfolio/portfolio";
import AboutUs from "./routes/aboutus/AboutUs";
import Employment from "./routes/employment/Employment";
import ContactUs from "./routes/contactus/ContactUs";
import getTheme, { colors } from "./theme";
const Home = React.lazy(() => import("./routes/home"));
const Blogs = React.lazy(() => import("./pages/blogs"));
const NoPage = React.lazy(() => import("./routes/NoPage"));

// -------  language  ----------------
const lang = "fa";
const currentAppLocale = AppLocale[lang];

//-- costomize palette color -- &&&&-- dark theme ---------- MUI
const theme = getTheme(lang)
console.log(theme);
console.log(colors());

// -----------  RTL   &     LTR   ---------------
const cacheLtr = createCache({
  key: "muiltr",
});

const cacheRtl = createCache({
  key: "muirtl",
  // prefixer is the only stylis plugin by default, so when
  // overriding the plugins you need to include it explicitly
  // if you want to retain the auto-prefixing behavior.
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App() {
  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
  return (
    <div className={lang === "fa" ? "fontRtl rtl" : "ltr"}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <CacheProvider value={lang === "fa" ? cacheRtl : cacheLtr}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Routes>
                <Route path="/" element={<AdminLayout />}>
                  <Route index element={<Home />} />
                  <Route path="blogs" element={<Blogs />} />
                  <Route path="Ui" element={<UI />}>
                    <Route index element={<Buttons />} />
                    <Route path="buttons" element={<Buttons />} />
                    <Route path="alerts" element={<Alerts />} />
                    <Route path="badges" element={<Badges />} />
                    <Route path="cards" element={<Cards />} />
                    <Route path="drawer" element={<Drawer />} />
                    <Route path="modals" element={<Modal />} />
                    <Route path="inputs" element={<Inputs />} />
                  </Route>
                  <Route path="user" element={<User />}>
                    <Route index element={<User />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login-formik" element={<LoginFormik />} />
                    <Route path="login-formik2" element={<LoginFormik2 />} />
                  </Route>
                  <Route path="/portfolio" element={<Portfolio/>}/>
                  <Route path="/employment" element={<Employment/>}/>
                  <Route path="/aboutus" element={<AboutUs/>}/>
                  <Route path="/contactus" element={<ContactUs/>}/>
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </Router>
          </ThemeProvider>
        </CacheProvider>
      </IntlProvider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
