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
  const [activeImage, setActiveImage] = useState(srcs[0].imageSource);
  const theme = useTheme();
  return (
    <Card
      className="newFurnitureCard"
      sx={{
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <div className="newFurnitureCardLeft" style={{ width: "55%" }}>
        <img style={{ width: "90%" }} src={activeImage} />
      </div>

      <Box
        className="newFurnitureCardRight"
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
            padding: "0px 0px 0px 10px",
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
            onMouseEnter={() => setActiveImage(srcs[0].imageSource)}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={srcs[0].color}
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
            onMouseEnter={() => setActiveImage(srcs[1].imageSource)}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={srcs[1].color}
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
            onMouseEnter={() => setActiveImage(srcs[2].imageSource)}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={srcs[2].color}
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
            onMouseEnter={() => setActiveImage(srcs[3].imageSource)}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={srcs[3].color}
            />
          </div>
        </div>

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            margin: "30px 0px 0px 10px",
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
              fontFamily: "New Roman,Times,serif",
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

let srcs = [
  {
    color:
      "https://enza.akinoncdn.com/products/2021/09/08/12498/4d525213-97d6-4a9a-bd8c-ede89c10a29f_size142x80_cropCenter.jpg",
    imageSource:
      "https://enza.akinoncdn.com/products/2021/11/17/22405/5e71b980-fa01-4f99-bd3a-abee4f88534d_size1684x950.jpg",
  },
  {
    color:
      "https://enza.akinoncdn.com/products/2021/09/08/12202/8598c41f-f0ba-49bd-88de-75497b2b1028_size142x80_cropCenter.jpg",
    imageSource:
      "https://enza.akinoncdn.com/products/2021/11/17/22315/27df44dc-1952-4132-b004-67919c796536_size1684x950.jpg",
  },
  {
    color:
      "https://enza.akinoncdn.com/products/2021/09/08/10973/c59b6e8d-2d12-4b66-95a8-57fd2bee849a_size142x80_cropCenter.jpg",
    imageSource:
      "https://enza.akinoncdn.com/products/2021/11/17/22311/caf9d9af-10eb-46a3-bc69-182e8c8448b8_size1684x950.jpg",
  },
  {
    color:
      "https://enza.akinoncdn.com/products/2021/09/08/10802/815faf2a-24e9-497e-9080-4fde116488bd_size142x80_cropCenter.jpg",
    imageSource:
      "https://enza.akinoncdn.com/products/2021/11/17/22310/10a68c03-b60d-4f5e-8aea-d1dd3af9b075_size1684x950.jpg",
  },
];
