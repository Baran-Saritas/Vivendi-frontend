import React, { useState, useEffect } from "react";
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

const useStyles = makeStyles({
  root: {
    width: "550px",
    borderRadius: 15,
    paddingBottom:"50px"
  },
  notRoot: {
    width: "550px",
    height: "330px",
    borderRadius: 15,
  },
  a: {},
});
const HeaderShoppingCart = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartNull, setCartNull] = useState(false);
  const { productList, shoppingCartProduct, totalPrice } = useSelector(
    (state) => state.productCart
  );
  return (
    <>
      <Badge badgeContent={shoppingCartProduct.totalCount} color="primary">
        <CgShoppingBag
          size={28}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        />
      </Badge>
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
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          sx={{
            display: "flex",
            verticalAlign: "baseline",
            justifyContent: "center",
            padding: "20px 40px 10px 35px",
            fontSize: 30,
            borderRadius: 8,
          }}
        >
          Shopping Cart
        </Box>
        <div style={{ textAlign: "center", opacity: "25%" }}>
          <hr style={{ width: "95%" }} />
        </div>
        {!productList.length == 0 ? (
          productList.map((item, i) => (
            <MenuItem key={i}>
              <ShoppingCartProduct item={item} key={i} />
            </MenuItem>
          ))
        ) : (
          <Box
            sx={{
              width: "95%",
              height: "100px",
              textAlign: "center",
              margin: "70px 0px 40px 0px",
            }}
          >
            <Typography
              style={{ color: "rgba(0,0,0,.6)", fontSize: 28 }}
              component="div"
            >
              Product Cart Empty!
            </Typography>
          </Box>
        )}
        <div style={{ textAlign: "center", opacity: "25%" }}>
          <hr style={{ width: "95%" }} />
        </div>
        {!productList.length == 0 && (
          <Box
            sx={{
              width: "100%",
              backgroundColor: "grey",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              "& : hover": {},
              "& button": {
                color: "green",
                fontSize: "18px",
              },
            }}
          >
            <Box
              sx={{
                width: "95%",
                height: "50px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "MADE Coachella,Cambria",
                  fontWeight: "100",
                  color: "#242433",
                  margin: "15px 0px 10px 10px",
                }}
                component="div"
                variant="h4"
              >
                Total Price: {totalPrice.price} $
              </Typography>
            </Box>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("/productCart");
                setAnchorEl(null);
              }}
              size="medium"
              sx={{
                width: "70%",
                margin: "10px 0px 0px 0px",
              }}
            >
              <Typography component="div" variant="subtitle1">
                Product Cart Confirm
              </Typography>
            </Button>
          </Box>
        )}
      </Menu>
    </>
  );
};
export default HeaderShoppingCart;
