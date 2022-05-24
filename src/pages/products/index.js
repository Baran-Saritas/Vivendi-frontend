import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomCard from "../../component/card";
import DetailCard from "../../component/dcard/index";
import KindFilter from "../../component/product/KindFilter";
import OrderFilter from "../../component/product/OrderFilter";
import { getFurnitureByCategoryId } from "../../store/furniture/furnitureSlice";

export default function Products() {
  //category_name
  const { category_name } = useParams();
  const { category_id } = useParams();
  const { furnitures } = useSelector((state) => state.furniture);
  const [productsName,setProductsName] = useState("");
  const dispatch = useDispatch();
//  var NewText = SampleText.replace("Developer", "App Builder");

useEffect(() => {
  setProductsName( category_name.replace("-", " ")
  )
},[category_name])
  useEffect(() => {
    if (category_id) {
      dispatch(getFurnitureByCategoryId(category_id));
    }
  }, [category_id]);
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
