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
import { postFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import SelectImage from "../../component/SelectImage/SelectImage";

export default function AddCategory({ setOpenMessage, open, setOpen }) {
  const dispatch = useDispatch();
  const { fullfilled } = useSelector((state) => state.global);
  const [images, setImages] = React.useState([]);
  const [categoryName, setCategoryName] = React.useState("");
  const handleOk = async (e) => {
    if (!categoryName) {
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
    dispatch(postFurnitureCategory({ categoryName, images }));
  };
  const handleClose = (_, r) => {
    if (r !== "backdropClick") {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (fullfilled) {
      setOpen(false);
      dispatch(setFullFilled({ value: false }));
    }
  }, [fullfilled, setOpen]);
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
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            autoFocus
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
