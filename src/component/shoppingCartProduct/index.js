import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {
  toIncreaseProductCount,
  toReduceProductCount,
} from "../../store/productCart/productCartSlice";

const ShoppingCartProduct = (prop) => {
  const [productCount, setProductCount] = useState(1);
  const theme = useTheme();
  const { item } = prop;
  const { productList } = useSelector((state) => state.productCart);
  const dispatch = useDispatch();
  return (
    <Card sx={{ display: "flex", padding: "20px", boxShadow: "none" }}>
      <img style={{ width: "40%" }} src={item.images[0].imageSource} />

      <Box sx={{ display: "flex", flexDirection: "row", disableRipple: true }}>
        <CardContent sx={{ flex: "1 0 auto", width: "200px" }}>
          <Typography component="div" variant="h6">
            {item.name}
          </Typography>
          <Typography component="div" variant="h7">
            Unit price: {item.price}$
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            marginLeft: "10px",
            justifyContent: "space-around",
          }}
        >
          <AiOutlinePlusCircle
            onClick={() => dispatch(toIncreaseProductCount({ id: item.id }))}
            size={30}
          />
          <Typography variant="h7" color="black" component="div">
            {item.count}
          </Typography>
          <AiOutlineMinusCircle
            onClick={() => dispatch(toReduceProductCount({ id: item.id }))}
            size={30}
          />
        </Box>
      </Box>
    </Card>
  );
};
export default ShoppingCartProduct;
