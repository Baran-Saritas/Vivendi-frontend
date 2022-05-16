import React, { useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hcard = ({ set }) => {
  const navigate = useNavigate();

  return (
    <div
      className="h-card-body"
      onClick={() => navigate(`/products/setDetail/${set.id}`)}
    >
      <div className="h-card-img">
        <img
          style={{ width: "100%" }}
          src={set?.images[0].imageSource}
          alt=""
        />
      </div>
      <div className="h-card-info">
        {" "}
        <p>
          {" "}
          <strong> deneme </strong>
        </p>
      </div>
    </div>
  );
};
export default Hcard;
