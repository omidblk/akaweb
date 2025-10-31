// src/pages/Employees/components/EmployeeForm.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  MenuItem,
  CircularProgress
} from '@mui/material';
import { EnhancedButton as Button } from '../../../routes/ui/components/EnhancedButton';
import { EnhancedInput as Input} from '../../../routes/ui/components/EnhancedInput';

const EmployeeForm = ({ employee, onSubmit, onCancel, loading = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    hire_date: '',
    salary: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const departments = [
    'فنی و توسعه',
    'فروش و بازاریابی',
    'مالی و حسابداری',
    'منابع انسانی',
    'پشتیبانی',
    'مدیریت'
  ];

  const positions = [
    'توسعه‌دهنده فرانت‌اند',
    'توسعه‌دهنده بک‌اند',
    'توسعه‌دهنده فول‌استک',
    'مدیر پروژه',
    'تحلیلگر کسب‌وکار',
    'مدیر فروش',
    'حسابدار',
    'متخصص منابع انسانی'
  ];

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || '',
        email: employee.email || '',
        phone: employee.phone || '',
        department: employee.department || '',
        position: employee.position || '',
        hire_date: employee.hire_date || '',
        salary: employee.salary || '',
        address: employee.address || ''
      });
    }
  }, [employee]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'نام الزامی است';
    if (!formData.email.trim()) newErrors.email = 'ایمیل الزامی است';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'ایمیل معتبر نیست';
    if (!formData.department) newErrors.department = 'انتخاب دپارتمان الزامی است';
    if (!formData.position) newErrors.position = 'انتخاب سمت الزامی است';
    if (!formData.hire_date) newErrors.hire_date = 'تاریخ استخدام الزامی است';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Input
            label="نام کامل"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input
            label="ایمیل"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={errors.email}
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input
            label="شماره تماس"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            error={errors.phone}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input
            select
            label="دپارتمان"
            value={formData.department}
            onChange={(e) => handleChange('department', e.target.value)}
            error={errors.department}
            required
            fullWidth
          >
            {departments.map((dept) => (
              <MenuItem key={dept} value={dept}>
                {dept}
              </MenuItem>
            ))}
          </Input>
        </Grid>

        <Grid item xs={12} md={6}>
          <Input
            select
            label="سمت"
            value={formData.position}
            onChange={(e) => handleChange('position', e.target.value)}
            error={errors.position}
            required
            fullWidth
          >
            {positions.map((position) => (
              <MenuItem key={position} value={position}>
                {position}
              </MenuItem>
            ))}
          </Input>
        </Grid>

        <Grid item xs={12} md={6}>
          <Input
            label="تاریخ استخدام"
            type="date"
            value={formData.hire_date}
            onChange={(e) => handleChange('hire_date', e.target.value)}
            error={errors.hire_date}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input
            label="حقوق پایه"
            type="number"
            value={formData.salary}
            onChange={(e) => handleChange('salary', e.target.value)}
            error={errors.salary}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            label="آدرس"
            multiline
            rows={3}
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            error={errors.address}
            fullWidth
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 4 }}>
        <Button
          variant="outlined"
          onClick={onCancel}
          disabled={loading}
        >
          انصراف
        </Button>
        <Button
          type="submit"
          variant="contained"
          loading={loading}
          startIcon={loading ? <CircularProgress size={16} /> : null}
        >
          {employee ? 'بروزرسانی' : 'ذخیره'}
        </Button>
      </Box>
    </Box>
  );
};

export default EmployeeForm;