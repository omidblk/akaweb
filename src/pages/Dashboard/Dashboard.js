// src/pages/Dashboard/DashboardPage.jsx (نسخه اصلاح شده)
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import { People, Schedule, AttachMoney, TrendingUp } from "@mui/icons-material";
import DataTable from "../../components/table/DataTable";

const DashboardPage = () => {
  const stats = [
    {
      title: "تعداد کارمندان",
      value: "۱۲۴",
      icon: <People />,
      color: "primary.main",
      progress: 75,
    },
    {
      title: "حضور امروز",
      value: "۸۹",
      icon: <Schedule />,
      color: "success.main",
      progress: 89,
    },
    {
      title: "حقوق این ماه",
      value: "۲.۴M",
      icon: <AttachMoney />,
      color: "warning.main",
      progress: 60,
    },
    {
      title: "کارایی",
      value: "۷۸٪",
      icon: <TrendingUp />,
      color: "info.main",
      progress: 78,
    },
  ];

  const recentEmployees = [
    {
      id: 1,
      name: "علی محمدی",
      department: "فنی",
      position: "توسعه‌دهنده",
      joinDate: "1402/10/15",
    },
    {
      id: 2,
      name: "فاطمه کریمی",
      department: "فروش",
      position: "مدیر فروش",
      joinDate: "1402/10/10",
    },
    {
      id: 3,
      name: "محمد رضایی",
      department: "مالی",
      position: "حسابدار",
      joinDate: "1402/10/05",
    },
  ];

  const columns = [
    { field: "name", headerName: "نام" },
    { field: "department", headerName: "دپارتمان" },
    { field: "position", headerName: "سمت" },
    { field: "joinDate", headerName: "تاریخ عضویت" },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        داشبورد مدیریت
      </Typography>

      {/* Statistics Cards - با CSS Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          mb: 4,
        }}
      >
        {stats.map((stat, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 3,
              boxShadow: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    backgroundColor: `${stat.color}15`,
                    color: stat.color,
                    mr: 2,
                  }}
                >
                  {stat.icon}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.title}
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={stat.progress}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "grey.200",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: stat.color,
                    borderRadius: 3,
                  },
                }}
              />
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Recent Employees Table */}
      <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            کارمندان recently added
          </Typography>
          <DataTable
            columns={columns}
            data={recentEmployees}
            totalCount={recentEmployees.length}
            page={0}
            rowsPerPage={5}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardPage;
