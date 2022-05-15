import React from "react";
import { Divider, Tooltip } from "@mui/material";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function Item({
  itemData,
  setDeleteOpen,
  setEditOpen,
  onClick,
}) {
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
                setEditOpen(itemData);
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
                setDeleteOpen(itemData.id);
              }}
              fill="red"
              size={30}
            />
          </div>
        </Tooltip>
      </div>
      <div className="dialog-item-content">
        <img
          style={{ objectFit: "cover" }}
          src={itemData?.images[0].imageSource}
          alt="category"
        />
        <p>{itemData.categoryName}</p>
      </div>
    </div>
  );
}
