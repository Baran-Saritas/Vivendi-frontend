import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import SetDetailCard from "../setdetailcard";
import NewProductCard from "../newProductCard/index";
const NewProductCarousel = ({ speed, autoplaySpeed,furnitures }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "new-prod",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    swipeToSlide: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: autoplaySpeed || 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

  };


  return (
    <div>
      <Slider {...settings}>
        {
          [...furnitures]?.reverse().map((value,i) =>(
        <div key={i} className="newProduct-main-carousel" >
        <NewProductCard value={value} />
      </div>
          ))
        }
      </Slider>
    </div>
  );
};
export default NewProductCarousel;
