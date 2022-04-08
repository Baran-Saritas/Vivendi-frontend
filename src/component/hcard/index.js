import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const Hcard = () => {
  return (
    <a href="">
      <div className="h-card-body">
        <div className="h-card-img">
          <img style={{width:"100%"}} src="https://orixhome.com/wp-content/uploads/2020/07/aston-yatak-odasi.jpg" alt="" />
        </div>
        <div className="h-card-info" > <p> <strong> Seating Groups </strong></p></div>
      </div>
    </a>
  );
};
export default Hcard;

/*
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
import { motion } from "framer-motion"
const variant = {
  init: {position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", opacity: 0.3, scale: 2.8},
  hover: {opacity: 1, x: 15},
  leave: {opacity: .3},
  transition: { duration: 1}
}
const Hcard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{duration: .3}}
      variants={{
        hidden: { opacity: 0},
        visible: {opacity: 1}
      }}
    style={{display:'flex',width:"78%",textAlign:'center'}}>

        
        <div style={{width:"70%"}}>
            <img style={{width:"100%"}} src="https://berrakmobilya.com/wp-content/uploads/2021/03/oturma-gruplari-berrak.jpg" alt="" />

        </div>

        <div style={{backgroundImage: `url("image/sehpa.JPG")` , width:"30%", position: "relative",backgroundSize:"cover"}}>
            <h1 style={{color:"white",marginTop:"50px"}}>Yatak Odaları</h1>
            <motion.div style={{color: "white", cursor: "pointer"}} variants={variant} initial="init" transition="transition" animate="leave" whileHover="hover">
            <BsArrowRightCircle />
            </motion.div>
        </div>
    </motion.div>
  )
}
export default Hcard*/
