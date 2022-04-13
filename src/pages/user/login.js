import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import { IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Login({ open, setOpen }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFullWidthChange = (event) => {};

  return (
    <React.Fragment>
      <Dialog
        sx={{ marginBottom: 30 }}
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="id">
          <Box display="flex" alignItems="center">
            <Typography variant="h4" flexGrow={1} textAlign="center">
              Login
            </Typography>
            <Box>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
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
            <Button variant="contained" color="error">
              Login
            </Button>
            <Typography textAlign="center">
              Don't have account? Please <a href="#">Sign in</a>
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
