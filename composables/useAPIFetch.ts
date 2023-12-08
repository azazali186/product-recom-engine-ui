export const useCustomFetch = async (request: any, opts: any) => {
  const config = useRuntimeConfig();
  let res: any = null;
  let er: any = null;
  await useFetch(request, {
    baseURL: config.public.baseURL,
    onRequest({ request, options }) {
    
    },
    onRequestError({ request, options, error }) {
      er = error
    },
    onResponse({ request, response, options }) {
      res = response._data;
      return response._data;
    },
    onResponseError({ request, response, options }) {
      er = response._data;
    },
    ...opts,
  });
  return { ...res, error: er };
};
