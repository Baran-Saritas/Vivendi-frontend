import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { getFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";

export default function AddAndEditDialog({ open, setOpen, data, setData,textType }) {
  const [file, setFile] = React.useState(null);
  const [typeText,setTypeText] = React.useState("");
  const dispatch = useDispatch
  useEffect(() => {
     const res = textType == "Edit" ? "Edit Category":"Add Category"
     setTypeText(res);

  });

  useEffect(() => {
    getBase64(file).then((res) => setData({ ...data, imageSource: res }));
  },[file])

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleOk = async (e) => {
    setOpen("OK");
    dispatch(getFurnitureCategory());
  };
  const handleClose = () => {
    setOpen("init");
  };
  return (
    <div>
      <Dialog fullWidth maxWidth="sm" open={open === ""} onClose={handleClose}>
        <DialogTitle>{typeText}</DialogTitle>
        <DialogContent>

          <TextField
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            autoFocus
            margin="dense"
            id="name"
            label="Category Name"
            type="text"
            fullWidth
            variant="standard"
          />
{
  file ? (
    <img style={{width:"200px",height:"100px"}} src={data.imageSource ? data.imageSource : "" }></img>
  ):null
}
    
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
