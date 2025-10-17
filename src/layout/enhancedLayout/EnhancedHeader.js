import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  AccountCircle,
  Logout,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const EnhancedHeader = ({ drawerWidth, mobileOpen, setMobileOpen }) => {
  // تابع کمکی برای عنوان صفحه
  const getPageTitle = (pathname) => {
    const titles = {
      "/dashboard": "داشبورد",
      "/employees": "مدیریت کارمندان",
      "/attendance": "حضور و غیاب",
      "/payroll": "حقوق و دستمزد",
      "/profile": "پروفایل کاربری",
    };
    return titles[pathname] || "سامانه مدیریت منابع انسانی";
  };

  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    handleUserMenuClose();
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          //   backgroundColor: 'white',
          bgcolor: "transparent",
          backdropFilter: "blur(20px)",
          color: "text.primary",
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: "primary.main", fontWeight: 600 }}
          >
            {getPageTitle(location.pathname)}
          </Typography>

          {/* Notifications */}
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          {/* User Menu */}
          <IconButton onClick={handleUserMenuOpen} sx={{ p: 0, ml: 1 }}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "primary.main",
              }}
            >
              <AccountCircle />
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={userMenuAnchor}
            open={Boolean(userMenuAnchor)}
            onClose={handleUserMenuClose}
            PaperProps={{
              sx: {
                mt: 1.5,
                minWidth: 180,
              },
            }}
          >
            <MenuItem
              onClick={() => {
                navigate("/profile");
                handleUserMenuClose();
              }}
            >
              <AccountCircle sx={{ mr: 2 }} />
              پروفایل
            </MenuItem>
            <MenuItem onClick={handleUserMenuClose}>
              <Settings sx={{ mr: 2 }} />
              تنظیمات
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <Logout sx={{ mr: 2 }} />
              خروج
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};
