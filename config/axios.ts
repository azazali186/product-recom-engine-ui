import axios from "axios";


const api = axios.create({
  headers: { "X-Requested-With": "XMLHttpRequest", Accept: "application/json" },
  baseURL: process.env.NUXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

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
