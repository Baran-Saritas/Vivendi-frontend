import React, { useEffect, useState } from "react";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import Divider from "@mui/material/Divider";
import ZoomProduct from "../../component/hoverZoomProductsMenu";
import { useParams } from "react-router-dom";
import FurnitureDetailCard from "../../component/furnitureDetailCard";
import { set_info_api } from "../../utilrs/axiosInterceptors";
import { money } from "../../utilrs/commons";

const SetDetailPage = () => {
  const { set_id } = useParams();
  const [set, setSet] = useState(undefined);
  const [activeImageUp, setActiveImageUp] = useState();

  useEffect(() => {
    if (set_id) {
      set_info_api
        .get("/" + set_id)
        .then((res) => {
          setSet(res.data);
          setActiveImageUp(res.data.images[0].imageSource);
        })
        .catch((err) => console.log(err));
    }
  }, [set_id]);

  const handleMouseEnter = (image) => {
    setActiveImageUp(image.imageSource);
  };
  return (
    <div
      style={{ backgroundColor: "#f2f2f2 !important", position: "relative" }}
    >
      {!set ? (
        <Backdrop
          sx={{
            position: "absolute",
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={!Boolean(set)}
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
                furniture={set}
              />
            </div>
            <div className="product-up-right">
              <p className="product-up-right-name">{set.name}</p>
              <p className="product-up-right-code">Product Code: {set.id}</p>
              <p className="product-up-right-price">
                Price : ${money(set.price)}
              </p>
              <div className="product-up-right-colors">
                {set.images.map((image, i) => (
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
            <p className="product-down-description">{set.description}</p>
            <Divider className="product-down-divider" variant="inset" />
            <div className="product-down-card">
              {set.furnitures.map((f, i) => (
                <FurnitureDetailCard key={i} furniture={f} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default SetDetailPage;
