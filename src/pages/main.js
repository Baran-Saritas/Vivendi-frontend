import React from "react";
import CustomCard from "../component/card";
import Hcard from "../component/hcard";
import CategoryCarousel from "../component/mainCarousel";
import CustomCarousel from "../component/carousel";
import { getCircularProgressUtilityClass } from "@mui/material";

export default function Main() {
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
  return (

    <div className="main">
      <div className="categoryCarousel-div">
        <div className="Carousel-div">
          <CategoryCarousel />
        </div>
      </div>
      <div
        className="b-carousel-div"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div className="b-carousel-side-div" style={{ width: "90%",borderRadius:"10px" }}>
          <CustomCarousel />
        </div>
      </div>
      <div className="img-con">
        {items.map((item, i) => (
          <div className={setSpan(i)}>
            <CustomCard/>
          </div>
        ))}
      </div>
    </div>
  );
}
let items = [
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
];

function Main2() {
  return (
    <div className="main">
      {/*
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
        */}
    </div>
  );
}
