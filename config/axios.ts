import axios from "axios";
import auth from "~/store/auth";

const api = axios.create({
  headers: { "X-Requested-With": "XMLHttpRequest", Accept: "application/json" },
  baseURL: process.env.NUXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  function (request) {
    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("search-engin-login-token")
        ? localStorage.getItem("search-engin-login-token")
        : auth.state.token;
    }
    const headers = {};
    if (token) {
      headers.authorization = "Bearer " + token;
    }
    return request;
  },
  function (error) {
    if (error.response.status === 401) {
      navigateTo("/login");
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      navigateTo("/login");
    }
    return Promise.reject(error);
  }
);

export { axios, api };
