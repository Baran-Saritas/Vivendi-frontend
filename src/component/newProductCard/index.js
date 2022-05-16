import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineColumnWidth, AiOutlineColumnHeight } from "react-icons/ai";
import {
  toIncreaseProductCount,
  toReduceProductCount,
} from "../../store/productCart/productCartSlice";

const NewProductCard = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <div style={{ width: "55%" }}>
        <img
          style={{ width: "90%" }}
          src="https://media.gq-magazine.co.uk/photos/5fa3edfea6440a8c1c83079c/master/w_1920%2Cc_limit/FURNITURE511_1.jpg"
        />
      </div>

      <Box
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
          Furniture Name
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
          <div
            style={{
              color: "inherit",
              textDecoration: "inherit",
              width: "32px",
              height: "32px",
              overflow: "hidden",
              borderRadius: "9999px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://enza.akinoncdn.com/cms/2022/03/22/b86cdc48-b95c-4857-920c-1ba5b495d981_size142x80_cropCenter.png"
            />
          </div>
          <div
            style={{
              color: "inherit",
              textDecoration: "inherit",
              width: "32px",
              height: "32px",
              overflow: "hidden",
              borderRadius: "9999px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://enza.akinoncdn.com/cms/2022/03/22/c6304027-55db-4b09-801a-2a0b670bfa0d_size142x80_cropCenter.png"
            />
          </div>
          <div
            style={{
              color: "inherit",
              textDecoration: "inherit",
              width: "32px",
              height: "32px",
              overflow: "hidden",
              borderRadius: "9999px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://enza.akinoncdn.com/products/2021/09/08/11647/62391539-1b07-4e42-919e-a509b08b9eec_size142x80_cropCenter.jpg"
            />
          </div>
          <div
            style={{
              color: "inherit",
              textDecoration: "inherit",
              width: "32px",
              height: "32px",
              overflow: "hidden",
              borderRadius: "9999px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://enza.akinoncdn.com/products/2021/09/08/12498/4d525213-97d6-4a9a-bd8c-ede89c10a29f_size142x80_cropCenter.jpg"
            />
          </div>
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
              350mm
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
              600mm
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
              400mm
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
            £ 495
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
export default NewProductCard;
