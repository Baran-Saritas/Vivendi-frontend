import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomCard from "../../component/card";
import DetailCard from "../../component/dcard/index";
import KindFilter from "../../component/product/KindFilter";
import OrderFilter from "../../component/product/OrderFilter";
import { getFurnitureByCategoryId } from "../../store/furniture/furnitureSlice";
  
export default function Products() {
  const { category_id } = useParams();
  const { furnitures } = useSelector((state) => state.furniture);
  const dispatch = useDispatch();

useEffect(() =>{
  if(category_id){
    dispatch(getFurnitureByCategoryId(category_id))
  }
},[category_id])
  return (
    <div className="products-page">
      <div className="products-page-side">
        <h1>SEATING GROUPS</h1>
        <hr />
        <div className="products-filter">
          <OrderFilter />
          <KindFilter />
        </div>  
        <div className="all-products">
          {furnitures?.map((value) =>(
             <CustomCard  value ={value}/>
            )
          )

          }
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
