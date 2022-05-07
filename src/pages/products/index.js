import React from "react";
import DetailCard from "../../component/dcard/index";
import KindFilter from "../../component/product/KindFilter";
import OrderFilter from "../../component/product/OrderFilter";

export default function Products() {
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
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
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
