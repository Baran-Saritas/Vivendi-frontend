import React from "react";
import Slider from "react-slick";

const DetailCarousel = ({ images, setActiveImage }) => {
  let condition = images.length < 2 ? 2 : images.length > 5 ? 5 : 3;
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    slidesToShow: condition,
    swipeToSlide: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: images.length > 5 ? 5 : 2,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images?.map((image, i) => (
        <div
          key={i}
          onClick={() => setActiveImage(image.imageSource)}
          className="detail-page-small-div"
        >
          <img src={image.imageSource} alt={image.color} />
        </div>
      ))}
    </Slider>
  );
};
export default DetailCarousel;
