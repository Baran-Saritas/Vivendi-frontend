import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SearchResult from "./SearchResult";
import Sign from "../../pages/user/index";
import HeaderShoppingCart from "../shoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getHeaderData, setId } from "../../store/global/globalSlice";
import { useNavigate } from "react-router-dom";
import {IoIosMenu,IoMdClose} from "react-icons/io"
import HeaderSetCarousel from "../headerCarousel";
import { Box, Drawer } from "@mui/material";
import HamburgerList from "../hamburgerMenu/hamburgerList";

const CustomHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { headerFurnitureData } = useSelector((state) => state.global);
  const { headerSetData } = useSelector((state) => state.global);
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isSelect, setIsSelect] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => {
    setState(open);
  };
  useEffect(() => {
    dispatch(getHeaderData());
  }, []);

  return (
    <motion.div className="header">
      <Sign open={open} setOpen={setOpen} />
      <div className="header-top">
        <div className="header-logo">
          <img
            onClick={() => {
              navigate("/");
            }}
            src="/logo_dark.png"
            alt="icon"
          />
        </div>
        <div className="header-search" tabIndex="0">
          <div className="res-con" ref={ref}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={() => setIsFocus(true)}
            />
            <div className="btn-con">
              <button>Search</button>
            </div>
            {(search || isFocus) && (
              <SearchResult
                containerRef={ref}
                setIsFocus={setIsFocus}
                isFocus={isFocus}
              />
            )}
          </div>
        </div>
        <div className="header-util">
          <p onClick={() => setOpen(true)}>Sign In</p>
          <p>
            {" "}
            <HeaderShoppingCart />
          </p>
        </div>
      </div>
      <div className="header-mid" onMouseLeave={() => setIsSelect(0)}>

      <div className="hamburger-menu">
        <div  style={{marginLeft:"10px"}} className="dialog-item-2" onClick={() => toggleDrawer(true)}>
          {state ===true ?(<IoMdClose size={50}/>): (<IoIosMenu size={50}/>)}
        
        </div>
        <div className="furnitureDrawer"></div>
        <Drawer
          PaperProps={{
            paper: {
              width: 250,
            },
            sx: { width: "450px" },
          }}
          anchor={"left"}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            PaperProps={{
              sx: { width: "100%" },
            }}
            sx={{ width: 400 }}
            role="presentation"
          >
            {/* setIsSelect={setIsSelect} */}
            <HamburgerList  setState={setState} />
          </Box>
        </Drawer>
      </div>


        <nav className="large-menu">
          <div
            onClick={() => {
              navigate(`/products/c76f7cef-f05f-4142-8a80-da88be374b66`);
            }}
            onMouseEnter={() => setIsSelect(1)}
          >
            Deneme
          </div>
          <div
            onClick={() => {
              navigate(`/products/ca333a93-4630-4cd9-8176-2969887072c2`);
            }}
            onMouseEnter={() => setIsSelect(2)}
          >
            Sofas
          </div>
          <div
            onClick={() => {
              navigate(`/products/ea6b1aaf-65c0-4023-9248-cfa2ac8e3cbc`);
            }}
            onMouseEnter={() => setIsSelect(3)}
          >
            Beds
          </div>
          <div
            onClick={() => {
              navigate(`/products/a76ec128-c8be-4234-be0c-158518585153`);
            }}
            onMouseEnter={() => setIsSelect(4)}
          >
            Chair{" "}
          </div>
          <div
            onClick={() => {
              navigate(`/products/635e94eb-75ac-4933-a75c-07a21db3a319`);
            }}
            onMouseEnter={() => setIsSelect(5)}
          >
            Tables
          </div>
          <div
            onClick={() => {
              navigate(`/products/775f98ce-a2f2-4c9b-bd70-fcb99481af9a`);
            }}
            onMouseEnter={() => setIsSelect(6)}
          >
            Bergere
          </div>
          <div
            onClick={() => {
              navigate(`/products/888cce34-8ce8-4207-9628-be245d6930c0`);
            }}
            onMouseEnter={() => setIsSelect(7)}
          >
            Lampshade{" "}
          </div>
          <div
            onClick={() => {
              navigate(`/products/1161f244-93cb-4415-9940-d2ceb6ea3a7c`);
            }}
            onMouseEnter={() => setIsSelect(8)}
          >
            Mirror
          </div>
          <div
            onClick={() => {
              navigate(`/products/e557af58-0800-4ac6-8783-8ecc9f7cf337`);
            }}
            onMouseEnter={() => setIsSelect(9)}
          >
            Tv Units
          </div>
          <div
            onClick={() => {
              navigate(`/products/f48538c8-e405-4e5b-bea7-28d948aba48a`);
            }}
            onMouseEnter={() => setIsSelect(10)}
          >
            Console Table
          </div>
        </nav>
        {!!isSelect && (
          <div className="nav-pane">
            <div className="nav-pane-left">
              {headerFurnitureData?.[isSelect]?.map((furniture) => (
                <div
                  onClick={() => {
                    navigate(`/products/detail/${furniture.id}`);
                  }}
                  data-pane-item-title={furniture.name}
                  className="nav-pane-item"
                >
                  <img src={furniture.images[0].imageSource} alt="okyo" />
                </div>
              ))}
            </div>

            <div className="nav-pane-right">
              <div>
                {headerSetData?.[isSelect]?.map((set) => (
                  <HeaderSetCarousel set={set} speed={2500} autoplaySpeed={6000} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="header-bottom"></div>
    </motion.div>
  );
};

export default CustomHeader;
