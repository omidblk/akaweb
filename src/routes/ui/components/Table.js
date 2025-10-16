// src/components/UserTable.jsx
import React, { useState, useMemo } from "react";
import DataTable from "../../../components/table/DataTable";
import { mockUsers } from "../../../data/mockData";
import { Chip } from "@mui/material";

const Table = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);

  const columns = [
    {
      field: "name",
      headerName: "نام و نام خانوادگی",
      sortable: true,
      width: 200,
    },
    {
      field: "email",
      headerName: "ایمیل",
      sortable: true,
      width: 250,
    },
    {
      field: "role",
      headerName: "نقش",
      sortable: true,
      width: 120,
    },
    {
      field: "status",
      headerName: "وضعیت",
      sortable: true,
      width: 120,
      renderCell: (row) => {
        const getColor = (status) => {
          switch (status) {
            case "فعال":
              return "success";
            case "غیرفعال":
              return "error";
            case "معلق":
              return "warning";
            default:
              return "default";
          }
        };

        return (
          <Chip label={row.status} color={getColor(row.status)} size="small" />
        );
      },
    },
    {
      field: "department",
      headerName: "دپارتمان",
      sortable: true,
      width: 120,
    },
    {
      field: "joinDate",
      headerName: "تاریخ عضویت",
      sortable: true,
      width: 130,
    },
    {
      field: "lastLogin",
      headerName: "آخرین ورود",
      sortable: true,
      width: 130,
    },
  ];

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (field, direction) => {
    console.log("Sorting by:", field, direction);
    // در اینجا می‌توانید منطق سورت کردن را پیاده‌سازی کنید
    // here can sort data 
  };

  const handleSelectRow = (id, isSelected) => {
    if (isSelected) {
      setSelectedRows((prev) => [...prev, id]);
    } else {
      setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
    }
  };

  const handleSelectAllRows = (allIds) => {
    setSelectedRows(allIds);
  };

  // داده‌های صفحه‌بندی شده
  const paginatedData = useMemo(() => {
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    return mockUsers.slice(start, end);
  }, [page, rowsPerPage]);

  return (
    <div style={{ padding: "20px" }}>
      <DataTable
        columns={columns}
        data={paginatedData}
        page={page}
        rowsPerPage={rowsPerPage}
        totalCount={mockUsers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        onSort={handleSort}
        selectable={true}
        selectedRows={selectedRows}
        onSelectRow={handleSelectRow}
        onSelectAllRows={handleSelectAllRows}
      />

      {selectedRows.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <Chip
            label={`${selectedRows.length} آینده انتخاب شده`}
            color="primary"
            variant="outlined"
          />
        </div>
      )}
    </div>
  );
};

export default Table;
