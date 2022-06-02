import React, { useEffect } from "react";
import CustomCard from "../component/card";
import Hcard from "../component/hcard";
import CategoryCarousel from "../component/mainCarousel";
import CustomCarousel from "../component/carousel";
import {
  Divider,
  getCircularProgressUtilityClass,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SetDetailCard from "../component/setdetailcard";
import NewProductCarousel from "../component/newProduct";
import { useNavigate } from "react-router-dom";
import {
  getFurniture,
  getFurnitureByDesc,
} from "../store/furniture/furnitureSlice";
import NewSetCarousel from "../component/newSet";
import { getFurnitureSetByAsc } from "../store/furnitureSetInfo/furnitureSetInfoSlice";

//furnitures
const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { furnitures } = useSelector((state) => state.furniture);
  const { setInfos } = useSelector((state) => state.setInfo);
  let arr = ["item-span-3", "item-span-4", "item-span-5", "item-span-6"].sort(
    () => Math.random() - 0.5
  );
  function setSpan(index) {
    if (index % 4 === 0) {
      arr = ["item-span-3", "item-span-4", "item-span-5", "item-span-6"];
      arr = arr.sort(() => Math.random() - 0.5);
    }
    let res = arr[arr.length - 1];
    arr.pop();
    return res;
  }

  useEffect(() => {
    dispatch(getFurnitureByDesc());
    dispatch(getFurnitureSetByAsc());
  }, []);
  return (
    <div className="main">
      <div
        className="b-carousel-div"
        style={{
          width: "100%",
          display: "flex",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        <div
          className="b-carousel-side-div"
          style={{ width: "90%", borderRadius: "10px" }}
        >
          <CustomCarousel />
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%" }}>
          <h3 style={{ fontWeight: "500" }}>Campaigns</h3>
        </div>
      </div>
      <div className="categoryCarousel-div">
        <div className="Carousel-div">
          <CategoryCarousel furnitures={furnitures} setInfos={setInfos} />
        </div>
      </div>

      <div
        className="main-carts"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",

          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            columnGap: "20px",
          }}
        >
          <div style={{ overflow: "hidden", width: "500px" }}>
            <a

              href="/products/d1d78226-9ced-4fe6-9293-8d5b6160855a/Sofas"
            >
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,dpr_2,f_auto,q_auto:good,w_350/v1/mws-critical/d8179eb5-65ed-4bfd-9a6a-1e8bc0c9e0e9_Homepage_wK11_Morland_1280x1536.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Sofas </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div style={{ overflow: "hidden", width: "500px" }}>
            <a
              href="/products/2831e014-fe03-4b9a-8ef7-edff01393db6/Beds"
            >
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src="./image/bedroom_img.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Beds </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div style={{ overflow: "hidden", width: "500px" }}>
            <a

              href="/products/66588660-6ead-4874-b9e2-6cfc1f4485a4/Chair"
            >
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src="./image/Diningroom.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Chair </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            padding: "30px",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontFamily:
                "MADE Coachella,ui-serif,Georgia,Cambria,Times New Roman,Times,serif",
              fontWeight: "500",
              color: "#242433",
              margin: "15px 0px 10px 10px",
            }}
          >
            New Product
          </Typography>

          <Typography
            component="div"
            variant="h6"
            sx={{
              fontSize: "20px",
              fontFamily:
                "Mont,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              fontWeight: "100",
              color: "#242433",
              margin: "15px 0px 40px 10px",
            }}
          >
            Have you checked out our new product?
          </Typography>
          <Divider
            sx={{ color: "black" }}
            style={{ width: "90%", marginBottom: "20px" }}
            variant="inset"
          />
          <div
            className="new-products-card-main"
            style={{
              width: "70%",
              height: "100%",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            }}
          >
            <NewProductCarousel furnitures={furnitures} />
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",

          marginTop: "20px",
        }}
      >
        <div
          className="main-carts"
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            columnGap: "20px",
          }}
        >
          <div style={{ overflow: "hidden", width: "500px" }}>
            <a
              href="/products/16b8231c-fcf8-41cf-bb88-f64893c29e5e/Tables"
            >
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src="/image/table.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Tables </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div style={{ overflow: "hidden", width: "500px" }}>
            <a
              href="/products/5fd043d4-e2ac-494a-aa7f-b80baf2075b2/Bergere"
            >
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src="./image/bergere.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Bergere </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div style={{ overflow: "hidden", width: "500px" }}>
            <a
              href="/products/f40ce8fb-1f7f-40ba-a519-71b4b2e8d556/Lampshade"
            >
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src="./image/Lampshade.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Lampshade </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            padding: "30px",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontFamily:
                "MADE Coachella,ui-serif,Georgia,Cambria,Times New Roman,Times,serif",
              fontWeight: "500",
              color: "#242433",
              margin: "15px 0px 10px 10px",
            }}
          >
            New Set's
          </Typography>

          <Typography
            component="div"
            variant="h6"
            sx={{
              fontSize: "20px",
              fontFamily:
                "Mont,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              fontWeight: "100",
              color: "#242433",
              margin: "15px 0px 40px 10px",
            }}
          >
            Have you checked out our new set's?
          </Typography>
          <Divider
            sx={{ color: "black" }}
            style={{ width: "90%", marginBottom: "20px" }}
            variant="inset"
          />
          <div
            className="new-products-card-main"
            style={{
              width: "70%",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            }}
          >
            <NewSetCarousel setInfos={setInfos} />
          </div>
        </div>
      </div>

      <div
        className="main-carts"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",

          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            columnGap: "20px",
          }}
        >
          <div style={{ overflow: "hidden", width: "500px" }}>
            <a
              href="/products/8b46bc6a-8c84-4676-8589-ca3eaa11968b/Mirror"
            >
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src="/image/mirror.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Mirror </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div style={{ overflow: "hidden", width: "500px" }}>
            <a
              href="/products/076cc82f-f51b-4d0c-b89e-5f966d0890ab/Tv-Units"
            >
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src="./image/unite.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> TV units </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div style={{ overflow: "hidden", width: "500px" }}>
            <a
              href="/products/9d2a6b3b-785c-4051-bdd3-d0c3b772e3ae/Console-Table"
            >
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src="./image/Console-Table.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Console Table </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* 
      <div className="img-con">
        {items.map((item, i) => (
          <div className={setSpan(i)}>
            <CustomCard />
          </div>
        ))}
        </div>  */}
    </div>
  );
}
export default Main;