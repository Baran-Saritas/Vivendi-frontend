import * as React from "react";
import CartTable from "../../component/cartTable";
import Divider from "@mui/material/Divider";
import { Box, Typography, Checkbox, Button, IconButton } from "@mui/material";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const ProductCart = () => {
  const { totalPrice } = useSelector((state) => state.productCart);
  return (
    <div>
      <Box
        className="product-cart"
        sx={{ flexDirection: "row", padding: "20px", display: "flex" }}
      >
        <Box className="cart-tables" sx={{ width: "65%" }}>
          <CartTable />
        </Box>
        <Box
          className="product-cart-window"
          sx={{
            width: "30%",
            padding: "40px 20px 10px 20px",
            margin: "0px 0px 0px 20px",
            height: "250px",
            backgroundColor: "white",
            boxShadow: "0 0 2px 1px rgb(110 110 110 / 30%)",
            borderRadius: "10px",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontWeight: "500",
              color: "#444",
              margin: "15px 0px 0px 10px",
            }}
          >
            Total Price: {totalPrice.price} $
          </Typography>

          <Divider sx={{ color: "black" }} style={{ width: "90%" }} />

          <Box>
            <Typography
              component="div"
              variant="h7"
              sx={{
                fontWeight: "500",
                color: "#444",
                display: "flex",
                alignItems: "center",
                margin: "10px 0px 0px 10px",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  width: "60%",
                }}
              >
                <Typography
                  component="div"
                  variant="h5"
                  sx={{
                    fontWeight: "500",
                    color: "#444",
                  }}
                >
                  Transfer
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "35%",
                }}
              >
                <Box
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    display: "flex",
                    height: "10px",
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      fontWeight: "500",
                      color: "#444",
                      fontSize: "16px",
                    }}
                  >
                    DELIVERY
                  </Typography>
                  <Checkbox
                    icon={<BsCircle size={15} />}
                    checkedIcon={<BsCircleFill size={15} />}
                  />
                </Box>
                <Box
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    display: "flex",
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      fontWeight: "500",
                      color: "#444",
                      fontSize: "16px",
                    }}
                  >
                    PICKUP
                  </Typography>
                  <Checkbox
                    icon={<BsCircle size={15} />}
                    checkedIcon={<BsCircleFill size={15} />}
                  />
                </Box>
              </Box>
            </Typography>
          </Box>

          <Divider sx={{ color: "black" }} style={{ width: "90%" }} />
          <Button
            variant="outlined"
            size="medium"
            sx={{
              width: "100%",
              margin: "40px 0px 0px 0px",
            }}
          >
            <Typography component="div" variant="subtitle1">
              Continue
            </Typography>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ProductCart;
