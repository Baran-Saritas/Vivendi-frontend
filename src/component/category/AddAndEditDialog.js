import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AiOutlinePlus } from "react-icons/ai";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { compareDiff } from "../../utilrs/commons";
import { setFullFilled } from "../../store/global/globalSlice";
import { FormControl, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import { useParams } from "react-router-dom";
import SetDrawer from "../setDrawer";

export default function AddAndEditDialog({
  open,
  setOpen,
  data,
  updateFunc,
  addFunc,
  keys,
  variant,
  foreignKeys,
}) {
  const dispatch = useDispatch();
  const { fullfilled } = useSelector((state) => state.global);
  const [innerData, setInnerData] = React.useState({});
  const [openDrawer, setOpenDrawer] = React.useState("init");
  const { category_id, group_id } = useParams();
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
      if (!Object.keys(res).length) {
        setOpen("CLOSE");
        return;
      }
      dispatch(updateFunc({ id: data.id, data: res }));
    } else {
      if (variant === "group") {
        dispatch(addFunc({ data: innerData, id: category_id }));
      } else if (variant === "set-info") {
        dispatch(addFunc({ data: innerData, id: group_id }));
      } else {
        dispatch(addFunc({ data: innerData }));
      }
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
    console.log("e : ", foreignKeys);
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
        className="ae-dialog"
      >
        <DialogTitle className="ae-dialog-title">
          {`${open} ${variant}`
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
            .replace("-", " ")}
        </DialogTitle>
        <DialogContent className="ae-dialog-content">
          <TextField
            value={innerData[keys.name]}
            onChange={(e) =>
              setInnerData({ ...innerData, [keys.name]: e.target.value })
            }
            autoFocus
            margin="dense"
            id="name"
            label={`${variant} name`
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
              .replace("-", " ")}
            type="text"
            fullWidth
            variant="standard"
          />
          {variant === "set-info" && (
            <div>
              <TextField
                value={innerData[keys.price]}
                onChange={(e) =>
                  setInnerData({ ...innerData, [keys.price]: e.target.value })
                }
                autoFocus
                margin="dense"
                id="price"
                label={`${variant} price`.replace("-", " ")}
                type="text"
                fullWidth
                variant="standard"
              />
              <div style={{zIndex:1399}}>
                <SetDrawer />
              </div>

            </div>



          )}
          {foreignKeys !== undefined && open === "edit" && (
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="simple-select-label">
                {keys.id.toUpperCase()}
              </InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select-standard"
                value={innerData[keys.id]}
                onChange={(e) =>
                  setInnerData({ ...innerData, [keys.id]: e.target.value })
                }
                label={keys.id.toUpperCase()}
              >
                {foreignKeys.map((i) => (
                  <MenuItem value={i.id} key={i.id}>
                    {i[variant === "set-info" ? "groupName" : "categoryName"]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {innerData[keys.imageSource] && (
            <img
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
