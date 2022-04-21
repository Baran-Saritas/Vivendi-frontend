import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from "@mui/material";
import Item from "../../component/category/Item";
import AddAndEditDialog from "../../component/category/AddAndEditDialog";
import ConfirmDialog from "../../component/category/ConfirmDialog";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import { useNavigate } from "react-router-dom";
import {
  deleteFurnitureSetInfo,
  getFurnitureSetInfoOfGroup,
  postFurnitureSetInfo,
  updateFurnitureSetInfo,
} from "../../store/furnitureSetInfo/furnitureSetInfoSlice";

export default function SetInfo() {
  const [open, setOpen] = React.useState("init");
  const [data, setData] = useState(null);
  const { setInfos } = useSelector((state) => state.setInfo);
  const { groups } = useSelector((state) => state.group);
  const keys = {
    imageSource: "imageUrl",
    name: "setInfoName",
    id: "groupId",
    price: "price",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { group_id } = useParams();
  useEffect(() => {
    dispatch(getFurnitureSetInfoOfGroup(group_id));
    if (open === "edit") {
      dispatch(getFurnitureCategory());
    }
  }, [open]);
  return (
    <div className="dialog-edit">
      <AddAndEditDialog
        open={open}
        setOpen={setOpen}
        data={open === "edit" ? data : undefined}
        addFunc={postFurnitureSetInfo}
        updateFunc={updateFurnitureSetInfo}
        keys={keys}
        variant="set-info"
        foreignKeys={groups}
      />
      <ConfirmDialog
        open={open}
        setOpen={setOpen}
        data={data}
        deleteFunc={deleteFurnitureSetInfo}
      />
      <div className="dialog-container">
        {setInfos?.map((itemData, index) => (
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
