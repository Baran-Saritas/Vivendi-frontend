import React, { useEffect, useRef, useState } from "react";
import CategoryCarousel from "../mainCarousel";
import CustomCarousel from "../carousel";
import DetailCarousel from "../detailCarousel";
import { useSelector } from "react-redux";

const ZoomProduct = () => {
  const { pd_active }  = useSelector(state => state.global)
  useEffect(() => {});
  return (
    <div>
      <div
        className="xyz"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div className="asd" style={{ width: "93%", height:"500px",overflow:"hidden" }}>
          <img style={{maxWidth:"100%"}} src={pd_active} alt="" />
        </div>
      </div>

    <div className="DetailCarousel-div">
        <div className="DCarousel-div">  
          <DetailCarousel />
        </div>
      </div> 
    </div>
  );
};

export default ZoomProduct;
