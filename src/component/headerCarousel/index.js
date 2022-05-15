import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import Hcard from "../hcard";
import { useDispatch, useSelector } from "react-redux";
import { getFurnitureSetTop5 } from "../../store/furnitureSetInfo/furnitureSetInfoSlice";

const HeaderSetCarousel = ({ speed, autoplaySpeed }) => {
  const dispatch = useDispatch();
  const { setIdValue } = useSelector((state) => state.global);
  const { setInfosOnHover } = useSelector((state) => state.setInfo);
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

  useEffect(() => {
    console.log(setInfosOnHover);
  }, [setInfosOnHover]);
  useEffect(() => {
    dispatch(getFurnitureSetTop5(setIdValue));
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {setInfosOnHover?.map((value) => (
          <div className="header-main-carousel">
            <Hcard  value = {value}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default HeaderSetCarousel;
