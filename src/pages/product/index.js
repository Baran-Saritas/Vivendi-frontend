import React from "react";
import ProductFilter from "../../component/product/ProductFilter";
import ProductItem from "../../component/product/ProductItem";

export default function Product() {
  return (
    <div className="product-container">
      <div className="product-left-pane">
        <div className="product-filter">
          <ProductFilter />
        </div>
      </div>
      <div className="product-right-pane">
        <div className="product-header"></div>
        <div className="product-body">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
}
