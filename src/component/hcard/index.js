import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hcard = ({value}) => {

  const navigate = useNavigate();
  return (
      <div className="h-card-body" onClick={() => navigate(`/products/setDetail/${value.id}`)} >
        <div className="h-card-img">
          <img style={{width:"100%"}} src="https://orixhome.com/wp-content/uploads/2020/06/urun-zen-2-koltuk-takimi-01.jpg" alt="" />
        </div>
        <div className="h-card-info" > <p> <strong> deneme </strong></p></div>
      </div>

  );
};
export default Hcard;
