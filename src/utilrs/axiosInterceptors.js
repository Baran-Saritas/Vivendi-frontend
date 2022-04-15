import axios from "axios";
import env from "../env.json";

const user_api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
  baseURL: env.USER_API,
});

export const handleError = ({ message, data, status }) => {
  return Promise.reject({ message, data, status });
};

user_api.interceptors.request.use(config, error);
user_api.interceptors.response.use(response);

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

export { user_api };
