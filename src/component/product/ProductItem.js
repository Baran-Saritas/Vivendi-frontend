import React from "react";

export default function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-item-top">
        <img src="/image/okyo.jpg" alt="koltuk" />
      </div>
      <div className="product-item-bottom">
        <a href="/#">ADD TO BASKET</a>
      </div>
    </div>
  );
}
