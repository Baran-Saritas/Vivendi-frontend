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
import { getFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import SelectImage from "../../component/SelectImage/SelectImage";
import {
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { getFurniture } from "../../store/furniture/furnitureSlice";
import { postFurnitureSetInfo } from "../../store/furnitureSetInfo/furnitureSetInfoSlice";

export default function AddSet({ setOpenMessage, open, setOpen }) {
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
    let furs = Object.entries(selectedFurniture)
      .filter((i) => i[1])
      .map((i) => i[0]);
    if (furs.length <= 1) {
      setOpenMessage("Please choose al lease 2 furnitures!");
      return;
    }
    //console.log({ setInfoName, categoryId, price, images });
    dispatch(
      postFurnitureSetInfo({
        data: { setInfoName, categoryId, price, images },
        furnitureIds: { furs },
      })
    );
  };
  const handleClose = (_, r) => {
    if (r !== "backdropClick") {
      setOpen(false);
    }
  };
  useEffect(() => {
    dispatch(getFurnitureCategory());
    dispatch(getFurniture());
  }, []);
  useEffect(() => {
    if (fullfilled) {
      setImages([]);
      setSetInfoName("");
      setPrice("");
      setOpenDrawer(false);
      setCategoryId("");
      setOpen(false);
      setSelectedFurniture({});
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
