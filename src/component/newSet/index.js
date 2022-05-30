import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import SetDetailCard from "../setdetailcard";
import NewProductCard from "../newProductCard/index";
import NewSetCard from "../newSetCard";
const NewSetCarousel = ({ speed, autoplaySpeed, setInfos }) => {
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
    className: "center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: autoplaySpeed || 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {[...setInfos].map((value, i) => (
          <div key={i} className="newProduct-main-carousel">
            <NewSetCard value={value} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default NewSetCarousel;
