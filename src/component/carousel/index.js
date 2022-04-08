import React, { useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";

const CustomCarousel = () => {
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
    speed: 5000,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="categories-main-carousel" >
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/aston-yatak-odasi.jpg"
            alt="test"
          />
        </div>
        <div className="categories-main-carousel" >
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="https://www.berkemobilya.com.tr/media/catalog/product/cache/1/image/2000x1120/8cda07290adf5b61edee0d4066c5caef/w/h/whatsapp-image-2021-02-23-at-18.03_2.jpg"
            alt=""
          />
        </div>
        <div className="categories-main-carousel" >
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/01/12/1137/Hyatt-Centric-Gran-Via-Madrid-P026-Fenix-Suite.jpg/Hyatt-Centric-Gran-Via-Madrid-P026-Fenix-Suite.16x9.jpg?imwidth=1280"
            alt=""
          />
        </div>

      </Slider>
    </div>
  );
};
export default CustomCarousel;
