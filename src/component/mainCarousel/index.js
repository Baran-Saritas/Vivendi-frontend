import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import StoryDialog from "../storyDialog";
import { furniture_api, product_api } from "../../utilrs/axiosInterceptors";
const CategoryCarousel = ({ setInfos, furnitures }) => {
  const [open, setOpen] = useState("false");
  const [data, setData] = useState([]);
  const [chair, setChair] = useState([]);
  const [stories, setStories] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const groupBy = (arr, key) => {
    let result = arr.reduce(function (r, a) {
      r[a[key]] = r[a[key]] || [];
      r[a[key]].push(a);
      return r;
    }, Object.create(null));
    return result;
  };

  useEffect(() => {
    product_api
      .get("/coupon/best")
      .then((res) => {
        let fur = res.data.furnitures;
        let set = res.data.sets;
        let t1 = groupBy(fur, "categoryId");
        let t2 = groupBy(set, "categoryId");
        Object.keys(t1).forEach((i) => {
          if (t2[i]) {
            t1[i].push(...t2[i]);
          }
        });
        console.log(" III : ", Object.values(t1));
        setStories(Object.values(t1));
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  }, []);

  /*
  useEffect(() => {
    let arr = [];
    setInfos.forEach((i) => {
      if (i.categoryId === "a76ec128-c8be-4234-be0c-158518585153" && i.coupon)
        arr.push(i);
    });
    furnitures.forEach((i) => {
      if (i.categoryId === "a76ec128-c8be-4234-be0c-158518585153" && i.coupon)
        arr.push(i);
    });
    setChair(arr);
  }, [furnitures, setInfos]);
  */
  if (stories.length <= 0) return null;
  return (
    <div className="test">
      <StoryDialog data={data} open={open} setOpen={setOpen} />
      <Slider {...settings}>
        {stories.map((i, j) => (
          <div
            key={j}
            className="categories-small-div"
            onClick={() => {
              setOpen("open");
              setData(i);
            }}
            style={{ padding: "10px" }}
          >
            <img
              style={{
                width: "100%",
                height: "120px",
                margin: "0px 5px 0px 0px",
              }}
              src="https://www.normann-copenhagen.com/-/media/Product-Pictures-Podio/Normann-Copenhagen/Scala/Scala-Table-H75-cm/Scala-Table-H75-150-cm-Marble/604184/Scala-Table-H75-150-cm1.png?w=279&rev=d4aeb33d2e7b48d085b8a6b9b0eb6d2c"
              alt=""
            />
            <Typography
              component="div"
              sx={{
                textAlign: "center",
                letterSpacing: "0.02em",
                fontWeight: "500",
                color: "#000",
              }}
            >
              Tables
            </Typography>
          </div>
        ))}
        {/*
        <div
          className="categories-small-div"
          onClick={() => {
            setOpen("open");
          }}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://www.normann-copenhagen.com/-/media/Product-Pictures-Podio/Normann-Copenhagen/Scala/Scala-Table-H75-cm/Scala-Table-H75-150-cm-Marble/604184/Scala-Table-H75-150-cm1.png?w=279&rev=d4aeb33d2e7b48d085b8a6b9b0eb6d2c"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "500",
              color: "#000",
            }}
          >
            Tables
          </Typography>
        </div>
        <div
          className="categories-small-div"
          onClick={() => {
            setOpen("open");
            setData(chair);
          }}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580742487-resize.jpg?crop=1xw:1xh;center,top&resize=480:*"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            Chair
          </Typography>
        </div>
        <div
          className="categories-small-div"
          onClick={() => setOpen("open")}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://media.4rgos.it/s/Argos/9310454_R_SET?$Main768$&w=620&h=620"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            Bed
          </Typography>
        </div>
        <div
          className="categories-small-div"
          onClick={() => setOpen("open")}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://platincdn.com/516/pictures/thumb/460X-270X-LYHFQQRSEF910202103830_adel-berjer.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            Berjer
          </Typography>
        </div>
        <div
          className="categories-small-div"
          onClick={() => setOpen("open")}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://res.cloudinary.com/castlery/image/private/b_rgb:FFFFFF,c_fit,f_auto,q_auto,w_1000/v1624969246/crusader/variants/50440636-PL4001/Hanford-Armchair-Light-Grey-Front.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            Armchair
          </Typography>
        </div>
        <div
          className="categories-small-div"
          onClick={() => setOpen("open")}
          style={{ padding: "10px" }}
        >
          <img
            style={{
              width: "100%",
              height: "120px",
              margin: "0px 5px 0px 0px",
            }}
            src="https://enza.akinoncdn.com/cms/2022/05/06/e58513ba-43ac-47db-b169-bc75bc6a94f5.jpg"
            alt=""
          />
          <Typography
            component="div"
            sx={{
              textAlign: "center",
              letterSpacing: "0.02em",
              fontWeight: "100",
              color: "#444",
            }}
          >
            Lighting
          </Typography>
        </div>
          */}
      </Slider>
    </div>
  );
};
export default CategoryCarousel;
const settings = {
  dots: true,
  className: "center",
  infinite: true,
  centerPadding: "10px",
  slidesToShow: 5, // lenght -1 e kadar bozulma yok
  swipeToSlide: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1424,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
