import React, { useEffect, useState } from "react";
import { Snackbar } from "@mui/material";
import Item from "../category/Item";
import { useDispatch, useSelector } from "react-redux";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import { getFurniture } from "../../store/furniture/furnitureSlice";

export default function EditProdutView() {
  const [editOpen, setEditOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState("");
  const [openMessage, setOpenMessage] = useState("");
  const { furnitures } = useSelector((state) => state.furniture);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFurniture());
  }, []);
  return (
    <div className="dialog-edit">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={Boolean(openMessage)}
        onClose={() => setOpenMessage("")}
        message={openMessage}
      />
      <EditProduct
        setOpenMessage={setOpenMessage}
        open={editOpen}
        setOpen={setEditOpen}
      />
      <DeleteProduct open={deleteOpen} setOpen={setDeleteOpen} />
      <div className="dialog-container">
        {furnitures?.map((itemData, index) => (
          <Item
            key={index}
            itemData={itemData}
            setDeleteOpen={setDeleteOpen}
            setEditOpen={setEditOpen}
          />
        ))}
      </div>
    </div>
  );
}
