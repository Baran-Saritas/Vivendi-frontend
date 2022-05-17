import React, { useEffect, useRef, useState } from "react";
import CategoryCarousel from "../mainCarousel";
import CustomCarousel from "../carousel";
import DetailCarousel from "../detailCarousel";
import { useDispatch, useSelector } from "react-redux";
import { setGlob } from "../../store/global/globalSlice";

const ZoomProduct = ({ furnitures }) => {
  const dispatch = useDispatch();
  const [images,setImages] = useState([]);
  const { pd_active } = useSelector((state) => state.global);

  useEffect(() => {
 
    if(furnitures?.images !== undefined){
      setImages(furnitures.images);
      dispatch(setGlob(["pd_active",furnitures?.images[0]?.imageSource]));
    }
  }, [furnitures]);

  return (
    <div >
      <div
        className="img-detail-side"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div
          className="img-div-detail"
          style={{ width: "93%", height: "450px", overflow: "hidden" }}
        >
          
          <img
            style={{ maxWidth: "100%" }}
            src={
               pd_active
            }
            alt=""
          />
        </div>
      </div>

      <div className="DetailCarousel-div">
        <div className="DCarousel-div">
          {images.length > 0 ?<DetailCarousel images={images} />:null}
          
        </div>
      </div>
    </div>
  );
};

export default ZoomProduct;
