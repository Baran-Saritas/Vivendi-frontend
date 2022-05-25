import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Autocomplete, Button, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  getFurniture,
  postFurnitureCoupon,
} from "../../../store/furniture/furnitureSlice";

export default function CreateCouponModal({ open, setOpen }) {
  const [discount, setDiscount] = useState(0);
  const [openMessage, setOpenMessage] = useState("");
  const [image, setImage] = useState(null);
  const [furnitureId, setFurnitureId] = useState();
  const [endDate, setEndDate] = useState(new Date());
  const { furnitures } = useSelector((state) => state.furniture);
  const { fullfilled } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 300000) {
        setOpenMessage("Max image size must be 300KB");
        return;
      }
      let img = await getBase64(e.target.files[0]);
      document.getElementById("file-chosen").innerText = e.target.files[0].name;
      setImage(img);
    }
  };
  const getBase64 = (file) =>
    new Promise(function (resolve, reject) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject("Error: ", error);
    });
  const handleCreate = () => {
    let utcDate = moment(endDate).utc().format();
    if (!image) {
      setOpenMessage("Please select a image!");
      return;
    }
    if (Number(discount) && Number(discount) < 1) {
      setOpenMessage("Please fill discount field!");
      return;
    }
    if (!furnitureId) {
      setOpenMessage("Please select a furniture!");
      return;
    }
    if (utcDate <= moment(new Date()).utc().format()) {
      setOpenMessage("Please select a different date!");
      return;
    }
    console.table({
      data: {
        imageSource: image,
        discount,
        endDate: utcDate,
      },
      id: furnitureId,
    });
    dispatch(
      postFurnitureCoupon({
        data: {
          imageSource: image,
          discount,
          endDate: utcDate,
        },
        id: furnitureId,
      })
    );
  };
  const fetchFurnitures = () => {
    if (!furnitures.length) dispatch(getFurniture());
  };

  const handleAutoComplete = (event, newValue) => {
    if (!newValue) {
      setFurnitureId(null);
      return;
    }
    setFurnitureId(newValue.id);
  };

  const handleDiscountChange = (e) => {
    let val = parseFloat(e.target.value);
    if (val > 100) val = 100;
    if (val < 1) val = 1;
    setDiscount(val);
  };

  useEffect(() => {
    if (fullfilled) {
      setDiscount(1);
      setImage(null);
      setFurnitureId("");
    }
  }, [fullfilled]);

  return (
    <Dialog
      open={Boolean(open)}
      onClose={() => setOpen(null)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle style={{ textAlign: "center" }}>Create Coupon</DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 40,
          }}
        >
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={Boolean(openMessage)}
            onClose={() => setOpenMessage("")}
            message={openMessage}
          />
          <TextField
            id="outlined-number"
            label="Discount"
            value={discount}
            onChange={handleDiscountChange}
            inputProps={{ min: 0, max: 100 }}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div id="fakeDiv">
            <input type="file" id="actual-btn" hidden onChange={handleChange} />
            <label htmlFor="actual-btn">Choose File</label>
            <span id="file-chosen">No file chosen</span>
          </div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            value={furnitureId}
            onChange={handleAutoComplete}
            getOptionLabel={(o) => o.name}
            options={furnitures.filter((f) => !f?.coupon)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                onClick={fetchFurnitures}
                label="Select furniture"
              />
            )}
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateTimePicker
              label="End Date"
              value={endDate}
              onChange={setEndDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreate}>CREATE</Button>
        <Button onClick={() => setOpen(null)}>CANCEL</Button>
      </DialogActions>
    </Dialog>
  );
}
