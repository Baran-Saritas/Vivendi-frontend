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
const CustomCard = ({value}) => {
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
      <div className="card-img" style={{ height: "350px", width: "100%",overflow:"hidden" }}>
        <img
          animate={isHover ? { scale: 1.05 } : ""}
          style={{ height: "100%", width: "100%", zIndex: 3, borderRadius:"5px", objectFit: "cover"  }}
          src={value.images[0].imageSource}
          alt="sehpa"
        />
        
      </div>
      
      <IconComponent />

      <CardFooter value = {value}  />
    </motion.div>
  );
};

function CardFooter({value }) {
  return (
    <div style={{ bottom: 0, width: "100%" }}>

<div style={{ width: "100%",padding:"30px 0px 0px 0px",display:"flex",columnGap:"10px",marginTop:"0px" }}>
  {value.images.map((values) => {
    return(
      <div style={{ width: "32px", height: "32px",overflow:"hidden",borderRadius:"50%",backgroundColor: values.color}}/>
    )
  })}
 </div>
     <CText text={value.name} />
      <Typography
      component="div"
      variant="h6"
      sx={{
        fontWeight: "600",
        color: "#000000",
      }}
    >
         $ {value.price} 
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
