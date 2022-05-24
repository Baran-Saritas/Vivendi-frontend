import React from "react";
import Main from "../pages/main";
import Products from "../pages/products/index";
import DetailPage from "../pages/detailPage/index";
import ProductCart from "../pages/productCart";
import Category from "../pages/category";
import SetInfo from "../pages/setInfo";
import Product from "../component/product";
import ProductsCampaign from "../pages/campaign";
import Base from "../pages/panel";
import SetDetailPage from "../pages/setDetailPage";
import ZoomDeneme from "../pages/zoomdeneme";
import NotFound from "../component/Results/NotFound";
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
      path: "/products/:category_id/:category_name",
      element: <Products />,
    },
    {
      path: "/products/detail/:product_id",
      element: <DetailPage />,
    },
    {
      path: "/products/setDetail/:set_id",
      element: <SetDetailPage />,
    },
    {
      path: "/zoom",
      element: <ZoomDeneme />,
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
      path: "/set-info-edit",
      element: <SetInfo />,
    },
    {
      path: "/panel/product",
      element: <Product />,
    },
    {
      path: "/panel/campaign",
      element: <ProductsCampaign />,
    },
    {
      path: "/panel/base",
      element: <Base />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
};
// /Campaign
