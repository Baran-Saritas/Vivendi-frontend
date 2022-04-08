import React, { useEffect } from "react";
import { Navigate } from "react-router";
import Main from "../pages/main";
import Products from "../pages/products/index";
import DetailPage from "../pages/detailPage/index";
import ProductCart from "../pages/productCart";
import CustomCard from "../component/card";
export const useCustomRoutes = () => {
  let isLogin = localStorage.getItem("currentUser");
  return [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/login",
      element: <div>baran</div>,
    },
    {
      path: "/register",
      element: <div>mehemt</div>,
    },
    {
      path: "/products",
      element: <Products/>,
    },
    {
      path: "/products/detail",
      element: <DetailPage/>,
    },
    {
      path: "/productCart",
      element: <ProductCart/>,
    },
    {
      path: "/test",
      element: <CustomCard />
    }
  ];
};
