import { Drawer } from "@mui/material";
import { MainSidebar } from "./MainSidebar";

export const EnhancedSidebar = ({
  onItemClick,
  drawerWidth,
  mobileOpen,
  setMobileOpen,
  setDrawerOpen,
  drawerOpen
}) => {
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerPaperStyles = {
    boxSizing: "border-box",
    width: drawerWidth,
    bgcolor: "transparent",
    backdropFilter: "blur(20px)",
    color: "text.primary",
    boxShadow: 1,
    border: "none",
    background: "rgba(255, 255, 255, 0.1)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  };

  return (
    <>
      {/* دراور موقت برای موبایل */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: {
              backgroundColor: "transparent",
            },
          },
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": drawerPaperStyles,
        }}
      >
        <MainSidebar onItemClick={onItemClick} />
      </Drawer>

      {/* دراور دائمی برای دسکتاپ */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": drawerPaperStyles,
        }}
        open
      >
        <MainSidebar onItemClick={onItemClick} setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
      </Drawer>
    </>
  );
};
