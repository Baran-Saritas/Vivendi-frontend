import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function ConfirmDialog({ open, setOpen, data, fnc }) {
  const handleClose = (_, r) => {
    if (r !== "backdropClick") setOpen("init");
  };

  const handleClick = () => {
    // dispatch(fnc(data.id))
  };

  return (
    <div>
      <Dialog
        open={open === "delete"}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>OK</Button>
          <Button onClick={() => setOpen("init")} autoFocus>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
