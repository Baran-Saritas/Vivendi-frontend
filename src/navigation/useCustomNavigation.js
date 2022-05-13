import React from "react";
import Main from "../pages/main";
import Products from "../pages/products/index";
import DetailPage from "../pages/detailPage/index";
import ProductCart from "../pages/productCart";
import Category from "../pages/category";
import SetInfo from "../pages/setInfo";
import Product from "../component/product";
import ProductsCampaign from "../pages/campaign";
export const useCustomRoutes = () => {
  return [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/register",
      element: <div>mehemt</div>,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/products/detail",
      element: <DetailPage />,
    },
    {
      path: "/productCart",
      element: <ProductCart />,
    },
    {
      path: "/category-edit",
      element: <Category />,
    },
    {
      path: "/category-edit/:category_id/group-edit/:group_id/set-info-edit",
      element: <SetInfo />,
    },
    {
      path: "/panel/product",
      element: <Product />,
    },
    {
      path: "/panel/campaign",
      element: <ProductsCampaign/>,
    },
    {
      path: "*",
      element: <div>Page Not Found</div>,
    },
  ];
};
// /Campaign