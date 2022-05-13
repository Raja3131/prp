import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Field = ({
  name,
  id,
  handleChange,
  handleBlur,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
  placeholder,
  error,
  helperText,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      id={id}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      onBlur={handleBlur}
      label={label}
      autoFocus={autoFocus}
      type={type}
      error={error}
      helperText={helperText}
      InputProps={
        name.includes("password")
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  </Grid>
);

export default Field;
