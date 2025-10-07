// src/components/ui/AdvancedModal.jsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Slide,
  Divider,
  CircularProgress,
  Chip
} from '@mui/material';
import { 
  Close, 
  Save, 
  Cancel,
  Warning,
  CheckCircle,
  Info 
} from '@mui/icons-material';
import {EnhancedButton as Button} from "./EnhancedButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdvancedModal = ({
  // Basic Props
  open,
  onClose,
  title,
  children,
  actions,
  
  // Size & Layout
  maxWidth = 'md',
  fullWidth = true,
  size = 'medium', // 'small', 'medium', 'large', 'xlarge'
  
  // Features
  loading = false,
  showHeader = true,
  showFooter = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
  
  // Status & Variants
  variant = 'default', // 'default', 'success', 'warning', 'error', 'info'
  statusText,
  
  // Form Integration
  formId,
  
  // Custom Styling
  sx = {},
  paperProps = {}
}) => {
  
  // تنظیم سایز بر اساس prop
  const getMaxWidth = () => {
    const sizeMap = {
      'small': 'sm',
      'medium': 'md', 
      'large': 'lg',
      'xlarge': 'xl'
    };
    return sizeMap[size] || maxWidth;
  };

  // تنظیم استایل بر اساس variant
  const getVariantStyles = () => {
    const variants = {
      default: {
        bgcolor: 'primary.main',
        color: 'white'
      },
      success: {
        bgcolor: 'success.main',
        color: 'white'
      },
      warning: {
        bgcolor: 'warning.main',
        color: 'white'
      },
      error: {
        bgcolor: 'error.main',
        color: 'white'
      },
      info: {
        bgcolor: 'info.main',
        color: 'white'
      }
    };
    return variants[variant] || variants.default;
  };

  // آیکون بر اساس variant
  const getStatusIcon = () => {
    const icons = {
      success: <CheckCircle sx={{ mr: 1 }} />,
      warning: <Warning sx={{ mr: 1 }} />,
      error: <Warning sx={{ mr: 1 }} />,
      info: <Info sx={{ mr: 1 }} />
    };
    return icons[variant];
  };

  const handleClose = (event, reason) => {
    if (!closeOnBackdrop && reason === 'backdropClick') return;
    if (!closeOnEscape && reason === 'escapeKeyDown') return;
    onClose?.();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={getMaxWidth()}
      fullWidth={fullWidth}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: 24,
          minHeight: size === 'large' ? '60vh' : 'auto',
          ...paperProps.sx
        },
        ...paperProps
      }}
      sx={sx}
    >
      {/* Header */}
      {showHeader && (
        <>
          <DialogTitle sx={{ 
            m: 0, 
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ...getVariantStyles()
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {getStatusIcon()}
              <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                {title}
              </Typography>
              {statusText && (
                <Chip 
                  label={statusText}
                  size="small"
                  sx={{ 
                    ml: 2,
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white'
                  }}
                />
              )}
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {loading && (
                <CircularProgress 
                  size={20} 
                  sx={{ color: 'white' }} 
                />
              )}
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  color: 'inherit',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
                disabled={loading}
              >
                <Close />
              </IconButton>
            </Box>
          </DialogTitle>
          <Divider />
        </>
      )}

      {/* Content */}
      <DialogContent sx={{ 
        p: 3,
        ...(size === 'large' && { minHeight: '400px' }),
        ...(size === 'xlarge' && { minHeight: '500px' })
      }}>
        {children}
      </DialogContent>

      {/* Footer */}
      {showFooter && (
        <>
          <Divider />
          <DialogActions sx={{ 
            p: 3,
            gap: 2,
            justifyContent: actions ? 'flex-end' : 'flex-end'
          }}>
            {actions || (
              <>
                <Button
                  variant="outlined"
                  startIcon={<Cancel />}
                  onClick={onClose}
                  disabled={loading}
                  color="inherit"
                >
                  انصراف
                </Button>
                <Button
                  variant="contained"
                  startIcon={loading ? <CircularProgress size={16} /> : <Save />}
                  loading={loading}
                  type={formId ? "submit" : "button"}
                  form={formId}
                  onClick={!formId ? onClose : undefined}
                >
                  {loading ? 'در حال ذخیره...' : 'ذخیره'}
                </Button>
              </>
            )}
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export {AdvancedModal};
export default AdvancedModal;