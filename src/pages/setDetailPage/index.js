import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import CustomCarousel from "../../component/carousel";
import { Button, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import SetDetailCard from "../../component/setdetailcard";
import ZoomProduct from "../../component/hoverZoomProductsMenu";
import { padding } from "@mui/system";
import { useParams } from "react-router-dom";
import { getFurnitureById } from "../../store/furniture/furnitureSlice";
import SetImageTable from "../../component/setImages";
import { getFurnitureSetById } from "../../store/furnitureSetInfo/furnitureSetInfoSlice";

const SetDetailPage = () => {
  const { set_id } = useParams();
  const { setInfosOnHover } = useSelector((state) => state.setInfo);
  const { furnitures } = useSelector((state) => state.furniture);
  const [addFavorites, setaddFavorites] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("sets :",setInfosOnHover);
  }, [setInfosOnHover]);

  useEffect(() => {
    if (set_id) { 
      dispatch(getFurnitureSetById(set_id));
    }
  }, [set_id]);
  return (
    <div style={{ backgroundColor: "#f2f2f2 !important" }}>
      <div style={{ display: "flex", padding: "30px 10px 10px 0px" }}>
        <div
          style={{
            width: "68%",
            height: "auto",
            padding: "0",
          }}
        >
           <SetImageTable set ={setInfosOnHover.images} />
        </div>

        <Box
          sx={{
            width: "30%",
            padding: "40px 0px 0px 20px",
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
            {setInfosOnHover.setInfoName}
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
            Product Code: {setInfosOnHover.categoryId}
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
             $ {setInfosOnHover.price}
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
            {setInfosOnHover?.images?.map((values) => {
              return (
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    overflow: "hidden",
                    borderRadius: "50%",
                    backgroundColor: values.color,
                  }}
                />
              );
            })}
          </div>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "15% 0px 0px 10px",
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
                marginLeft: "15%",
              }}
            >
            </Box>
          </Box>

        </Box>
      </div>

      <Box
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
          {setInfosOnHover.setInfoName}
        </Typography>
        <Divider
          sx={{ color: "black" }}
          style={{ width: "90%", marginBottom: "30px" }}
          variant="inset"
        />
        <Box
          sx={{
            width: "70%",
          }}
        >
          <SetDetailCard />
          <SetDetailCard />
          <SetDetailCard />
        </Box>
      </Box>
    </div>
  );
};
export default SetDetailPage;
