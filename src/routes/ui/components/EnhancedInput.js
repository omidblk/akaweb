// src/components/ui/EnhancedInput.jsx
import React from "react";
import {
  TextField,
  FormControl,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const EnhancedInput = ({
  label,
  type = "text",
  error,
  helperText,
  required = false,
  startIcon,
  endIcon,
  showPasswordToggle = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl fullWidth error={!!error}>
      <TextField
        label={label}
        type={
          showPasswordToggle && type === "password"
            ? showPassword
              ? "text"
              : "password"
            : type
        }
        error={!!error}
        required={required}
        variant="outlined"
        InputProps={{
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : null,
          endAdornment:
            showPasswordToggle && type === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : endIcon ? (
              <InputAdornment position="end">{endIcon}</InputAdornment>
            ) : null,
        }}
        {...props}
      />
      {(error || helperText) && (
        <FormHelperText>{error || helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export {EnhancedInput};
export default EnhancedInput;
