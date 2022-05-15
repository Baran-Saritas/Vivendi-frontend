import { useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import CustomCarousel from "../carousel";
import { motion } from "framer-motion";
import SearchResult from "./SearchResult";
import Sign from "../../pages/user/index";
import HeaderShoppingCart from "../shoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getFurnitureCategory } from "../../store/furnitureCategory/furnitureCategorySlice";
import {
  getFurniture,
  getFurnitureByCategoryId,
  getFurnitureTop5,
  getFurnitureByCategoryIdOnHover,
} from "../../store/furniture/furnitureSlice";
import { setId } from "../../store/global/globalSlice";
import { useNavigate } from "react-router-dom";
import {
  getFurnitureSetByCategoryId,
  getFurnitureSetByCategoryIdOnHover,
  getFurnitureSetTop5,
} from "../../store/furnitureSetInfo/furnitureSetInfoSlice";
import HeaderSetCarousel from "../headerCarousel";

const CustomHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setIdValue } = useSelector((state) => state.global);
  const { categories } = useSelector((state) => state.category);
  const { furnitureOnHover } = useSelector((state) => state.furniture);
  const { setInfosOnHover } = useSelector((state) => state.setInfo);
  const ref = useRef(null);
  const [search, setSearch] = useState("");
  const [isSelect, setIsSelect] = useState(0);
  const [flag, setFlag] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSelect != 0) {
      dispatch(getFurnitureTop5(isSelect));
      dispatch(getFurnitureSetTop5(isSelect));
      dispatch(setId({ value: isSelect }));
    }
  }, [isSelect]);

  useEffect(() => {
    console.log(setInfosOnHover);
  }, [setInfosOnHover]);

  useEffect(() => {
    console.log(" adsf", setIdValue);
  }, [setIdValue]);

  useEffect(() => {
    dispatch(getFurnitureCategory());
  }, []);

  return (
    <motion.div className="header">
      <Sign open={open} setOpen={setOpen} />
      <div className="header-top">
        <div className="header-logo">
          <img src="/logo_dark.png" alt="icon" />
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
        <nav>
          {categories.map((value) => (
            <div
              onClick={() => {
                navigate(`/products/${value.id}`);
              }}
              onMouseEnter={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsSelect(value.id);
              }}
            >
              {value.categoryName}
            </div>
          ))}
        </nav>
        {!!isSelect && (
          <div className="nav-pane">
            <div className="nav-pane-left">
              {furnitureOnHover?.map((furniture) => (
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
                <HeaderSetCarousel
                  speed={2500}
                  autoplaySpeed={6000}
                />
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
