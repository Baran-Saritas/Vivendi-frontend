import React, { useEffect, useState } from "react";
import { Divider, Tooltip } from "@mui/material";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import ConfirmDialog from "./ConfirmDialog";
import AddAndEditDialog from "./AddAndEditDialog";
export default function CategoryItem() {
  const [confirm, setConfirm] = React.useState("init");
  const [edit, setEdit] = React.useState("init");
  const [type,setType] = useState("");
  const [data, setData] = useState({ imageSource: "", name: "" });
  
  return (
    <div className="category-item">
      <ConfirmDialog open={confirm} setOpen={setConfirm} />
      <AddAndEditDialog
        open={edit}
        setOpen={setEdit}
        data={data}
        setData={setData}
        textType={type}
      />
      <div className="item-edit-cart">
        <Tooltip
          title={<span style={{ fontSize: 14, padding: 2 }}>Edit</span>}
          arrow
          placement="bottom"
          disableInteractive
        >
          <div className="tooltip">
            <AiOutlineEdit onClick={() => { setEdit(""); setType("Edit")}} fill="blue" size={30} />
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
              onClick={() => setConfirm("")}
              fill="red"
              size={30}
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
