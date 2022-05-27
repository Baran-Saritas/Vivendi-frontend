import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CustomCard from "../../component/card";
import { product_api } from "../../utilrs/axiosInterceptors";

export default function SearchProducts() {
  const [searchparam] = useSearchParams();
  const [activeBtn, setActiveBtn] = useState("furniture");
  const [furniture, setFurniture] = useState([]);
  const [set, setSet] = useState([]);

  const getProducts = () => {
    let notFound = <h2>{searchparam.get("name") + " not found."}</h2>;
    if (activeBtn === "furniture") {
      if (!furniture.length) return notFound;
      return furniture.map((f, i) => <CustomCard key={i} value={f} />);
    } else if (activeBtn === "set") {
      if (!set.length) return notFound;
      return set.map((s, i) => <CustomCard key={i} value={s} />);
    }
  };

  useEffect(() => {
    product_api
      .get("/furniture/search?" + searchparam.toString())
      .then((res) => setFurniture(res.data));
    product_api
      .get("/set/search?" + searchparam.toString())
      .then((res) => setSet(res.data));
  }, [searchparam]);

  return (
    <div className="products-page">
      <div className="products-page-side">
        <h1>RESULT</h1>
        <hr />
        <div className="products-filter">
          <ToggleButtonGroup
            color="primary"
            value={activeBtn}
            exclusive
            onChange={(_, i) => setActiveBtn(i)}
          >
            <ToggleButton value="furniture">furniture</ToggleButton>
            <ToggleButton value="set">Set</ToggleButton>
          </ToggleButtonGroup>
          {/*<OrderFilter />*/}
          {/* <KindFilter /> */}
        </div>
        <div className="all-products">{getProducts()}</div>
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
