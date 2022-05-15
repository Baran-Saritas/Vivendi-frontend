import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const Hcard = ({value}) => {
  return (
    <a href="">
      <div className="h-card-body">
        <div className="h-card-img">
          asdfafa
          <img style={{width:"100%"}} src={value.images[0].imageSource} alt="" />
        </div>
        <div className="h-card-info" > <p> <strong> {value.setInfoName} </strong></p></div>
      </div>
    </a>
  );
};
export default Hcard;
