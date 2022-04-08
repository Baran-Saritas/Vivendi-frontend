import React, { useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
const CategoryCarousel = () => {
  const [test, setTest] = useState(false);
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 5,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="test">
      <Slider {...settings}>
        <div className="categories-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/sehpa.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "500",
              color: "#000",
            }}
          >
            SEATING GROUPS 1
          </Typography>
        </div>
        <div className="categories-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/sehpa.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            SEATING GROUPS 2
          </Typography>
        </div>
        <div className="categories-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/sehpa.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            SEATING GROUPS
          </Typography>
        </div>
        <div className="categories-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/sehpa.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            SEATING GROUPS
          </Typography>
        </div>
        <div className="categories-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/sehpa.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            SEATING GROUPS
          </Typography>
        </div>
        <div className="categories-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/sehpa.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            SEATING GROUPS
          </Typography>
        </div>
        <div className="categories-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/sehpa.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            SEATING GROUPS
          </Typography>
        </div>
        <div className="categories-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/sehpa.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            SEATING GROUPS
          </Typography>
        </div>
        <div className="categories-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="image/sehpa.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            SEATING GROUPS
          </Typography>
        </div>
      </Slider>
    </div>
  );
};
export default CategoryCarousel;
