import React, { useEffect, useRef,useState } from "react";
import { Anchor, Box, Header, Menu, TextInput } from "grommet";
import { BiSearchAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/user/userSlice";
import { getFurnitures,getFurnitureById } from "../../store/furniture/furnitureSlice";
import { getFurnitureSetInfoById,getFurnitureSetInfo } from "../../store/furnitureSetInfo/furnitureSetInfoSlice";
import { getFurnitureGroup,getFurnitureGroupById } from "../../store/furnitureGroup/furnitureGroupSlice";
import { Button,  IconButton , Popover,Typography,MenuItem  } from '@mui/material';
import HeaderShoppingCart from "../shoppingCart";

const CustomHeader = () => {
  

  const dispatch = useDispatch()
  const ref = useRef(null)
  useEffect(() => {
    if(ref.current?.style)
    ref.current.style.zIndex = 99999
  }, [])
  return (
    <Header
      style={{ backgroundColor: "white"}}
      background="light-4"
      align="center"
      justify="evenly"
      pad="medium"
      height="xsmall"
    >
     <img style={{width:"150px"}} src="icon.png" alt="" />
      <Box direction="row" align="center" gap="small">
        <Menu
          label="SEATING SETS"
          dropAlign={{ left: "left", top: "bottom" }}
          style={{ borderRadius: 10 }}
          icon={false}
          className="h-title"
          items={[
            { label: "First Action", onClick: () => {} },
            { label: "Second Action", onClick: () => {} },
          ]}
        />
        <Menu
          label="SEATS"
          onClick={() => dispatch(getFurnitureGroup())}
          dropAlign={{ left: "left", top: "bottom" }}
          style={{ borderRadius: 10 }}
          icon={false}
          className="h-title"
          items={[
            { label: "First Action", onClick: () => {} },
            { label: "Second Action", onClick: () => {} },
          ]}
        />
        <Menu
          label="TABLES"
          
          onClick={() => dispatch(getFurnitureGroupById())}
          dropAlign={{ left: "left", top: "bottom" }}
          style={{ borderRadius: 10 }}
          icon={false}
          className="h-title"
          items={[
            { label: "First Action", onClick: () => {} },
            { label: "Second Action", onClick: () => {} },
          ]}
        />
        <Menu
          label="CHAIRS"
          dropAlign={{ left: "left", top: "bottom" }}
          style={{ borderRadius: 10 }}
          icon={false}
          className="h-title"
          items={[
            { label: "First Action", onClick: () => {} },
            { label: "Second Action", onClick: () => {} },
          ]}
        />
        <Menu
          label="CABINETS"
          dropAlign={{ left: "left", top: "bottom" }}
          icon={false}
          className="h-title"
          items={[
            { label: "First Action", onClick: () => {} },
            { label: "Second Action", onClick: () => {} },
          ]}
        />
      </Box>
      
      <Box style={{ width: 280 }}>
        <TextInput
          className="test"
          suggestions={["test"]}
          size="xsmall"
          icon={<BiSearchAlt />}
        />
      </Box>

     <HeaderShoppingCart/>

    </Header>
  );
}

export default CustomHeader;