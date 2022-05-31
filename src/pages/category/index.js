import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Snackbar, Tooltip } from "@mui/material";
import Item from "../../component/category/Item";
import { getCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import { useDispatch, useSelector } from "react-redux";
import AddCategory from "./AddCategory";
import ConfirmDialog from "./DeleteCategory";
import EditCategory from "./EditCategory";

export default function Category() {
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState("");
  const [openMessage, setOpenMessage] = useState("");
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <div className="dialog-edit">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={Boolean(openMessage)}
        onClose={() => setOpenMessage("")}
        message={openMessage}
      />
      <AddCategory
        setOpenMessage={setOpenMessage}
        open={addOpen}
        setOpen={setAddOpen}
      />
      <EditCategory
        setOpenMessage={setOpenMessage}
        open={editOpen}
        setOpen={setEditOpen}
      />
      <ConfirmDialog open={deleteOpen} setOpen={setDeleteOpen} />
      <div className="dialog-container">
        {categories?.map((itemData, index) => (
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
