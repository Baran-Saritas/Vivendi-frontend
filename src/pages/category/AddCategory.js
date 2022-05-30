import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setFullFilled } from "../../store/global/globalSlice";
import SelectImage from "../../component/SelectImage/SelectImage";
import {
  getCategory,
  postCategory,
} from "../../store/furnitureCategory/furnitureCategorySlice";
import { category_api } from "../../utilrs/axiosInterceptors";

export default function AddCategory({ setOpenMessage, open, setOpen }) {
  const dispatch = useDispatch();
  const [images, setImages] = React.useState([]);
  const [name, setName] = React.useState("");
  const handleOk = async (e) => {
    if (!name) {
      setOpenMessage("Please fill category name!");
      return;
    }
    if (images.length < 1) {
      setOpenMessage("Please select one image!");
      return;
    }
    if (images.filter((i) => !i.color).length) {
      setOpenMessage("Please select image color!");
      return;
    }
    category_api
      .post("/category", { name, images })
      .then((res) => {
        setOpen(false);
        dispatch(getCategory());
        setImages([]);
        setName("");
      })
      .catch((err) => {
        // err message
        setOpen(false);
      });
  };
  const handleClose = (_, r) => {
    if (r !== "backdropClick") {
      setOpen(false);
    }
  };
  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="sm"
        style={{ backgroundColor: "transparent" }}
        open={open}
        onClose={handleClose}
        className="ae-dialog"
      >
        <DialogTitle className="ae-dialog-title">Add Category</DialogTitle>
        <DialogContent className="ae-dialog-content">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            inputProps={{
              autoComplete: "none",
            }}
            margin="dense"
            id="name"
            label="Category name..."
            type="text"
            fullWidth
            variant="standard"
          />
          <div className="c-add-edit-images">
            <SelectImage images={images} setImages={setImages} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>OK</Button>
          <Button onClick={() => setOpen(false)}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
