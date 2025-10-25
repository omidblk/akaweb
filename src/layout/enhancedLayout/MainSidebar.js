import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import {
  Dashboard,
  People,
  Schedule,
  AttachMoney,
  Assessment,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

//  ------     Get menuItems   ------
const menuItems = [
  {
    text: "داشبورد",
    icon: <Dashboard />,
    path: "/enhanced/dashboard",
    badge: null,
  },
  {
    text: "کارمندان",
    icon: <People />,
    path: "/enhanced/employees",
    badge: 12,
  },
  {
    text: "حضور و غیاب",
    icon: <Schedule />,
    path: "/enhanced/attendance",
    badge: 3,
  },
  {
    text: "حقوق و دستمزد",
    icon: <AttachMoney />,
    path: "/enhanced/payroll",
    badge: null,
  },
  {
    text: "گزارش‌ها",
    icon: <Assessment />,
    path: "/enhanced/reports",
    badge: "جدید",
  },
];

export const MainSidebar = ({
  onItemClick,
  setDrawerOpen,
  drawerOpen = false,
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

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Logo Section */}
      <Box
        sx={{
          p: 1.5,
          textAlign: "center",
          display: { md: "flex", xs: "none" },
          justifyContent: "space-between",
        }}
      >
        <button
          className={`p-2 rounded-full bg-slate-100 ${
            !drawerOpen ? "mr-auto" : ""
          } `}
          onClick={() => setDrawerOpen()}
        >
          {drawerOpen ? (
            <div>
              <ChevronLeft />
            </div>
          ) : (
            <div>
              <ChevronRight />
            </div>
          )}
        </button>
      </Box>

      <Divider />

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, p: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={isActive(item.path)}
              sx={{
                borderRadius: 2,
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
                  minWidth: 40,
                  color: isActive(item.path) ? "white" : "text.secondary",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!drawerOpen ? (
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "0.9rem",
                    fontWeight: isActive(item.path) ? 600 : 400,
                  }}
                />
              ) : (
                <></>
              )}
              {item.badge && (
                <Chip
                  label={item.badge}
                  size="small"
                  color={typeof item.badge === "number" ? "error" : "success"}
                  sx={{
                    height: 20,
                    fontSize: "0.7rem",
                    "& .MuiChip-label": { px: 1 },
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Settings Section */}
      <Box sx={{ p: 1 }}>
        <ListItemButton
          onClick={() => handleNavigation("/settings")}
          selected={isActive("/settings")}
          sx={{
            borderRadius: 2,
            "&.Mui-selected": {
              backgroundColor: "grey.300",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <Settings />
          </ListItemIcon>
          {!drawerOpen ? (
            <ListItemText
              primary="تنظیمات"
              primaryTypographyProps={{ fontSize: "0.9rem" }}
            />
          ) : (
            <></>
          )}
        </ListItemButton>
      </Box>
    </Box>
  );
};
