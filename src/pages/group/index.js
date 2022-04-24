import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from "@mui/material";
import Item from "../../component/category/Item";
import AddAndEditDialog from "../../component/category/AddAndEditDialog";
import ConfirmDialog from "../../component/category/ConfirmDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFurnitureGroup,
  getFurnitureGroupOfCategory,
  postFurnitureGroup,
  updateFurnitureGroup,
} from "../../store/furnitureGroup/furnitureGroupSlice";
import { useParams } from "react-router-dom";
import { getFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../component/loading";
export default function Group() {
  const [open, setOpen] = React.useState("init");
  const [data, setData] = useState(null);
  const { groups } = useSelector((state) => state.group);
  const { categories } = useSelector((state) => state.category);
  const keys = { imageSource: "imageUrl", name: "groupName", id: "categoryId" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category_id } = useParams();
  useEffect(() => {
    dispatch(getFurnitureGroupOfCategory(category_id));
  }, [open]);
  useEffect(() => {
    if (!categories.length) navigate("/category-edit");
  }, []);
  return !categories.length ? (
    <LoadingSpinner />
  ) : (
    <div className="dialog-edit">
      <AddAndEditDialog
        open={open}
        setOpen={setOpen}
        data={open === "edit" ? data : undefined}
        addFunc={postFurnitureGroup}
        updateFunc={updateFurnitureGroup}
        keys={keys}
        variant="group"
        foreignKeys={categories}
      />
      <ConfirmDialog
        open={open}
        setOpen={setOpen}
        data={data}
        deleteFunc={deleteFurnitureGroup}
      />
      <div className="dialog-container">
        {groups?.map((itemData, index) => (
          <Item
            onClick={() => navigate(`${itemData.id}/set-info-edit`)}
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
          <div className="dialog-item-2" onClick={() => setOpen("add")}>
            <AiOutlinePlus size={60} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
