import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setGlob } from "../../store/global/globalSlice";
const DetailCarousel = ({ images }) => {
  const dispatch = useDispatch();
  const [test, setTest] = useState(false);
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    slidesToShow: images.length,
    swipeToSlide: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
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

  useEffect(() => {
    console.log("carousel", images);
  }, []);
  return (
    <div className="test">
      <Slider {...settings}>
        {images.map((value) => (
          <div
            onClick={() =>
              dispatch(
                setGlob([
                  "pd_active",
                  value.imageSource,
                ])
              )
            }
            className="detail-page-small-div"
          >
            <img
              style={{ width: "100%", margin: "0px 0px 0px 0px",objectFit:"cover"  }}
              src={value.imageSource}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default DetailCarousel;
