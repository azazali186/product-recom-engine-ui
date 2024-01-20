import axios from "axios";
import auth from "../store/auth";

export const useCustomFetch = async (request: any) => {
  const config = useRuntimeConfig();
  let res: any = null;
  let er: any = null;

  try {
    const token =
      localStorage.getItem("search-engin-login-token") || auth.state.token;
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    if (request.url) {
      const response = await axios({
        method: request.method || "get",
        url: request.url,
        baseURL: config.public.baseURL,
        headers,
        data: request?.body || {},
        ...request, // Additional request configuration
      });

      // Assuming the structure of your response object
      res = response.data;
    }
  } catch (error) {
    er = error;
  }

  return { ...res, error: er };
};
