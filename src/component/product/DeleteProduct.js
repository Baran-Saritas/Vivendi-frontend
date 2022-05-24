import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useDispatch, useSelector } from "react-redux";
import { setFullFilled } from "../../store/global/globalSlice";
import {
  deleteFurniture,
  removeFurniture,
} from "../../store/furniture/furnitureSlice";

export default function DeleteProduct({ open, setOpen }) {
  const { fullfilled } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const handleClose = (_, r) => {
    if (r !== "backdropClick") setOpen("");
  };

  const handleClick = () => {
    dispatch(deleteFurniture(open));
  };
  useEffect(() => {
    if (fullfilled) {
      dispatch(removeFurniture({ id: open }));
      setOpen("");
      dispatch(setFullFilled({ value: false }));
    }
  }, [fullfilled, setOpen]);

  return (
    <div>
      <Dialog
        open={Boolean(open)}
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
          <Button onClick={() => setOpen("")} autoFocus>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
