import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Dashboard,
  People,
  Schedule,
  AttachMoney,
  Assessment,
  Settings,
  MenuOpen,
  Menu,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  {
    text: "داشبورد",
    icon: <Dashboard />,
    path: "/dashboard",
    badge: null,
  },
  {
    text: "کارمندان",
    icon: <People />,
    path: "/employees",
    badge: 12,
  },
  {
    text: "حضور و غیاب",
    icon: <Schedule />,
    path: "/attendance",
    badge: 3,
  },
  {
    text: "حقوق و دستمزد",
    icon: <AttachMoney />,
    path: "/payroll",
    badge: null,
  },
  {
    text: "گزارش‌ها",
    icon: <Assessment />,
    path: "/reports",
    badge: "جدید",
  },
];

export const EnhancedSidebar2 = ({
  drawerWidth,
  collapsedWidth,
  mobileOpen,
  sidebarOpen,
  setMobileOpen,
  onItemClick,
  onToggleSidebar,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    onItemClick?.();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          p: 3,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: sidebarOpen ? "center" : "center",
          gap: 1,
        }}
      >
        {sidebarOpen ? (
          <>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              HR System
            </Typography>

            {/* دکمه بستن سایدبار */}
            <Tooltip title="بستن منو">
              <IconButton
                size="small"
                onClick={onToggleSidebar}
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.50",
                  },
                }}
              >
                <MenuOpen />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          /* لوگو کوچک وقتی سایدبار بسته است */
          <Tooltip title="باز کردن منو">
            <IconButton
              onClick={onToggleSidebar}
              sx={{
                color: "primary.main",
              }}
            >
              <Menu />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Divider />

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, p: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <Tooltip title={sidebarOpen ? "" : item.text} placement="right">
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                selected={isActive(item.path)}
                sx={{
                  borderRadius: 2,
                  justifyContent: sidebarOpen ? "initial" : "center",
                  minHeight: 48,
                  px: sidebarOpen ? 2.5 : 1,
                  "&.Mui-selected": {
                    backgroundColor: "primary.main",
                    color: "white",
                    "& .MuiListItemIcon-root": {
                      color: "white",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: sidebarOpen ? 2 : "auto",
                    justifyContent: "center",
                    color: isActive(item.path) ? "inherit" : "text.secondary",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                {sidebarOpen && (
                  <>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        fontWeight: isActive(item.path) ? 600 : 400,
                        noWrap: true,
                      }}
                    />
                    {item.badge && (
                      <Chip
                        label={item.badge}
                        size="small"
                        color={
                          typeof item.badge === "number" ? "error" : "success"
                        }
                        sx={{
                          height: 20,
                          fontSize: "0.7rem",
                          "& .MuiChip-label": { px: 1 },
                        }}
                      />
                    )}
                  </>
                )}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      {/* Settings Section */}
      <Box sx={{ p: 1 }}>
        <Tooltip title={sidebarOpen ? "" : "تنظیمات"} placement="right">
          <ListItemButton
            onClick={() => handleNavigation("/settings")}
            selected={isActive("/settings")}
            sx={{
              borderRadius: 2,
              justifyContent: sidebarOpen ? "initial" : "center",
              minHeight: 48,
              px: sidebarOpen ? 2.5 : 1,
              "&.Mui-selected": {
                backgroundColor: "grey.300",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: sidebarOpen ? 2 : "auto",
                justifyContent: "center",
              }}
            >
              <Settings />
            </ListItemIcon>
            {sidebarOpen && (
              <ListItemText
                primary="تنظیمات"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            )}
          </ListItemButton>
        </Tooltip>
      </Box>
    </Box>
  );
  
  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "background.paper",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarOpen ? drawerWidth : collapsedWidth,
            bgcolor: "transparent",
            backdropFilter: "blur(20px)",
            border: "none",
            boxShadow: 2,
            transition: "all 0.3s ease-in-out",
            overflowX: "hidden",
          },
        }}
        
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};


