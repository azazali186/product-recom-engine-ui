export const useCustomFetch = async (request:any, opts:any) => {
  const config = useRuntimeConfig();
  let res:any = null;
  let error:any = null;
  await useFetch(request, {
    baseURL: config.public.baseURL,
    onRequest({ request, options }) {
      // Set the request headers
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
    },
    onResponse({ request, response, options }) {
      // Process the response data
      console.log("response interceptor");
      console.log("response ", response);
      res = response._data
      return response._data;
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
      error = response._data
    },
    ...opts,
  });
  return { ...res, error };
};
