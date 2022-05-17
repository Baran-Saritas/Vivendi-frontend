import React, { useEffect, useRef,useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import {AiOutlineColumnWidth,AiOutlineColumnHeight} from 'react-icons/ai'
import { toIncreaseProductCount, toReduceProductCount } from "../../store/productCart/productCartSlice";
import { setGlob } from "../../store/global/globalSlice";

const FurnitureDetailCard = ({furnitures}) => {
  const dispatch = useDispatch();
  const { pd_active } = useSelector((state) => state.global);
  const theme = useTheme();
  useEffect(() => {
 
    if(furnitures?.images !== undefined){
    dispatch(setGlob(["pd_active",furnitures?.images[0]?.imageSource]));
    }
  }, [furnitures]);
  return (
    <Card
    className="FurnitureDetailCard"
    sx={{
      display: "flex",
      padding: "20px",
      justifyContent: "space-between",
      marginBottom: "10px",
    }}
  >
    <div className="FurnitureDetailCardLeft" style={{ width: "55%",height:"300px" }}>
    <img
            style={{width: "100%"}}
            src={
               pd_active
            }
            alt=""
          />
    </div>


    <Box
    className="FurnitureDetailCardRight"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "45%",
        padding: "10px",
      }}
    >
      <Typography
        component="div"
        variant="h4"
        sx={{
          fontWeight: "500",
          color: "#444",
          margin: "15px 0px 0px 10px",
        }}
      >
        {furnitures.name}
      </Typography>

      <div
        style={{
          width: "100%",
          padding: "0px 10px",
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
                />
              );
            })}


      </div>

      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          margin: "50px 0px 0px 10px",
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            marginLeft: "0px",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontWeight: "500",
              color: "#242433",
            }}
          >
            W
          </Typography>{" "}
          <Typography
            component="div"
            variant="h6"
            sx={{
              fontWeight: "500",
              color: "#444",
              margin: "0px 0px 0px 4px",
            }}
          >
            {furnitures.width}mm
          </Typography>
        </Box>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            marginLeft: "25px",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontWeight: "500",
              color: "#242433",
            }}
          >
            H
          </Typography>
          <Typography
            component="div"
            variant="h6"
            sx={{
              fontWeight: "500",
              color: "#444",
              margin: "0px 0px 0px 4px",
            }}
          >
            {furnitures.height}mm
          </Typography>
        </Box>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            marginLeft: "25px",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontWeight: "500",
              color: "#242433",
            }}
          >
            D
          </Typography>
          <Typography
            component="div"
            variant="h6"
            sx={{
              fontWeight: "500",
              color: "#444",
              margin: "0px 0px 0px 4px",
            }}
          >
            {furnitures.depth}mm
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          margin: "40px 0px 0px 10px",
        }}
      >
        <Typography
          component="div"
          variant="h4 "
          sx={{
            fontFamily:
              "New Roman,Times,serif",
            fontWeight: "500",
            color: "#242433",
            margin: "0px 0px 10px 0px",
          }}
        >
          £ {furnitures.price}
        </Typography>
      </Box>
    </Box>
  </Card>
  );
}
export default FurnitureDetailCard