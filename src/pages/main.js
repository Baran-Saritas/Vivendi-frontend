import React from "react";
import { Image, Box, Carousel } from "grommet";
import CustomCard from "../component/card";

import Hcard from "../component/hcard";
import CategoryCarousel from "../component/mainCarousel";
import CustomCarousel from "../component/carousel";
export default function Main() {
  return (
    <div>
            <div className="categoryCarousel-div">
        <div className="Carousel-div">
          <CategoryCarousel />
        </div>
      </div>
      <div
        className="b-carousel-div"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div className="b-carousel-side-div" style={{ width: "70%" }}>
          <CustomCarousel />
        </div>
      </div>


      <h1 style={{ textAlign: "center", margin: "50px 0 30px" }}>
        Best Sellers
      </h1>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          className="all-best-sellers"
          style={{
            width: "80%",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div
          className="category-divs"
          style={{
            width: "80%",
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <div className="asd" style={{ width: "50%", overflow: "hidden" }}>
            <Hcard />
          </div>
          <div className="asd" style={{ width: "50%", overflow: "hidden" }}>
            <Hcard />
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center", margin: "50px 0 30px" }}>
        Seller's Choices
      </h1>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          className="all-best-sellers"
          style={{
            width: "80%",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div
          className="category-divs"
          style={{
            width: "80%",
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <div className="asd" style={{ width: "50%", overflow: "hidden" }}>
            <Hcard />
          </div>
          <div className="asd" style={{ width: "50%", overflow: "hidden" }}>
            <Hcard />
          </div>
        </div>
      </div>
    </div>
  );
}
