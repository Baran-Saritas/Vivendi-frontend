import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { Button, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import SetDetailCard from "../../component/setdetailcard";
import ZoomProduct from "../../component/hoverZoomProductsMenu";
import { padding } from "@mui/system";
import { useParams } from "react-router-dom";
import { getFurnitureById } from "../../store/furniture/furnitureSlice";
import FurnitureDetailCard from "../../component/furnitureDetailCard";
import { setGlob } from "../../store/global/globalSlice";

const DetailPage = () => {
  const { product_id } = useParams();
  const { furnitures } = useSelector((state) => state.furniture);
  const [addFavorites, setaddFavorites] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(furnitures);
  }, [furnitures]);
  useEffect(() => {
    if (product_id) {
      dispatch(getFurnitureById(product_id));
    }
  }, [product_id]);
  return (
    <div style={{ backgroundColor: "#f2f2f2 !important" }}>
      <div style={{ display: "flex", padding: "30px 10px 10px 0px" }}>
        <div className="product-all-detail">
          <div
            className="detail-img"
            style={{
              width: "68%",
              padding: "0",
            }}
          >
            <ZoomProduct furnitures={furnitures} />
          </div>

          <div
            className="detail-product-right-side"
            style={{
              width: "30%",
              padding: "0px 0px 0px 20px",
              backgroundColor: "white",
            }}
          >
            <Typography
              component="div"
              variant="h4"
              sx={{
                fontSize: "2.25rem",
                lineHeight: "2.5rem",
                fontWeight: "100",
                color: "#444",
                margin: "5px 0px 0px 10px",
              }}
            >
              {furnitures.name}
            </Typography>

            <Typography
              component="div"
              variant="h7"
              sx={{
                fontWeight: "500",
                color: "#838383",
                margin: "10px 0px 0px 10px",
              }}
            >
              Product Code: {furnitures.id}
            </Typography>

            <Typography
              component="div"
              variant="h4"
              sx={{
                color: "#444",
                fontFamily: "Roboto arial sans-serif",
                margin: "10px 0px 0px 10px",
                fontSize: "2.25rem",
                lineHeight: "2.5rem",
                fontWeight: "100",
              }}
            >
              $ {furnitures.price}
            </Typography>

            <div
              style={{
                width: "100%",
                padding: "10px",
                display: "flex",
                columnGap: "10px",
                marginTop: "20px",
              }}
            >
              {furnitures?.images?.map((values) => {
                return (
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      overflow: "hidden",
                      borderRadius: "50%",
                      backgroundColor: values.color,
                    }}
                    onMouseEnter={() =>
                      dispatch(setGlob(["pd_active", values.imageSource]))
                    }
                  />
                );
              })}
            </div>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                margin: "5% 0px 0px 10px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: 1,
                  borderColor: "grey",
                  width: "165px",
                  height: "63px",
                  alignItems: "center",
                  borderRadius: 10,
                  justifyContent: "space-between",
                }}
              >
                <IconButton size="large">
                  {" "}
                  <AiOutlineMinus />{" "}
                </IconButton>
                <h3>0</h3>
                <IconButton size="large">
                  {" "}
                  <AiOutlinePlus />{" "}
                </IconButton>
              </Box>

              <Box
                sx={{
                  marginLeft: "10%",
                }}
              >
                <Button style={{ padding: "18px" }} variant="outlined">
                  {" "}
                  Add to Cart
                </Button>
                {/*
                addFavorites == true ? (
                  <AiFillHeart size={50} style={{ color: "red" }} onClick={() => setaddFavorites(!addFavorites)} />) : (
                  <AiOutlineHeart size={50} onClick={() => setaddFavorites(!addFavorites)} />)
                  */}
              </Box>
            </Box>

            {/*<Typography component="div" variant="h5" sx={{
            fontWeight: "100",
            color: "#444",
            margin: "20px 0px 0px 10px"
          }}>
            Stock Count: 0
          </Typography>  */}
          </div>
        </div>
      </div>

      <Box
        className=""
        sx={{
          display: "flex",
          padding: "30px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          component="div"
          variant="h4"
          sx={{
            fontWeight: "600",
            color: "#242433",
            margin: "15px 0px 20px 10px",
          }}
        >
          {furnitures.name}
        </Typography>
        <Typography
          component="div"
          variant="h4"
          sx={{
            fontWeight: "100",
            color: "#242433",
            margin: "15px 0px 40px 10px",
          }}
        >
          {furnitures.description}
        </Typography>
        <Divider
          sx={{ color: "black" }}
          style={{ width: "90%", marginBottom: "30px" }}
          variant="inset"
        />
        <Box
          className="detail-card-main"
          sx={{
            width: "70%",
          }}
        >
          <FurnitureDetailCard furnitures={furnitures} />
        </Box>
      </Box>
    </div>
  );
};
export default DetailPage;
