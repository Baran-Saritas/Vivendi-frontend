import axios from "axios";
import env from "../env.json";

const product_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  baseURL: env.PRODUCT,
});

const furniture_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  baseURL: env.FURNITURE_API,
});

const user_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  baseURL: env.USER_API,
});

const image_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  baseURL: env.IMAGE_API,
});

const category_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  baseURL: env.CATEGORY,
});

const campaigns_and_ctarget_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  baseURL: env.FCATEGORY_API,
});
const group_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  baseURL: env.FGROUP_API,
});
const campaign_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  baseURL: env.CAMPAIGN_API,
});
const set_info_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
  baseURL: env.FSET_INFO_API,
});
const set_info_f_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
  baseURL: env.FSET_INFO_F_API,
});

export const handleError = ({ message, data, status }) => {
  return Promise.reject({ message, data, status });
};

//
furniture_api.interceptors.request.use(config, error);
furniture_api.interceptors.response.use(response);
//
product_api.interceptors.request.use(config, error);
product_api.interceptors.response.use(response);
//
user_api.interceptors.request.use(config, error);
user_api.interceptors.response.use(response);
//
image_api.interceptors.request.use(config, error);
image_api.interceptors.response.use(response);
//
category_api.interceptors.request.use(config, error);
category_api.interceptors.response.use(response);
//
group_api.interceptors.request.use(config, error);
group_api.interceptors.response.use(response);
//
set_info_api.interceptors.request.use(config, error);
set_info_api.interceptors.response.use(response);
//
set_info_f_api.interceptors.request.use(config, error);
set_info_f_api.interceptors.response.use(response);
//
campaign_api.interceptors.request.use(config, error);
campaign_api.interceptors.response.use(response);
//
campaigns_and_ctarget_api.interceptors.request.use(config, error);
campaigns_and_ctarget_api.interceptors.response.use(response);
async function config(config) {
  /*
  const token = localStorage.getItem("keycloak-token");
  if (token) {
    config.headers.common["Authorization"] = `Bearer ${token}`;
  }
  config.headers.common["Accept-Language"] = "TR";
  */
  return config;
}

function error(error) {
  return Promise.reject(error);
}

function responseError(error) {
  return error;
}

function response(response) {
  return response;
}

async function responseResult({ message, response: { data, status } }) {
  if (status === 401 || status === 403) {
  }
  return handleError({ message, data, status });
}

export {
  user_api,
  image_api,
  category_api,
  group_api,
  set_info_api,
  campaign_api,
  furniture_api,
  set_info_f_api,
  product_api,
};
