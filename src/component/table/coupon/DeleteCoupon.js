import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFullFilled } from "../../../store/global/globalSlice";

export default function DeleteCoupon({
  openDelete,
  setOpenDelete,
  id,
  deleteFunc,
}) {
  const dispatch = useDispatch();
  const { fullfilled } = useSelector((state) => state.global);
  const handleClick = () => {
    if (id) {
      dispatch(deleteFunc(id));
    }
  };
  useEffect(() => {
    if (fullfilled) {
      setOpenDelete(false);
      dispatch(setFullFilled({ value: false }));
    }
  }, [fullfilled, setOpenDelete]);
  return (
    <Dialog
      open={openDelete}
      onClose={() => setOpenDelete(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure to delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick}>OK</Button>
        <Button onClick={() => setOpenDelete(false)} autoFocus>
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  );
}
