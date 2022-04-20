import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from "@mui/material";
import Item from "../../component/category/Item";
import AddAndEditDialog from "../../component/category/AddAndEditDialog";
import ConfirmDialog from "../../component/category/ConfirmDialog";
import {
  deleteFurnitureCategory,
  getFurnitureCategory,
  postFurnitureCategory,
  updateFurnitureCategory,
} from "../../store/furnitureCategory/furnitureCategorySlice";
import { useDispatch, useSelector } from "react-redux";
export default function Category() {
  const [open, setOpen] = React.useState("init");
  const [data, setData] = useState(null);
  const { categories } = useSelector((state) => state.category);
  const keys = { imageSource: "imageUrl", name: "categoryName" };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFurnitureCategory());
  }, [open]);
  return (
    <div className="category-edit">
      <AddAndEditDialog
        open={open}
        setOpen={setOpen}
        data={open === "edit" ? data : undefined}
        addFunc={postFurnitureCategory}
        updateFunc={updateFurnitureCategory}
        keys={keys}
        variant="category"
      />
      <ConfirmDialog
        open={open}
        setOpen={setOpen}
        data={data}
        deleteFunc={deleteFurnitureCategory}
      />
      <div className="category-container">
        {categories?.map((itemData, index) => (
          <Item
            key={index}
            itemData={itemData}
            keys={keys}
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
