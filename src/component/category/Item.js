import React from "react";
import { Divider, Tooltip } from "@mui/material";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function Item({ itemData, setData, setOpen, keys, onClick }) {
  const handleClick = (panel) => {
    setOpen(panel);
    setData(itemData);
  };
  return (
    <div onClick={onClick} className="dialog-item">
      <div className="item-edit-cart">
        <Tooltip
          title={<span style={{ fontSize: 14, padding: 2 }}>Edit</span>}
          arrow
          placement="bottom"
          disableInteractive
        >
          <div className="tooltip">
            <AiOutlineEdit
              onClick={(e) => {
                e.stopPropagation();
                handleClick("edit");
              }}
              fill="blue"
              size={30}
            />
          </div>
        </Tooltip>
        <Divider orientation="vertical" flexItem />
        <Tooltip
          title={<span style={{ fontSize: 14, padding: 2 }}>Delete</span>}
          arrow
          placement="bottom"
          disableInteractive
        >
          <div className="tooltip">
            <AiOutlineDelete
              onClick={(e) => {
                e.stopPropagation();
                handleClick("delete");
              }}
              fill="red"
              size={30}
            />
          </div>
        </Tooltip>
      </div>
      <img src={itemData[keys.imageSource]} alt={itemData[keys.name]} />
      <p>{itemData[keys.name]}</p>
    </div>
  );
}
