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
import {
  getFurnitureCategory,
  postFurnitureCategory,
} from "../../store/furnitureCategory/furnitureCategorySlice";
import SelectImage from "../../component/SelectImage/SelectImage";
import {
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function AddSet({ setOpenMessage, open, setOpen }) {
  const dispatch = useDispatch();
  const { fullfilled } = useSelector((state) => state.global);
  const [images, setImages] = React.useState([]);
  const [setInfoName, setSetInfoName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [categoryId, setCategoryId] = React.useState("");
  const { categories } = useSelector((state) => state.category);
  const handleOk = async (e) => {
    if (!setInfoName) {
      setOpenMessage("Please fill set name!");
      return;
    }
    if (!price) {
      setOpenMessage("Please fill set price!");
      return;
    }
    if (!categoryId) {
      setOpenMessage("Please fill select a category!");
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
    console.log({ setInfoName, categoryId, price, images });
    //dispatch(postFurnitureCategory({ setInfoName, categoryId, price, images }));
  };
  const handleClose = (_, r) => {
    if (r !== "backdropClick") {
      setOpen(false);
    }
  };
  useEffect(() => {
    dispatch(getFurnitureCategory());
  }, []);
  useEffect(() => {
    if (fullfilled) {
      setOpen(false);
      dispatch(setFullFilled({ value: false }));
    }
  }, [fullfilled, setOpen]);
  return (
    <div>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Label" />
        </FormGroup>
      </Drawer>
      <Dialog
        fullWidth
        maxWidth="sm"
        style={{ backgroundColor: "transparent" }}
        open={open}
        onClose={handleClose}
        className="ae-dialog"
      >
        <DialogTitle className="ae-dialog-title">Add Set</DialogTitle>
        <DialogContent className="ae-dialog-content">
          <TextField
            value={setInfoName}
            onChange={(e) => setSetInfoName(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Set name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Set price"
            type="text"
            fullWidth
            variant="standard"
          />
          <FormControl fullWidth>
            <InputLabel id="select-category-of-set-label">Category</InputLabel>
            <Select
              labelId="select-category-of-set-label"
              id="select-category-of-set"
              defaultValue=""
              label="Category"
              onChange={(e) => setCategoryId(e.target.value)}
            >
              {categories.map((i) => (
                <MenuItem key={i.id} value={i.id}>
                  {i.categoryName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="f-add-edit-images">
            <SelectImage images={images} setImages={setImages} />
          </div>
          <Button
            onClick={() => setOpenDrawer(true)}
            variant="contained"
            disableElevation
          >
            Add Furniture
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>OK</Button>
          <Button onClick={() => setOpen(false)}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
