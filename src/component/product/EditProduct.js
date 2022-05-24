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
import SelectImage from "../SelectImage/SelectImage";
import { updateFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import { deleteImage } from "../../store/furniture/furnitureSlice";

export default function EditProduct({ setOpenMessage, open, setOpen }) {
  const dispatch = useDispatch();
  const { fullfilled } = useSelector((state) => state.global);
  const [images, setImages] = React.useState([]);
  const [name, setName] = React.useState("");
  const handleOk = async (e) => {
    let data = {};
    if (open.name !== name) {
      data.name = name;
    }
    if (!name) {
      setOpenMessage("Please fill category name!");
      return;
    }
    let editImages = [];
    images.forEach((i) => {
      let res = open.images.find((j) => j.id === i.id);
      if (res?.color !== i.color) editImages.push(i);
    });
    if (editImages.length) {
      data.images = editImages;
    }
    dispatch(updateFurnitureCategory({ id: open.id, data }));
  };
  const handleClose = (_, r) => {
    if (r !== "backdropClick") {
      setOpen("");
    }
  };
  useEffect(() => {
    if (open) {
      setImages(open.images);
      setName(open.name);
    }
  }, [open]);
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
        open={Boolean(open)}
        onClose={handleClose}
        className="ae-dialog"
      >
        <DialogTitle className="ae-dialog-title">Edit Category</DialogTitle>
        <DialogContent className="ae-dialog-content">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Category name"
            type="text"
            fullWidth
            variant="standard"
          />
          <div className="c-add-edit-images">
            <SelectImage
              deleteImage={deleteImage}
              images={images}
              setImages={setImages}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>OK</Button>
          <Button onClick={() => setOpen("")}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
