import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomCard from "../../component/card";
import DetailCard from "../../component/dcard/index";
import KindFilter from "../../component/product/KindFilter";
import OrderFilter from "../../component/product/OrderFilter";
import { getFurnitureByCategoryId } from "../../store/furniture/furnitureSlice";

export default function SearchProducts() {
  const { furnitures } = useSelector((state) => state.furniture);
  const [productsName,setProductsName] = useState("");
  const { searchData } = useSelector((state) => state.global);
  const dispatch = useDispatch();
//  var NewText = SampleText.replace("Developer", "App Builder");

useEffect(()=>{
  console.log("Data",searchData);
},[])
  return (
    <div className="products-page">
      <div className="products-page-side">
        <h1>{productsName !== "" ? productsName:null}</h1>
        <hr />
        <div className="products-filter">
          <OrderFilter />
          {/* <KindFilter /> */}
        </div>
        <div className="all-products">
          {furnitures?.map((value, i) => (
            <CustomCard key={i} value={value} />
          ))}
        </div>
        <br />
        <br />
        <div style={{ justifyContent: "center", display: "flex" }}>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}


/*

useEffect(() => {
  let arr = []
  setInfos.forEach(i => {
    if(i.categoryId === "a76ec128-c8be-4234-be0c-158518585153" && i.coupon)
      arr.push(i)
  })
  furnitures.forEach(i => {
    if(i.categoryId === "a76ec128-c8be-4234-be0c-158518585153" && i.coupon)
      arr.push(i)
  })
  setChair(arr)
},[furnitures, setInfos])

*/