import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

export default function Product() {
  const [values, setValues] = useState({
    name: undefined,
    color: undefined,
    height: undefined,
    width: undefined,
    depth: undefined,
    price: undefined,
    description: undefined,
  });
  const [images, setImages] = useState([]);
  const [openMessage, setOpenMessage] = useState(false);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 300000) {
        setOpenMessage(true);
        return;
      }
      let img = e.target.files[0];
      setImages((p) => [...p, { image: img, id: img.name }]);
    }
  };
  const removeImage = (id) => {
    setImages((p) => p.filter((i) => i.id !== id));
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openMessage}
        onClose={() => setOpenMessage(false)}
        message="Max image size must be 300KB"
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
            <div className="up-img">
              <img src="/image/okyo.jpg" alt="okyo" />
            </div>
            <div>
              <input
                onChange={onImageChange}
                type="file"
                className="custom-file-input"
              />
            </div>
            <div className="img-list">
              {images.map((i) => (
                <p key={i.id}>
                  <span>{i.image.name}</span>
                  <span onClick={() => removeImage(i.id)}>
                    <TiDeleteOutline fontSize={20} />
                  </span>
                </p>
              ))}
            </div>
            <button type="submit">Create</button>
          </div>
        </div>
      </div>
    </>
  );
}
