// src/pages/Employees/EmployeesPage.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Alert,
  CircularProgress,
  TextField,
  InputAdornment
} from '@mui/material';
import { Add, Refresh, Search } from '@mui/icons-material';

// import { employeeService } from '@/services/employeeService'; // کامنت کن
import { mockEmployeeService } from '../../services/mockEmployeesServices'; 
import DataTable from '../../components/table/DataTable';
import {AdvancedModal as Modal} from '../../routes/ui/components/AdvancedModal'
import EmployeeForm from './components/EmployeesForm';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    page: 0,
    rowsPerPage: 10,
    totalCount: 0
  });

// در صفحه Employees، این ستون‌ها رو جایگزین کن:
const columns = [
  { 
    field: 'name', 
    headerName: 'نام کامل',
    width: 200,
    renderCell: (row) => (
      <Box>
        <Typography variant="body2" fontWeight="600">
          {row.name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {row.email}
        </Typography>
      </Box>
    )
  },
  { field: 'department', headerName: 'دپارتمان', width: 150 },
  { field: 'position', headerName: 'سمت', width: 180 },
  { 
    field: 'hire_date', 
    headerName: 'تاریخ استخدام',
    width: 130,
    renderCell: (row) => {
      if (!row.hire_date) return '---';
      try {
        const date = new Date(row.hire_date);
        return isNaN(date.getTime()) ? '---' : date.toLocaleDate('fa-IR');
      } catch {
        return '---';
      }
    }
  },
  { 
    field: 'salary', 
    headerName: 'حقوق',
    width: 120,
    renderCell: (row) => (
      <Typography variant="body2">
        {row.salary ? `${Number(row.salary).toLocaleString()} تومان` : '---'}
      </Typography>
    )
  },
  { 
    field: 'status', 
    headerName: 'وضعیت',
    width: 100,
    renderCell: (row) => (
      <Box
        sx={{
          px: 1,
          py: 0.5,
          borderRadius: 1,
          fontSize: '0.75rem',
          backgroundColor: row.status === 'active' ? 'success.light' : 'error.light',
          color: row.status === 'active' ? 'success.dark' : 'error.dark',
          fontWeight: '600'
        }}
      >
        {row.status === 'active' ? 'فعال' : 'غیرفعال'}
      </Box>
    )
  },
  {
    field: 'actions',
    headerName: 'عملیات',
    width: 200,
    renderCell: (row) => (
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => handleEdit(row)}
        >
          ویرایش
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => handleDeleteClick(row)}
        >
          حذف
        </Button>
      </Box>
    )
  }
];

  // Fetch employees from Mock API
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess('');
      
      const params = {
        page: pagination.page + 1,
        per_page: pagination.rowsPerPage
      };
      
      if (searchTerm) {
        params.search = searchTerm;
      }
      
      const response = await mockEmployeeService.getAll(params);
      
      setEmployees(response.data.data);
      setPagination(prev => ({
        ...prev,
        totalCount: response.data.total
      }));
    } catch (err) {
      setError('خطا در دریافت اطلاعات کارمندان');
      console.error('Error fetching employees:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [pagination.page, pagination.rowsPerPage, searchTerm]);

  const handleCreate = () => {
    setSelectedEmployee(null);
    setOpenModal(true);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setOpenModal(true);
  };

  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setOpenDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await mockEmployeeService.delete(selectedEmployee.id);
      setOpenDeleteModal(false);
      setSelectedEmployee(null);
      setSuccess('کارمند با موفقیت حذف شد');
      fetchEmployees(); // Refresh list
    } catch (err) {
      setError('خطا در حذف کارمند');
      console.error('Error deleting employee:', err);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (selectedEmployee) {
        // Update existing employee
        await mockEmployeeService.update(selectedEmployee.id, formData);
        setSuccess('اطلاعات کارمند با موفقیت بروزرسانی شد');
      } else {
        // Create new employee
        await mockEmployeeService.create(formData);
        setSuccess('کارمند جدید با موفقیت ایجاد شد');
      }
      
      setOpenModal(false);
      setSelectedEmployee(null);
      fetchEmployees(); // Refresh list
    } catch (err) {
      setError('خطا در ذخیره اطلاعات کارمند');
      console.error('Error saving employee:', err);
    }
  };

  const handlePageChange = (event, newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  const handleRowsPerPageChange = (event) => {
    setPagination(prev => ({
      ...prev,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0
    }));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPagination(prev => ({ ...prev, page: 0 })); // بازگشت به صفحه اول هنگام جستجو
  };

  if (loading && employees.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          مدیریت کارمندان
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleCreate}
          >
            افزودن کارمند
          </Button>
        </Box>
      </Box>

      {/* Search Box */}
      <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
        <TextField
          fullWidth
          placeholder="جستجو بر اساس نام، ایمیل یا دپارتمان..."
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      {/* Alerts */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccess('')}>
          {success}
        </Alert>
      )}

      {/* Employees Table */}
      <Paper sx={{ borderRadius: 3, boxShadow: 2, overflow: 'hidden' }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            لیست کارمندان ({pagination.totalCount} نفر)
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Refresh />}
            onClick={fetchEmployees}
            disabled={loading}
          >
            بروزرسانی
          </Button>
        </Box>
        
        <DataTable
          columns={columns}
          data={employees}
          page={pagination.page}
          rowsPerPage={pagination.rowsPerPage}
          totalCount={pagination.totalCount}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          loading={loading}
        />
      </Paper>

      {/* Create/Edit Modal */}
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedEmployee(null);
        }}
        title={selectedEmployee ? 'ویرایش کارمند' : 'افزودن کارمند جدید'}
        size="large"
      >
        <EmployeeForm
          employee={selectedEmployee}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setOpenModal(false);
            setSelectedEmployee(null);
          }}
          loading={loading}
        />
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        open={openDeleteModal}
        onClose={() => {
          setOpenDeleteModal(false);
          setSelectedEmployee(null);
        }}
        onConfirm={handleDeleteConfirm}
        title="حذف کارمند"
        message={`آیا از حذف کارمند "${selectedEmployee?.name}" اطمینان دارید؟ این عمل غیرقابل بازگشت است.`}
        variant="error"
        confirmButtonText="حذف"
        loading={loading}
      />
    </Box>
  );
};

export default EmployeesPage;