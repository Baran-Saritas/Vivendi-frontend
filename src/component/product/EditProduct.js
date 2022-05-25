import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setFullFilled } from "../../store/global/globalSlice";
import EditProductModal from "./EditProductModal";
import { getFurniture } from "../../store/furniture/furnitureSlice";

export default function EditProduct({ setOpenMessage, open, setOpen }) {
  const dispatch = useDispatch();
  const [isOk, setIsOk] = React.useState(false);
  const { fullfilled } = useSelector((state) => state.global);
  const handleClose = (_, r) => {
    if (r !== "backdropClick") {
      setOpen("");
    }
  };
  useEffect(() => {
    if (fullfilled) {
      setOpen(false);
      dispatch(getFurniture());
      dispatch(setFullFilled({ value: false }));
    }
  }, [fullfilled, setOpen]);
  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="md"
        style={{ backgroundColor: "transparent" }}
        open={Boolean(open)}
        onClose={handleClose}
        className="ae-dialog"
      >
        <DialogTitle className="ae-dialog-title">Edit Category</DialogTitle>
        <DialogContent className="ae-dialog-content">
          <EditProductModal setIsOk={setIsOk} isOk={isOk} data={open} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOk(true)}>OK</Button>
          <Button onClick={() => setOpen("")}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
