import React from "react";
import DetailCard from "../../component/dcard/index";
export default function Products() {
  return (
    <div className="products-page">
      <div className="products-page-side">
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div
            className="products-h1"
            style={{ textAlign: "center", width: "60%", whiteSpace: "normal" }}
          >
            <h1 style={{ fontWeight: 500 }}>SEATING GROUPS</h1>
            <hr />
          </div>
        </div>
        <br />
        <br />
        <div
          className="all-products"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
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
