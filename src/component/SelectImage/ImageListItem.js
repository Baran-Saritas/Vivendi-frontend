import { Popover, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { HexColorPicker } from "react-colorful";

function ImageListItem({ item, removeImage, setImages, setPreviewImage }) {
  const [anchor, setAnchor] = useState(null);
  const [color, setColor] = useState("#ffffff");
  const [value, setValue] = useState("");
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
    let newItem = { ...item };
    newItem.color = color;
    setImages((p) => {
      let newState = [...p];
      const currentIndex = p.findIndex(
        (i) => i.imageName === newItem.imageName
      );
      newState.splice(currentIndex, 1, newItem);
      console.log(newState);
      return newState;
    });
  };

  const handleKeyUp = (e) => {
    let val = e.target.value;
    if (e.keyCode === 13) {
      if (val && (val.length === 4 || val.length === 7)) {
        setColor(val);
      }
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (item.color) setColor(item.color);
  }, [item]);
  return (
    <p style={{ cursor: "pointer" }}>
      <span>
        <span onClick={() => setPreviewImage(item.imageSource)}>
          {item.imageName}
        </span>
        <span
          className="p-select-color"
          style={{ backgroundColor: color }}
          onClick={handleClick}
        ></span>
        <Popover
          id={"simple-popover" + item.imageName}
          open={Boolean(anchor)}
          anchorEl={anchor}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            <HexColorPicker color={color} onChange={setColor} />
            <input
              value={value || color}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
          </Typography>
        </Popover>
      </span>
      <span onClick={() => removeImage(item.imageName)}>
        <TiDeleteOutline fontSize={20} />
      </span>
    </p>
  );
}
export default ImageListItem;
