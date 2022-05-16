import { MenuItem, Select, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import { postFurniture } from "../../store/furniture/furnitureSlice";
import SelectImage from "../SelectImage/SelectImage";

export default function Product() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const [values, setValues] = useState({
    name: undefined,
    height: undefined,
    width: undefined,
    depth: undefined,
    price: undefined,
    description: undefined,
    categoryId: undefined,
  });
  const [images, setImages] = useState([]);
  const [openMessage, setOpenMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!values.name) {
      setMessageText("Please fill name field!");
      setOpenMessage(true);
      return;
    }
    if (!values.height || !Number(values.height)) {
      setMessageText("Please fill height field!");
      setOpenMessage(true);
    }
    if (!values.width || !Number(values.width)) {
      setMessageText("Please fill width field!");
      setOpenMessage(true);
      return;
    }
    if (!values.depth || !Number(values.depth)) {
      setMessageText("Please fill depth field!");
      setOpenMessage(true);
      return;
    }
    if (!values.price || !Number(values.price)) {
      setMessageText("Please fill price field!");
      setOpenMessage(true);
      return;
    }
    if (!values.categoryId) {
      setMessageText("Please select a category!");
      setOpenMessage(true);
      return;
    }
    if (!values.description) {
      setMessageText("Please fill description field!");
      setOpenMessage(true);
      return;
    }
    if (images.length < 1) {
      setMessageText("Please select one image!");
      setOpenMessage(true);
      return;
    }
    let newData = [];
    images.forEach((i) => newData.push(JSON.parse(JSON.stringify(i))));
    newData.forEach((i) => {
      if (!i?.color) {
        i.color = "#ffffff";
      }
      delete i.id;
    });
    let data = { ...values, images: newData, price: parseFloat(values.price) };
    dispatch(postFurniture(data));
  };
  useEffect(() => {
    if(categories.length === 0){
      dispatch(getFurnitureCategory());
    }
  },[])
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openMessage}
        onClose={() => setOpenMessage(false)}
        message={messageText}
      />
      <div className="add-product-page">
        <div className="add-product-con">
          <div className="add-product-left">
            <div className="product-field">
              <label htmlFor="p-name">Name </label>
              <input
                type="text"
                id="p-name"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product-field">
              <label htmlFor="p-width">Width </label>
              <input
                type="text"
                id="p-width"
                name="width"
                value={values.width}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product-field">
              <label htmlFor="p-height">Height </label>
              <input
                type="text"
                id="p-height"
                name="height"
                value={values.height}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product-field">
              <label htmlFor="p-depth">Depth</label>
              <input
                type="text"
                id="p-depth"
                name="depth"
                value={values.depth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product-field">
              <label htmlFor="p-price">Price</label>
              <input
                type="text"
                id="p-price"
                name="price"
                value={values.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product-field">
              <label htmlFor="p-categoryId">Category</label>
              <Select
                labelId="simple-select-label"
                id="p-categoryId"
                value={
                  categories.filter((i) => i.id === values.categoryId)
                    ?.categoryName
                }
                onChange={(e) =>
                  setValues({ ...values, categoryId: e.target.value })
                }
              >
                {categories.map((i) => (
                  <MenuItem value={i.id} key={i.id}>
                    {i.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="product-field">
              <label htmlFor="p-desc">Description</label>
              <textarea
                rows="3"
                type="text"
                id="p-desc"
                value={values.description}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
          </div>
          <div className="add-product-right">
            <SelectImage images={images} setImages={setImages} />
            <button type="submit" onClick={handleClick}>
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}



/*

    campaignName:"undefined",
    categoryId:"undefined",
    title:"undefined",
    description:"undefined",
    endDate:"undefined",

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <TimePicker value={selectedDate} onChange={handleDateChange} />
      <DateTimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>

*/