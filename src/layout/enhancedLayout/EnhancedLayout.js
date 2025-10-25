import { Box, Toolbar } from "@mui/material";

import { Outlet } from "react-router-dom";
import { EnhancedSidebar as Sidebar } from "./EnhancedSidebar";
import { EnhancedHeader } from "./EnhancedHeader";
import { useEffect, useState } from "react";
// import Header from './Header';

const EnhancedLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(110);
  const [drawerOpen, setDrawerOpen] = useState(false);

  //   const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const drawerWidthLarge = 300;
  const drawerWidthSmal = 110;
  useEffect(() => {
    if (drawerWidth===110) {
      setDrawerWidth(drawerWidthLarge)
    }else{
      setDrawerWidth(drawerWidthSmal)
    }
    console.log("drawer change");
    // eslint-disable-next-line
}, [drawerOpen]);
  
  const sidebarWidth = 120;


  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <EnhancedHeader
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Sidebar */}
      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onItemClick={() => setMobileOpen(false)}
        setDrawerOpen={()=>setDrawerOpen(!drawerOpen)}
        drawerOpen={drawerOpen}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          pl: { md: `${sidebarWidth}px` },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh",
          backgroundColor: "gray.50",
        }}
      >
        <Toolbar /> {/* برای فاصله از App Bar */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default EnhancedLayout;
