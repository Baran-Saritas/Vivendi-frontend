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
import Icon from "@mui/material/Icon";
import {
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { set_info_f_api } from "../../utilrs/axiosInterceptors";

export default function EditSet({ setOpenMessage, open, setOpen }) {
  const dispatch = useDispatch();
  const { fullfilled } = useSelector((state) => state.global);
  const [images, setImages] = React.useState([]);
  const [setInfoName, setSetInfoName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [categoryId, setCategoryId] = React.useState("");
  const { categories } = useSelector((state) => state.category);
  const { furnitures } = useSelector((state) => state.furniture);
  const [selectedFurniture, setSelectedFurniture] = React.useState({});
  const handleOk = async (e) => {
    let data = {};
    if (open.setInfoName !== setInfoName) {
      data.setInfoName = setInfoName;
    }
    if (open.price !== Number(price)) {
      data.price = Number(price);
    }
    if (open.categoryId !== categoryId) {
      data.categoryId = categoryId;
    }
    if (!setInfoName) {
      setOpenMessage("Please fill set name!");
      return;
    }
    if (!Number(price)) {
      setOpenMessage("Price have to be number!");
      return;
    }
    let furs = Object.entries(selectedFurniture)
      .filter((i) => i[1])
      .map((i) => i[0])
      .sort();
    if (furs.length <= 1) {
      setOpenMessage("Please choose al lease 2 furnitures!");
      return;
    }
    let _furs = [...open.furnitures.map((i) => i.id)].sort();

    if (furs.toString() !== _furs.toString()) {
      let removed = [];
      let added = [];
      _furs.forEach((i) => {
        if (!furs.includes(i)) removed.push(i);
      });
      furs.forEach((i) => {
        if (!_furs.includes(i)) added.push(i);
      });
    }
    let editImages = [];
    images.forEach((i) => {
      let res = open.images.find((j) => j.id === i.id);
      if (res?.color !== i.color) editImages.push(i);
    });
    if (editImages.length) {
      data.images = editImages;
    }
    console.log(data);
    //dispatch(updateFurnitureCategory({ categoryName, images }));
  };
  const handleClose = (_, r) => {
    if (r !== "backdropClick") {
      setOpen("");
    }
  };
  useEffect(() => {
    if (open) {
      setImages(open.images);
      setSetInfoName(open.setInfoName);
      setPrice(open.price);
      setCategoryId(open.categoryId);
      let val = {};
      open.furnitures.map((i) => (val[i.id] = true));
      setSelectedFurniture(val);
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
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: { minWidth: 300, padding: "30px 0 0 30px !important" },
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Furniture</FormLabel>
          <FormGroup>
            {furnitures.map((i) => (
              <FormControlLabel
                key={i.id}
                control={
                  <Checkbox
                    checked={!!selectedFurniture[i.id]}
                    name={i.id}
                    onChange={(e) => {
                      setSelectedFurniture({
                        ...selectedFurniture,
                        [e.target.name]: e.target.checked,
                      });
                    }}
                  />
                }
                label={i.name}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Drawer>
      <Dialog
        fullWidth
        maxWidth="sm"
        style={{ backgroundColor: "transparent" }}
        open={Boolean(open)}
        onClose={handleClose}
        className="ae-dialog"
      >
        <DialogTitle className="ae-dialog-title">Edit Set</DialogTitle>
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
              defaultValue={open.categoryId}
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
          <Button onClick={() => setOpen("")}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
