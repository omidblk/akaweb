import  { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
//   useTheme,
//   useMediaQuery,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications,
  AccountCircle,
  Logout,
  Settings
} from '@mui/icons-material';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import {EnhancedSidebar as Sidebar } from './EnhancedSidebar';
// import Header from './Header';

const EnhancedLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    handleUserMenuClose();
  };

  const drawerWidth = 260;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: 'white',
          color: 'text.primary',
          boxShadow: 1
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography 
            variant="h6" 
            noWrap 
            component="div"
            sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 600 }}
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
                backgroundColor: 'primary.main'
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
                minWidth: 180
              }
            }}
          >
            <MenuItem onClick={() => { navigate('/profile'); handleUserMenuClose(); }}>
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

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: 'background.paper'
            },
          }}
        >
          <Sidebar onItemClick={() => setMobileOpen(false)} />
        </Drawer>
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: 'background.paper',
              border: 'none',
              boxShadow: 2
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          backgroundColor: 'grey.50'
        }}
      >
        <Toolbar /> {/* برای فاصله از App Bar */}
        <Outlet/>
      </Box>
    </Box>
  );
};

// تابع کمکی برای عنوان صفحه
const getPageTitle = (pathname) => {
  const titles = {
    '/dashboard': 'داشبورد',
    '/employees': 'مدیریت کارمندان',
    '/attendance': 'حضور و غیاب',
    '/payroll': 'حقوق و دستمزد',
    '/profile': 'پروفایل کاربری'
  };
  return titles[pathname] || 'سامانه مدیریت منابع انسانی';
};

export default EnhancedLayout;