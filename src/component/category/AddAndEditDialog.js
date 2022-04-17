import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import Story from "../story";

export default function AddAndEditDialog({
  open,
  setOpen,
  data,
  updateFnc,
  addFnc,
  variant,
}) {
  const dispatch = useDispatch();
  const [innerData, setInnerData] = React.useState({
    file: undefined,
    name: undefined,
  });
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
    setInnerData({ ...innerData, file: imageSource });
  };
  const handleOk = async (e) => {
    setOpen("OK");
    if (open === "edit") {
      //dispatch(updateFnc(innerData));
    } else {
      //dispatch(addFunc(data));
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
  return (
    <div>
      
      <Dialog
        fullWidth
        maxWidth="sm"
        
        style={{backgroundColor:"transparent"}}
        open={open === "edit" || open === "add"}
        onClose={handleClose}
      >
        <DialogTitle>{`${open} ${variant}`.toUpperCase()}</DialogTitle>
        <DialogContent >
          
          <TextField
            value={innerData.name}
            onChange={(e) =>
              setInnerData({ ...innerData, name: e.target.value })
            }
            autoFocus
            margin="dense"
            id="name"
            label="Category Name"
            type="text"
            fullWidth
            variant="standard"
          />
          {(data?.imageSource || innerData.file) && (
            <img
              style={{ width: "200px", height: "100px" }}
              src={innerData.file || data?.imageSource || ""}
              alt={innerData.name}
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
