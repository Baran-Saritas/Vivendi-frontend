import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
const variant = {
  open: {},
  closed: {},
};
const item = {
  open: {
    transformOrigin: "right",
    transform: "rotateY(0deg)",
  },
  closed: {
    transformOrigin: "right",
    transform: "rotateY(90deg)",
  },
};
const DetailCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      variants={variant}
      initial="closed"
      whileHover="open"
      style={{
        backgroundColor: "#FCFFFF",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        position: "relative",
        height: "auto",
        width: "100%",
      }}
    >
      <div style={{ height: "100%", width: "100%" }}>
        <a href="">
          <img
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            animate={isHover ? { scale: 1.05 } : ""}
            style={{ height: "100%", width: "100%", zIndex: 3 }}
            src="https://orix.com.tr/wp-content/uploads/2019/07/urun-still-yemek-odasi-takimi-01.jpg"
            alt="sehpa"
          />
        </a>
      </div>
      <IconComponent />
      <CardFooter isHover={isHover} />
    </motion.div>
  );
};

function CardFooter({ isHover }) {
  return (
    <div style={{ bottom: 0, width: "100%" }}>
      <p>
        <CText text="Misha Chair" />
      </p>
      <Typography
      component="div"
      variant="h6"
      sx={{
        fontWeight: "600",
        color: "#000000",
        margin: "0px 0px 0px 10px",
      }}
    >
          46.456 $
        </Typography>
    </div>
  );
}
const IconComponent = () => {
  return (
    <motion.div
      variants={item}
      style={{
        padding: "5px 6px",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        margin: "5px",
        right: 0,
        borderRadius: "6px",
        backgroundColor: "white",
        boxShadow: "1px 1px 1px rgb(0 0 0 / 10%)",
        margin: "10px",
        justifyContent: "center",
      }}
    >
      <div class="tooltip">
        <CgShoppingBag size={23} style={{ margin: "2px 2px 10px 2px" }} />
        <p class="tooltiptext">Add To Cart</p>
      </div>

      <div class="tooltip">
        <AiOutlineHeart size={24} style={{ margin: "2px 2px 2px 2px" }} />
        <p class="tooltiptext">Add To Favorites</p>
      </div>
    </motion.div>
  );
};

function CText({ text }) {
  return (
    <Typography
      component="div"
      variant="h5"
      sx={{
        fontWeight: "600",
        color: "#000000",
        margin: "0px 0px 0px 10px",
      }}
    >
      {text}
    </Typography>
  );
}

export default DetailCard;
