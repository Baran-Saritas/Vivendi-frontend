import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import ImageListItem from "./ImageListItem";

function SelectImage({ images, setImages }) {
  const [openMessage, setOpenMessage] = useState(false);
  // eger disardan resim kaldirmak istiyorsak bu fonksiyonu oraya yerlestirip sonra da buraya prop olarak gecirmek lazim
  const removeImage = (id) => {
    setImages((p) => p.filter((i) => i.id !== id));
  };
  const onImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 300000) {
        setOpenMessage(true);
        return;
      }
      let file = e.target.files[0];
      let img = await getBase64(file);
      setImages((p) => [...p, { imageSource: img, id: file.name }]);
    }
  };

  const getBase64 = (file) =>
    new Promise(function (resolve, reject) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject("Error: ", error);
    });
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openMessage}
        onClose={() => setOpenMessage(false)}
        message={"Max image size must be 300KB"}
      />
      <div className="up-img">
        <img
          src={
            images.length > 0
              ? images[images.length - 1].imageSource
              : "/image/okyo.jpg"
          }
          alt="okyo"
        />
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
          <ImageListItem
            removeImage={removeImage}
            setImages={setImages}
            key={i.id}
            item={i}
          />
        ))}
      </div>
    </>
  );
}

export default SelectImage;
