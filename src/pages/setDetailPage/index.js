import React, { useEffect, useState } from "react";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import Divider from "@mui/material/Divider";
import ZoomProduct from "../../component/hoverZoomProductsMenu";
import { useParams } from "react-router-dom";
import FurnitureDetailCard from "../../component/furnitureDetailCard";
import { product_api, set_info_api } from "../../utilrs/axiosInterceptors";
import { money } from "../../utilrs/commons";
import moment from "moment";

const SetDetailPage = () => {
  const { set_id } = useParams();
  const [set, setSet] = useState(undefined);
  const [days, setDays] = useState(null);
  const [activeImageUp, setActiveImageUp] = useState();

  useEffect(() => {
    if (set_id) {
      product_api
        .get("/set/" + set_id)
        .then((res) => {
          setSet(res.data);
          if (res.data.coupon && res.data.coupon.discount) {
            let days = moment(res.data.coupon.endDate).diff(moment(), "days");
            setDays(days);
          }
          setActiveImageUp(res.data.images[0].imageSource);
        })
        .catch((err) => console.log(err));
    }
  }, [set_id]);

  const discount = () => {
    if (days > 0) {
      return (
        <span
          style={{
            gridArea: "2 / 2",
          }}
        >
          {money(set.price - set.price * (set.coupon.discount / 100))}
        </span>
      );
    }
    return null;
  };

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
              <p className="product-up-right-code"><span style={{fontWeight:"500",fontSize:"17px"}}>Product Code </span> : {set.id}</p>
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
              <p className="product-up-right-price">
                
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "repeat(2, 1fr)",
                  }}
                >
                  <span
                    style={
                      days > 0
                        ? {
                            gridArea: "2 / 1",
                          }
                        : {}
                    }
                  >
                    Price :
                  </span>
                  <span
                    style={
                      days > 0
                        ? {
                            textDecoration: "line-through",
                            color: "red",
                            gridArea: "1 / 2",
                          }
                        : {}
                    }
                  >
                   $ {money(set.price)}
                  </span>
                  {discount()}
                </div>
              </p>

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
            <p className="product-down-description-title">Description</p>
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
