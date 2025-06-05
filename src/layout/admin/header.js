import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
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
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
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
              <Button variant="text" color="primary" size="small">
                <IntlMessages id="home" />
              </Button>
              <Button variant="text" color="primary" size="small">
                <IntlMessages id="Portfolio" />
              </Button>
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
              <Button variant="text" color="primary" size="small">
                <IntlMessages id="employment" />
              </Button>
              <Button variant="text" color="primary" size="small">
                <IntlMessages id="aboutUs" />
              </Button>
              <Button variant="text" color="primary" size="small">
                <IntlMessages id="contactUs" />
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button color="primary" variant="text" size="small">
              <IntlMessages id="signIn" />
            </Button>
            <Button color="primary" variant="contained" size="small">
              <IntlMessages id="signUp" />
            </Button>
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

                <MenuItem>
                  <IntlMessages id="home" />
                </MenuItem>
                <MenuItem>
                  <IntlMessages id="Portfolio" />
                </MenuItem>
                <MenuItem>
                  <IntlMessages id="websiteDesign" />
                </MenuItem>
                <MenuItem>
                  <IntlMessages id="onlineStoreDesign" />
                </MenuItem>
                <MenuItem>
                  <IntlMessages id="employment" />
                </MenuItem>
                <MenuItem>
                  <IntlMessages id="aboutUs" />
                </MenuItem>
                <MenuItem>
                  <IntlMessages id="contactUs" />
                </MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    <IntlMessages id="signUp" />
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    <IntlMessages id="signIn" />
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
