import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hcard = ({ value }) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-card-body"
      onClick={() => navigate(`/products/setDetail/${value.id}`)}
    >
      <div className="h-card-img">
        <img
          style={{ width: "100%" }}
          src={value.images[0].imageSource}
          alt=""
        />
      </div>
      <div className="h-card-info">
        {" "}
        <p>
          {" "}
          <strong> {value.setInfoName} </strong>
        </p>
      </div>
    </div>
  );
};
export default Hcard;
