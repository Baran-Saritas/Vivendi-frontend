import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { compareDiff } from "../../utilrs/commons";
import { setFullFilled } from "../../store/furnitureCategory/furnitureCategorySlice";

export default function AddAndEditDialog({
  open,
  setOpen,
  data,
  updateFunc,
  addFunc,
  keys,
  variant,
}) {
  const dispatch = useDispatch();
  const { fullfilled } = useSelector((state) => state.category);
  const [innerData, setInnerData] = React.useState({});
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
  const onFileChange = async (e) => {
    let imageSource = await getBase64(e.target.files[0]);
    setInnerData({ ...innerData, [keys.imageSource]: imageSource });
  };
  const handleOk = async (e) => {
    if (open === "edit") {
      let res = compareDiff(innerData, data);
      dispatch(updateFunc({ id: data.id, data: res }));
    } else {
      dispatch(addFunc(innerData));
    }
  };
  const handleClose = (_, r) => {
    if (r !== "backdropClick") {
      setOpen("init");
    }
  };
  React.useLayoutEffect(() => {
    if (data) {
      setInnerData(data);
    } else {
      setInnerData({});
    }
  }, [data]);
  useEffect(() => {
    if (fullfilled) {
      setOpen("OK");
      setInnerData({});
      dispatch(setFullFilled({ value: false }));
    }
  }, [fullfilled, setOpen]);
  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="sm"
        style={{ backgroundColor: "transparent" }}
        open={open === "edit" || open === "add"}
        onClose={handleClose}
      >
        <DialogTitle>{`${open} ${variant}`.toUpperCase()}</DialogTitle>
        <DialogContent>
          <TextField
            value={innerData[keys.name]}
            onChange={(e) =>
              setInnerData({ ...innerData, [keys.name]: e.target.value })
            }
            autoFocus
            margin="dense"
            id="name"
            label="Category Name"
            type="text"
            fullWidth
            variant="standard"
          />
          {innerData[keys.imageSource] && (
            <img
              style={{ width: "200px", height: "100px" }}
              src={innerData[keys.imageSource] || ""}
              alt={innerData[keys.name]}
            />
          )}
          <input
            onChange={onFileChange}
            type="file"
            className="custom-file-input"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>OK</Button>
          <Button onClick={() => setOpen("CANCEL")}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
