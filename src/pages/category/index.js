import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from "@mui/material";
import Item from "../../component/category/Item";
import AddAndEditDialog from "../../component/category/AddAndEditDialog";
import ConfirmDialog from "../../component/category/ConfirmDialog";
import {
  postFurnitureCategory,
  updateFurnitureCategory,
} from "../../store/furnitureCategory/furnitureCategorySlice";
export default function Category() {
  const [open, setOpen] = React.useState("init");
  const [data, setData] = useState(null);
  return (
    <div className="category-edit">
      <AddAndEditDialog
        open={open}
        setOpen={setOpen}
        data={open === "edit" ? data : undefined}
        addFnc={postFurnitureCategory}
        updateFnc={updateFurnitureCategory}
        variant="category"
      />
      <ConfirmDialog
        open={open}
        setOpen={setOpen}
        data={data}
        // fnc={deleteCategory}
      />
      <div className="category-container">
        {items.map((itemData, index) => (
          <Item
            key={index}
            itemData={itemData}
            setData={setData}
            setOpen={setOpen}
          />
        ))}
        <Tooltip
          title={<span style={{ fontSize: 14, padding: 2 }}>Add</span>}
          arrow
          placement="bottom"
          disableInteractive
        >
          <div className="category-item-2" onClick={() => setOpen("add")}>
            <AiOutlinePlus size={60} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
let items = [
  { imageSource: "test", name: "ali", id: "1", fi: "2" },
  { imageSource: "test", name: "ali", id: "1", fi: "2" },
  { imageSource: "test", name: "ali", id: "1", fi: "2" },
  { imageSource: "test", name: "ali", id: "1", fi: "2" },
  { imageSource: "test", name: "ali", id: "1", fi: "2" },
  { imageSource: "test", name: "ali", id: "1", fi: "2" },
  { imageSource: "test", name: "ali", id: "1", fi: "2" },
  { imageSource: "test", name: "ali", id: "1", fi: "2" },
];
