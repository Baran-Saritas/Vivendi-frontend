import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Sign from "../../pages/user/index";
import HeaderShoppingCart from "../shoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import HeaderSetCarousel from "../headerCarousel";
import { Box, Drawer, FormControl, OutlinedInput } from "@mui/material";
import HamburgerList from "../hamburgerMenu/hamburgerList";
import { getHeaderAndData } from "../../store/global/globalSlice";

const CustomHeader = () => {
  const navigate = useNavigate();
  const { headerFurnitureData, headerSetData, categories } = useSelector(
    (state) => state.global
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isSelect, setIsSelect] = useState(0);
  const [state, setState] = React.useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const toggleDrawer = (open) => {
    setState(open);
  };
  useEffect(() => {
    dispatch(getHeaderAndData());
  }, []);

  return (
    <motion.div className="header">
      <Sign open={open} setOpen={setOpen} />
      <div className="header-top">
        <div className="header-logo">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
            src="/logo_dark.png"
            alt="icon"
          />
        </div>
        <div className="header-search" tabIndex="0">
          <div className="res-con" ref={ref}>
            <Box sx={{ width: "100%" }} noValidate autoComplete="off">
              <FormControl sx={{ width: "100%" }}>
                <OutlinedInput
                  sx={{ padding: "2px 0px" }}
                  size="small"
                  placeholder="Search..."
                  value={search}
                  onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                  }}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      navigate("/search-results?name=" + search);
                    }
                  }}
                />
              </FormControl>
            </Box>
            {/*
            <input
              value={search}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  navigate("/search-results?name=" + search);
                }
              }}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
                e.currentTarget.focus();
              }}
            />
            <div className="btn-con">
              <button>Search</button>
            </div>
            */}
            {/* 
            <SearchResultNew
              filterData={filterData}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
            />
          */}
          </div>
        </div>
        <div className="header-util">
          <p onClick={() => setOpen(true)}>Sign In</p>
          <p>
            <HeaderShoppingCart />
          </p>
        </div>
      </div>
      <div className="header-mid" onMouseLeave={() => setIsSelect(0)}>
        <div className="hamburger-menu">
          <div style={{ marginLeft: "10px" }} className="dialog-item-2">
            {state === true ? (
              <IoMdClose
                size={45}
                onClick={() => {
                  setState(false);
                }}
              />
            ) : (
              <IoIosMenu size={50} onClick={() => toggleDrawer(true)} />
            )}
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
              className="hamburger-list-width"
              PaperProps={{
                sx: { width: "100%" },
              }}
              sx={{ width: 400 }}
              role="presentation"
            >
              {/* setIsSelect={setIsSelect} */}
              <HamburgerList setState={setState} />
            </Box>
          </Drawer>
        </div>

        <nav className="large-menu">
          {categories.map((category, i) => (
            <div
              key={category.id}
              onClick={() => {
                navigate(`/products/${category.id}/${category.name}`);
              }}
              onMouseEnter={() => setIsSelect(i + 1)}
            >
              {category.name}
            </div>
          ))}
        </nav>
        {!!isSelect && (
          <div className="nav-pane">
            <div className="nav-pane-left">
              {headerFurnitureData?.[isSelect]?.map((furniture, i) => (
                <div
                  key={i}
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
                {headerSetData?.[isSelect]?.map((set, i) => (
                  <HeaderSetCarousel
                    key={i}
                    set={set}
                    speed={2500}
                    autoplaySpeed={6000}
                  />
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
