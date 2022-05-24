import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  IconButton,
  Popover,
  Typography,
  MenuItem,
  Menu,
  Box,
  Badge,
} from "@mui/material";
import { CgShoppingBag } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import { width } from "@mui/system";
import { makeStyles } from "@mui/styles";
import ShoppingCartProduct from "../shoppingCartProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProductCount } from "../../store/productCart/productCartSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    width: "900px",
    height: "600px",
    borderRadius: 15,
  },
  notRoot: {
    width: "900px",
    height: "510px",
    borderRadius: 15,
  },
  a: {},
});
const SearchResultNew = ({ containerRef, search, anchorEl, setAnchorEl }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const classes = useStyles();
  const navigate = useNavigate();
  const [cartNull, setCartNull] = useState(false);
  const { productList, shoppingCartProduct, totalPrice } = useSelector(
    (state) => state.productCart
  );

  return (
    <>
      {/* <Badge badgeContent={shoppingCartProduct.totalCount} color="primary">
        <CgShoppingBag
          size={28}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        />
      </Badge> */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        PaperProps={{
          className: !productList.length == 0 ? classes.root : classes.notRoot,
        }}
        sx={{ borderRadius: 8 }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="search-all-result">
          <motion.div
            ref={ref}
            initial="closed"
            className="search-result-container"
          >
            <h2 className="result">Products</h2>
            <div className="search-result">
              <div className="pin_container">
                <div>
                  <div data-title="Baza" className="search-card">
                    <img src="/image/aston-yatak-odasi.jpg" alt="" />
                  </div>
                  <div data-title="Baza" className="search-card">
                    <img src="/image/aston-yatak-odasi.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <div data-title="Baza" className="search-card">
                    <img src="/image/aston-yatak-odasi.jpg" alt="" />
                  </div>
                  <div data-title="Baza" className="search-card">
                    <img src="/image/aston-yatak-odasi.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <div data-title="BazaBazaBaza" className="search-card">
                    <img src="/image/aston-yatak-odasi.jpg" alt="" />
                  </div>
                  <div data-title="Baza" className="search-card">
                    <img src="/image/aston-yatak-odasi.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Menu>
    </>
  );
};
export default SearchResultNew;
