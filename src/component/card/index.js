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
const CustomCard = () => {
  const [isHover, setIsHover] = useState(false);
  const [image,setImage] = useState(null);
  return (
    <motion.div
      variants={variant}
      initial="closed"
      whileHover="open"
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        position: "relative",
        height: "100%",
        width: "100%",
        overflow:"hidden"
      }}
    >
      <div className="card-img" style={{ height: "100%", width: "100%" }}>
        <img
        
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          animate={isHover ? { scale: 1.05 } : ""}
          style={{ height: "100%", width: "100%", zIndex: 3, borderRadius:"5px" }}
          src="https://orix.com.tr/wp-content/uploads/2019/07/urun-still-yemek-odasi-takimi-01.jpg"
          alt="sehpa"
        />
      </div>

      <IconComponent />

      <CardFooter isHover={isHover} />
    </motion.div>
  );
};

function CardFooter({ isHover }) {
  return (
    <div style={{ bottom: 0, width: "100%" }}>

<div style={{ width: "100%",padding:"10px 0px 0px 0px",display:"flex",columnGap:"10px",marginTop:"0px" }}>
            <div style={{ color: "inherit", textDecoration: "inherit", width: "32px", height: "32px",overflow:"hidden",borderRadius:"9999px"}}>
               <img style={{ width: "100%", height: "100%" }} src='https://enza.akinoncdn.com/cms/2022/03/22/b86cdc48-b95c-4857-920c-1ba5b495d981_size142x80_cropCenter.png' />
            </div>
            <div style={{ color: "inherit", textDecoration: "inherit", width: "32px", height: "32px",overflow:"hidden",borderRadius:"9999px"}}>
               <img style={{ width: "100%", height: "100%" }} src='https://enza.akinoncdn.com/cms/2022/03/22/c6304027-55db-4b09-801a-2a0b670bfa0d_size142x80_cropCenter.png' />
            </div>
            <div style={{ color: "inherit", textDecoration: "inherit", width: "32px", height: "32px",overflow:"hidden",borderRadius:"9999px"}}>
               <img style={{ width: "100%", height: "100%" }} src='https://enza.akinoncdn.com/products/2021/09/08/11647/62391539-1b07-4e42-919e-a509b08b9eec_size142x80_cropCenter.jpg' />
            </div>
            <div style={{ color: "inherit", textDecoration: "inherit", width: "32px", height: "32px",overflow:"hidden",borderRadius:"9999px"}}>
               <img style={{ width: "100%", height: "100%" }} src='https://enza.akinoncdn.com/products/2021/09/08/12498/4d525213-97d6-4a9a-bd8c-ede89c10a29f_size142x80_cropCenter.jpg' />
            </div>
          </div>
     <CText text="Misha Sitting Set" />
      <Typography
      component="div"
      variant="h6"
      sx={{
        fontWeight: "600",
        color: "#000000",
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
        padding: "5px 6px 1px 6px",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        borderRadius:"10%",
        margin: "5px",
        right: 0,
        backgroundColor: "white",
        boxShadow: "1px 1px 1px rgb(0 0 0 / 10%)",
        margin: "10px",
      }}
    >
      <div className="tooltip">
        <CgShoppingBag size={30} style={{ margin: "2px 2px 1px 2px" }} />
        <p className="tooltiptext">Add To Cart</p>
      </div>
      <div className="tooltip">
        <AiOutlineHeart size={31} style={{ margin: "0px 0px -2px 2px" }} />
        <p className="tooltiptext">Add To Favorites</p>
      </div>
    </motion.div>
  );
};

function CText({ text }) {
  return (
    <Typography
      component="div"
      variant="h6"
      sx={{
        fontWeight: "600",
        color: "#000000",
        margin: "10px 0px 0px 0px",
      }}
    >
      {text}
    </Typography>
  );
}

export default CustomCard;
