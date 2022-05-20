import React, { useEffect, useRef, useState } from "react";
import CategoryCarousel from "../mainCarousel";
import CustomCarousel from "../carousel";
import ReactImageZoom from "react-image-zoom";
import DetailCarousel from "../detailCarousel";
import { useDispatch, useSelector } from "react-redux";
import { setGlob } from "../../store/global/globalSlice";
import Zoom from "react-img-zoom";

const ZoomProduct = ({ furnitures }) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const { pd_active } = useSelector((state) => state.global);

  const props = {
    width: 1000,
    height: 450,
    zoomPosition: "original",
    zoomWidth: 1000,
    img: `${pd_active}`,
  };

  useEffect(() => {
    if (furnitures?.images !== undefined) {
      setImages(furnitures.images);
      dispatch(setGlob(["pd_active", furnitures?.images[0]?.imageSource]));
    }
  }, [furnitures]);

  return (
    <div>
      <div
        className="img-detail-side"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div
          className="img-div-detail"
          style={{
            width: "100%",
            height: "450px",
            overflow: "hidden",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img style={{ maxWidth: "90%",height:"100%", objectFit:"contain" }} src={pd_active} alt="" />
        </div>
      </div>

      <div className="DetailCarousel-div">
        <div className="DCarousel-div">
          {images.length > 0 ? <DetailCarousel images={images} /> : null}
        </div>
      </div>
    </div>
  );
};

export default ZoomProduct;
