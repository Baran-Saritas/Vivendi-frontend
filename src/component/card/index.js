import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/productCart/productCartSlice";
import { useNavigate } from "react-router-dom";
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
const CustomCard = ({ value }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [image, setImage] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  useEffect(() => {
    if (value.images.length) {
      setActiveImage(value.images[0].imageSource);
    }
  }, [value]);

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
        overflow: "hidden",
      }}
    >
      <div
        className="card-img"
        style={{ height: "350px", width: "100%", overflow: "hidden" }}
      >
        <img
          onClick={() => {
            navigate(`/products/detail/${value.id}`);
          }}
          animate={isHover ? { scale: 1.05 } : ""}
          style={{
            height: "100%",
            width: "100%",
            zIndex: 3,
            borderRadius: "5px",
            objectFit: "cover",
          }}
          src={activeImage}
          alt="sehpa"
        />
      </div>
      <IconComponent value={value} />
      <CardFooter setActiveImage={setActiveImage} value={value} />
    </motion.div>
  );
};

function CardFooter({ value, setActiveImage }) {
  return (
    <div style={{ bottom: 0, width: "100%" }}>
      <div
        style={{
          width: "100%",
          padding: "30px 0px 0px 0px",
          display: "flex",
          columnGap: "10px",
          marginTop: "0px",
        }}
      >
        {value?.images?.map((values,i) => {
          return (
            <div
            key={i}
              onMouseEnter={() => setActiveImage(values.imageSource)}
              style={{
                width: "32px",
                height: "32px",
                overflow: "hidden",
                borderRadius: "50%",
                backgroundColor: values.color,
              }}
            />
          );
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
const IconComponent = ({ value }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart({ item: value }));
  };
  return (
    <motion.div
      variants={item}
      style={{
        padding: "5px 6px 1px 6px",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10%",
        margin: "5px",
        right: 0,
        backgroundColor: "white",
        boxShadow: "1px 1px 1px rgb(0 0 0 / 10%)",
        margin: "10px",
      }}
    >
      <div className="tooltip">
        <CgShoppingBag
          onClick={handleClick}
          size={30}
          style={{ margin: "2px 2px 1px 2px" }}
        />
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
