import { MenuItem, Select, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import {
  deleteImage,
  postFurniture,
  updateFurnitures,
} from "../../store/furniture/furnitureSlice";
import SelectImage from "../SelectImage/SelectImage";
export default function EditProductModal({ data, setIsOk, isOk }) {
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
    stock: undefined,
  });
  const [images, setImages] = useState([]);
  const [openMessage, setOpenMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    let tempData = {};
    if (data.name !== values.name) {
      tempData.name = values.name;
    }
    if (data.height !== values.height) {
      tempData.height = values.height;
    }
    if (data.width !== values.width) {
      tempData.width = values.width;
    }
    if (data.depth !== values.depth) {
      tempData.depth = values.depth;
    }
    if (data.price !== values.price) {
      tempData.price = values.price;
    }
    if (data.stock !== values.stock) {
      tempData.stock = values.stock;
    }
    if (data.categoryId !== values.categoryId) {
      tempData.categoryId = values.categoryId;
    }
    if (data.description !== values.description) {
      tempData.description = values.description;
    }
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
    if (!values.stock || !parseInt(values.stock)) {
      setMessageText("Please fill stock field!");
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

    let editImages = [];
    images.forEach((i) => {
      let res = data.images.find((j) => j.name === i.name);
      if (!res) editImages.push(i);
    });
    if (editImages.length) {
      tempData.images = editImages;
    }
    let newData = [];
    images.forEach((i) => newData.push(JSON.parse(JSON.stringify(i))));
    let imgName = "";
    newData.forEach((i) => {
      if (!i?.color) {
        imgName = i.name;
      }
      delete i.id;
    });
    if (imgName) {
      setMessageText("Please select one color for " + imgName);
      setOpenMessage(true);
      return;
    }
    if (tempData.price) {
      tempData.price = parseFloat(tempData.price);
    }
    //tempData = { ...tempData, images: editImages };
    tempData.id = data.id;
    dispatch(updateFurnitures(tempData));
    setImages([]);
    setValues({
      name: "",
      height: "",
      width: "",
      depth: "",
      price: "",
      description: "",
      categoryId: "",
      stock: "",
    });
    // reload();
  };
  useEffect(() => {
    if (isOk) {
      handleClick();
      setIsOk(false);
    }
  }, [isOk]);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getFurnitureCategory());
    }
    if (data) {
      setValues({
        name: data.name,
        height: data.height,
        width: data.width,
        depth: data.depth,
        price: data.price,
        description: data.description,
        categoryId: data.categoryId,
        stock: data.stock,
      });
      setImages(data.images);
    }
  }, []);
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
              <label htmlFor="p-stock">Stock</label>
              <input
                type="text"
                id="p-stock"
                name="stock"
                value={values.stock}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product-field">
              <label htmlFor="p-categoryId">Category</label>
              <Select
                labelId="simple-select-label"
                id="p-categoryId"
                defaultValue={data.categoryId}
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
            <SelectImage
              deleteImage={deleteImage}
              images={images}
              setImages={setImages}
            />
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
