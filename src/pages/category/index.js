import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from "@mui/material";
import CategoryItem from "../../component/category/CategoryItem";
import AddAndEditDialog from "../../component/category/AddAndEditDialog";
export default function Category() {
  
  const [edit, setEdit] = React.useState("init");
  const [type,setType] = useState("");
  const [data, setData] = useState({ imageSource: "", name: "" });
  return (
    <div className="category-edit">
            <AddAndEditDialog
        open={edit}
        setOpen={setEdit}
        data={data}
        setData={setData}
        textType={type}
      />
      <div className="category-container"  >

        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <Tooltip
          title={<span style={{ fontSize: 14, padding: 2 }}>Add</span>}
          arrow
          placement="bottom"
          disableInteractive
        >
          <div className="category-item-2" onClick={() => { setEdit(""); setType("Add")}}>
            <AiOutlinePlus size={60} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
