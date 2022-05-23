import React, { useEffect, useState } from "react";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import Divider from "@mui/material/Divider";
import ZoomProduct from "../../component/hoverZoomProductsMenu";
import { useParams } from "react-router-dom";
import FurnitureDetailCard from "../../component/furnitureDetailCard";
import { furniture_api } from "../../utilrs/axiosInterceptors";
import { money } from "../../utilrs/commons";

const DetailPage = () => {
  const { product_id } = useParams();
  const [furniture, setFurniture] = useState(undefined);
  const [activeImageUp, setActiveImageUp] = useState();

  useEffect(() => {
    if (product_id) {
      furniture_api
        .get("/" + product_id)
        .then((res) => {
          setFurniture(res.data);
          setActiveImageUp(res.data.images[0].imageSource);
        })
        .catch((err) => console.log(err));
    }
  }, [product_id]);

  const handleMouseEnter = (image) => {
    setActiveImageUp(image.imageSource);
  };
  return (
    <div
      style={{ backgroundColor: "#f2f2f2 !important", position: "relative" }}
    >
      {!furniture ? (
        <Backdrop
          sx={{
            position: "absolute",
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={!Boolean(furniture)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <div className="product-up">
            <div className="product-up-left">
              <ZoomProduct
                activeImage={activeImageUp}
                setActiveImage={setActiveImageUp}
                furniture={furniture}
              />
            </div>
            <div className="product-up-right">
              <p className="product-up-right-name">{furniture.name}</p>
              <p className="product-up-right-code">
                Product Code: {furniture.id}
              </p>
              <p className="product-up-right-price">
                Price : ${money(furniture.price)}
              </p>
              <div className="product-up-right-colors">
                {furniture.images.map((image, i) => (
                  <div
                    className="pur-colors-item"
                    style={{
                      backgroundColor: image.color,
                    }}
                    key={i}
                    onMouseEnter={() => handleMouseEnter(image)}
                  />
                ))}
              </div>
              {
                //<div >
                //  <IconButton size="large">
                //   <AiOutlineMinus />
                //  </IconButton>
                //  <h3>0</h3>
                //  <IconButton size="large">
                //    <AiOutlinePlus />
                //  </IconButton>
                //</div>
              }
              <Button style={{ padding: "18px 30px" }} variant="outlined">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="product-down">
            <p className="product-down-description">{furniture.description}</p>
            <Divider className="product-down-divider" variant="inset" />
            <div className="product-down-card">
              <FurnitureDetailCard furniture={furniture} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default DetailPage;
