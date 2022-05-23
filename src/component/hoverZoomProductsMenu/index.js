import React, { useEffect, useRef, useState } from "react";
import DetailCarousel from "../detailCarousel";
import { useDispatch } from "react-redux";
import { setGlob } from "../../store/global/globalSlice";
import { Zoom } from "swiper";

const ZoomProduct = ({ furniture, activeImage, setActiveImage }) => {
  const [images, setImages] = useState([]);
  const ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    setImages(furniture.images);
  }, [furniture]);

  useEffect(() => {
    let a = ref.current;
    function onZoom(e) {
      const x = e.offsetX - e.target.offsetLeft;
      const y = e.offsetY - e.target.offsetTop;
      imgRef.current.style.transition = "none";
      imgRef.current.style.transformOrigin = `${x}px ${y}px`;
      imgRef.current.style.transform =
        window.innerWidth < 900 ? "scale(1.3)" : "scale(1.8)";
    }
    function offZoom(e) {
      let res = e.target.getElementsByTagName("img")[0];
      res.style.transformOrigin = `center center`;
      res.style.transition = "all .2s ease";
      res.style.transform = "scale(1)";
    }
    a.addEventListener("mousemove", onZoom);
    a.addEventListener("mouseover", onZoom);
    a.addEventListener("mouseleave", offZoom);
    return () => {
      a.removeEventListener("mousemove", onZoom);
      a.removeEventListener("mouseover", onZoom);
      a.removeEventListener("mouseleave", offZoom);
    };
  }, [ref, imgRef]);
  return (
    <>
      <div className="img-detail-side" ref={ref}>
        <img ref={imgRef} src={activeImage} alt={furniture.name} />
      </div>

      <div className="DetailCarousel-div">
        <div className="DCarousel-div">
          {images.length > 1 ? (
            <DetailCarousel setActiveImage={setActiveImage} images={images} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ZoomProduct;
