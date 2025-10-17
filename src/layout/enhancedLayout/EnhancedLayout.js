import { Box, Toolbar } from "@mui/material";

import { Outlet } from "react-router-dom";
import { EnhancedSidebar as Sidebar } from "./EnhancedSidebar";
import { EnhancedHeader } from "./EnhancedHeader";
import { useState } from "react";
// import Header from './Header';

const EnhancedLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //   const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const drawerWidth = 260;

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
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          pl: { md: `${drawerWidth+10}px` },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh",
          backgroundColor: "grey.50",
        }}
      >
        <Toolbar /> {/* برای فاصله از App Bar */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default EnhancedLayout;
