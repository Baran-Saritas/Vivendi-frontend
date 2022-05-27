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
import { SentimentVeryDissatisfiedOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewSetCard = ({ value }) => {
  const [activeImage, setActiveImage] = useState(value.images[0].imageSource);
  const navigate = useNavigate();
  return (
    <Card
      className="newFurnitureCard"
      sx={{
        display: "flex",
        padding: "20px",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        className="newFurnitureCardLeft"
        style={{ width: "55%", overflow: "hidden" }}
      >
        <img style={{ width: "90%" }} src={activeImage} alt="fur" />
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
          {value.name}
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
          {value?.images?.map((data, i) => {
            return (
              <div
                key={i}
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  width: "32px",
                  height: "32px",
                  overflow: "hidden",
                  borderRadius: "9999px",
                  backgroundColor: `${data.color}`,
                }}
                onMouseEnter={() => setActiveImage(data.imageSource)}
              ></div>
            );
          })}
        </div>

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            width: "70%",
            justifyContent: "space-between",
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
            £ {value.price}
          </Typography>
          <Button
            onClick={() => {
              navigate("/products/setDetail/" + value.id);
            }}
            variant="outlined"
          >
            View
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
export default NewSetCard;
