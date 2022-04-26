import React, { useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";

const CustomCarousel = ({ speed, autoplaySpeed }) => {
  const [test, setTest] = useState(false);
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
    speed: speed || 5000,
    autoplaySpeed: autoplaySpeed || 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="categories-main-carousel">
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/aston-yatak-odasi.jpg"
            alt="test"
          />
        </div>
        <div className="categories-main-carousel">
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="https://orix.com.tr/wp-content/uploads/2019/07/urun-still-yemek-odasi-takimi-01.jpg"
            alt=""
          />
        </div>
        <div className="categories-main-carousel">
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="https://orix.com.tr/wp-content/uploads/2019/07/urun-still-yemek-odasi-takimi-01.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};
export default CustomCarousel;
