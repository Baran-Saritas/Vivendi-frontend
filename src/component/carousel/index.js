import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { product_api } from "../../utilrs/axiosInterceptors";
import { useNavigate } from "react-router-dom";

const CustomCarousel = ({ speed, autoplaySpeed }) => {
  const [coupons, setCoupons] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    product_api
      .get("/coupon/best")
      .then((res) => {
        console.log("EE : ", res.data);
        setCoupons(res.data);
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  }, []);
  if (!Object.keys(coupons).length) return null;
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow"
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      Previous
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" 
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      Next
    </button>
  );
  const settings = {
    className: "center",
    infinite: true,
    dots: true,
    centerPadding: "30px",
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: autoplaySpeed || 4000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="main-campaign-carousel">
      <Slider {...settings}>
        {coupons?.furnitures.map((i) => (
          <div
            onClick={() => {
              navigate(`/products/detail/${i.id}`);
            }}
            key={i.id}
            className="categories-main-carousel"
          >
            <img
              style={{
                width: "100%",
                margin: "0px 5px 0px 0px",
                objectFit: "cover",
              }}
              src={i.coupon.imageSource}
              alt="test"
            />
          </div>
        ))}
        {coupons?.sets.map((i) => (
          <div
            onClick={() => {
              navigate(`/products/setDetail/${i.id}`);
            }}
            key={i.id}
            className="categories-main-carousel"
          >
            <img
              style={{
                width: "100%",
                margin: "0px 5px 0px 0px",
                objectFit: "cover",
              }}
              src={i.coupon.imageSource}
              alt="test"
            />
          </div>
        ))}
        {/*
        <div className="categories-main-carousel">
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px", objectFit: "cover" }}
            src="https://orixhome.com/wp-content/uploads/2021/06/capella4177-kopya.jpg"
            alt="test"
          />
        </div>
        <div className="categories-main-carousel">
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px", objectFit: "cover" }}
            src="https://orix.com.tr/wp-content/uploads/2019/07/urun-still-yemek-odasi-takimi-01.jpg"
            alt=""
          />
        </div>
        <div className="categories-main-carousel">
          <img
            style={{ width: "100%", margin: "0px 5px 0px 0px", objectFit: "cover" }}
            src="https://orixhome.com/wp-content/uploads/2020/06/urun-zen-2-koltuk-takimi-01.jpg"
            alt=""
          />
        </div>
          */}
      </Slider>
    </div>
  );
};
export default CustomCarousel;
