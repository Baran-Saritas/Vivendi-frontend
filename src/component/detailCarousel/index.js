import React, { useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setGlob } from "../../store/global/globalSlice";
const DetailCarousel = () => {
  const dispatch = useDispatch()
  const [test, setTest] = useState(false);
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
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
      <div onClick={() => dispatch(setGlob(["pd_active","https://www.berkemobilya.com.tr/media/catalog/product/cache/1/image/2000x1120/8cda07290adf5b61edee0d4066c5caef/w/h/whatsapp-image-2021-02-23-at-18.03_2.jpg"]))} className="detail-page-small-div" >
          <img
            style={{ width: "100%", margin: "0px 0px 0px 0px" }}
            src="https://www.berkemobilya.com.tr/media/catalog/product/cache/1/image/2000x1120/8cda07290adf5b61edee0d4066c5caef/w/h/whatsapp-image-2021-02-23-at-18.03_2.jpg"
            alt=""
          />
      </div>    
          <div  onClick={() => dispatch(setGlob(["pd_active","https://orixhome.com/wp-content/uploads/2020/06/urun-zen-2-koltuk-takimi-01.jpg"]))} className="detail-page-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="https://orixhome.com/wp-content/uploads/2020/06/urun-zen-2-koltuk-takimi-01.jpg"
            alt=""
          />
        </div>
        <div  onClick={() => dispatch(setGlob(["pd_active","https://orix.com.tr/wp-content/uploads/2019/07/urun-still-yemek-odasi-takimi-01.jpg"]))} className="detail-page-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="https://orix.com.tr/wp-content/uploads/2019/07/urun-still-yemek-odasi-takimi-01.jpg"
            alt=""
          />
        </div>     
        <div  onClick={() => dispatch(setGlob(["pd_active","https://orix.com.tr/wp-content/uploads/2019/07/urun-still-yemek-odasi-takimi-02.jpg"]))} className="detail-page-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="https://orix.com.tr/wp-content/uploads/2019/07/urun-still-yemek-odasi-takimi-02.jpg"
            alt=""
          />
        </div>      
        <div  onClick={() => dispatch(setGlob(["pd_active","https://diamoss.com/wp-content/uploads/2021/02/urun-still-duvar-unitesi-01-2.jpg"]))} className="detail-page-small-div" style={{ padding: "10px" }}>
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px" }}
            src="https://diamoss.com/wp-content/uploads/2021/02/urun-still-duvar-unitesi-01-2.jpg"
            alt=""
          />
        </div>     
      </Slider>
    </div>
  );
};
export default DetailCarousel;
