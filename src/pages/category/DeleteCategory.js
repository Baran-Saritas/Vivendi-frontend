import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useDispatch } from "react-redux";
import { getCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import { category_api } from "../../utilrs/axiosInterceptors";

export default function DeleteCategory({ open, setOpen }) {
  const dispatch = useDispatch();
  const handleClose = (_, r) => {
    if (r !== "backdropClick") setOpen("");
  };

  const handleClick = () => {
    category_api
      .delete("/category/" + open)
      .then((res) => {
        setOpen("");
        dispatch(getCategory());
      })
      .catch((err) => {
        //err message
        setOpen("");
      });
  };
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
