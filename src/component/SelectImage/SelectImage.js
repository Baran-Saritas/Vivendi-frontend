import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ImageListItem from "./ImageListItem";

function SelectImage({ images, setImages, deleteImage }) {
  const [openMessage, setOpenMessage] = useState(false);
  const [previewImage, setPreviewImage] = useState(images?.[0]?.imageSource);
  const dispatch = useDispatch();
  // eger disardan resim kaldirmak istiyorsak bu fonksiyonu oraya yerlestirip sonra da buraya prop olarak gecirmek lazim
  const removeImage = (name) => {
    if (images.length <= 1) {
      setOpenMessage("You have to select one image!");
      return;
    }
    setImages((p) => {
      let filteredImage = p.filter((i) => {
        if (i.name === name && i.id) {
          dispatch(deleteImage(i.id));
        }
        return i.name !== name;
      });
      setPreviewImage(filteredImage[0].getImageSource);
      return filteredImage;
    });
  };
  const onImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 3000000) {
        setOpenMessage("Max image size must be 300KB");
        return;
      }
      let file = e.target.files[0];
      if (images.filter((i) => i.name === file.name).length) {
        return;
      }
      let img = await getBase64(file);
      setImages((p) => [...p, { imageSource: img, name: file.name }]);
      setPreviewImage(undefined);
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
        open={Boolean(openMessage)}
        onClose={() => setOpenMessage(false)}
        message={openMessage}
      />
      <div className="up-img">
        <img
          src={
            previewImage ||
            (images.length > 0
              ? images[images.length - 1].imageSource
              : "/image/okyo.jpg")
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
            setPreviewImage={setPreviewImage}
            removeImage={removeImage}
            setImages={setImages}
            key={i.name}
            item={i}
          />
        ))}
      </div>
    </>
  );
}

export default SelectImage;
