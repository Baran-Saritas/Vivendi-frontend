import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import { money } from "../../utilrs/commons";

const FurnitureDetailCard = ({ furniture }) => {
  const [activeImage, setActiveImage] = useState();
  useEffect(() => {
    setActiveImage(furniture.images[0].imageSource);
  }, [furniture]);
  return (
    <Card
      className="product-detail-card"
      sx={{
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <div className="furniture-detail-card-left">
        <img src={activeImage} alt="product-card" />
      </div>
      <div className="furniture-detail-card-right">
        <p className="product-card-name">{furniture.name}</p>

        <div className="product-card-colors">
          {furniture.images.map((image, i) => {
            return (
              <div
                className="product-card-colors-item"
                onClick={() => setActiveImage(image.imageSource)}
                key={i}
                style={{
                  backgroundColor: image.color,
                }}
              />
            );
          })}
        </div>

        <div className="product-detail-card-prop">
          <p> W : {furniture.width}mm </p>
          <p> H : {furniture.height}mm </p>
          <p> D : {furniture.depth}mm </p>
        </div>
        <p className="product-detail-card-price">£ {money(furniture.price)}</p>
        <Button variant="outlined">ADD TO CART</Button>
      </div>
    </Card>
  );
};
export default FurnitureDetailCard;
