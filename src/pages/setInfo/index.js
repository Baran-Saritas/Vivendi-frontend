import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Snackbar, Tooltip } from "@mui/material";
import Item from "../../component/category/Item";
import { useDispatch, useSelector } from "react-redux";
import {
  getFurnitureSetInfo,
  getFurnitureSetInfoOfGroup,
} from "../../store/furnitureSetInfo/furnitureSetInfoSlice";
import AddSet from "./AddSet";
import EditSet from "./EditSet";
import DeleteSet from "./DeleteSet";

export default function Set() {
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState("");
  const [openMessage, setOpenMessage] = useState("");
  const { setInfos } = useSelector((state) => state.setInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFurnitureSetInfo());
  }, []);
  useEffect(() => {
    console.log("RES : ", setInfos);
  }, [setInfos]);
  return (
    <div className="dialog-edit">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={Boolean(openMessage)}
        onClose={() => setOpenMessage("")}
        message={openMessage}
      />
      <AddSet
        setOpenMessage={setOpenMessage}
        open={addOpen}
        setOpen={setAddOpen}
      />
      <EditSet
        setOpenMessage={setOpenMessage}
        open={editOpen}
        setOpen={setEditOpen}
      />
      <DeleteSet open={deleteOpen} setOpen={setDeleteOpen} />
      <div className="dialog-container">
        {setInfos?.map((itemData, index) => (
          <Item
            key={index}
            itemData={itemData}
            setDeleteOpen={setDeleteOpen}
            setEditOpen={setEditOpen}
          />
        ))}
        <Tooltip
          title={<span style={{ fontSize: 14, padding: 2 }}>Add</span>}
          arrow
          placement="bottom"
          disableInteractive
        >
          <div className="dialog-item-2" onClick={() => setAddOpen(true)}>
            <AiOutlinePlus size={60} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
