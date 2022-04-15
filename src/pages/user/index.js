import * as React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SignIn from "./signin";
import SignUp from "./signup";

export default function Sign({ open, setOpen }) {
  const [state, setState] = React.useState(true);
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
            <Typography
              variant="h4"
              flexGrow={1}
              padding="20px 0"
              textAlign="center"
            >
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
          {state ? (
            <SignIn setState={setState} />
          ) : (
            <SignUp setState={setState} />
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
