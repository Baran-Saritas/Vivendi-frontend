import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";

export default function SignUp({ setState }) {
  const handleState = (e) => {
    e.preventDefault();
    setState(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "40px !important",
        padding: "0 50px",
        marginTop: "20px !important",
      }}
    >
      <TextField
        color="success"
        id="standard-mail-input"
        label="E-mail"
        variant="standard"
      />
      <TextField
        color="success"
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
      <TextField
        color="success"
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
      <Button variant="contained" color="error">
        Login
      </Button>
      <Typography textAlign="center">
        Don't have account? Please{" "}
        <a href="#" onClick={handleState}>
          Sign in
        </a>
      </Typography>
    </Box>
  );
}
