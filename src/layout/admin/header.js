import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
// import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IntlMessages from "../../lang/components/IntlMessages";
// import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
// import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "20px 12px",
}));

export default function AdminHeader() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 25px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            {/* <Sitemark /> */}
            <h1 className="text-blue-600 rtl:ml-2 ltr:mr-2">!!! AkAweb !!!</h1>
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              className="md:gap-2"
            >
              <NavLink to="/">
                <Button variant="text" color="primary" size="small">
                  <IntlMessages id="home" />
                </Button>
              </NavLink>
              <NavLink to="portfolio">
                <Button variant="text" color="primary" size="small">
                  <IntlMessages id="Portfolio" />
                </Button>
              </NavLink>
              <Button variant="text" color="primary" size="small">
                <IntlMessages id="websiteDesign" />
              </Button>
              <Button
                variant="text"
                color="primary"
                size="small"
                sx={{ minWidth: 0 }}
              >
                <IntlMessages id="onlineStoreDesign" />
              </Button>
              <NavLink to="employment">
                <Button variant="text" color="primary" size="small">
                  <IntlMessages id="employment" />
                </Button>
              </NavLink>
              {/* <NavLink  to="aboutus">
                <Button variant="text" color="primary" size="small">
                  <IntlMessages id="aboutUs" />
                </Button>
              </NavLink> */}
              <NavLink to="contactus">
                <Button variant="text" color="primary" size="small">
                  <IntlMessages id="contactUs" />
                </Button>
              </NavLink>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <NavLink to="user/login">
              <Button color="primary" variant="text" size="small">
                <IntlMessages id="signIn" />
              </Button>
            </NavLink>
            <NavLink to="user/register">
              <Button color="primary" variant="contained" size="small">
                <IntlMessages id="signUp" />
              </Button>
            </NavLink>
            {/* <ColorModeIconDropdown /> */}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            {/* <ColorModeIconDropdown size="medium" /> */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <div className="flex flex-col gap-6">
                  <NavLink to="/">
                  <IntlMessages id="home" />
                </NavLink>
                <NavLink to="portfolio">
                  <IntlMessages id="Portfolio" />
                </NavLink>
                <NavLink to="websiteDesign">
                  <IntlMessages id="websiteDesign" />
                </NavLink>
                <NavLink to="onlineStoreDesign">
                  <IntlMessages id="onlineStoreDesign" />
                </NavLink>
                <NavLink to="employment">
                  <IntlMessages id="employment" />
                </NavLink>
                {/* <NavLink to="aboutus">
                  <IntlMessages id="aboutUs" />
                </NavLink> */}
                <NavLink to="contactus">
                  <IntlMessages id="contactUs" />
                </NavLink>
                </div>
                <Divider sx={{ my: 3 }} />
                <NavLink>
                  <Button color="primary" variant="contained" fullWidth>
                    <IntlMessages id="signUp" />
                  </Button>
                </NavLink>
                <NavLink to="/user/login">
                  <Button color="primary" variant="outlined" fullWidth>
                    <IntlMessages id="signIn" />
                  </Button>
                </NavLink>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
