// src/components/ui/EnhancedButton.jsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';

const EnhancedButton = ({ 
  children, 
  loading = false,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  ...props 
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      disabled={loading || props.disabled}
      startIcon={loading ? <CircularProgress size={16} /> : startIcon}
      endIcon={loading ? null : endIcon}
      {...props}
      sx={{
        textTransform: 'none',
        borderRadius: 2,
        ...props.sx
      }}
    >
      {loading ? 'در حال پردازش...' : children}
    </MuiButton>
  );
};

export {EnhancedButton};
export default EnhancedButton;