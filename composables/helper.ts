import qs from "qs";

export const getQueryData = (jsonObject: any) => {
  const queryParams = qs.stringify(jsonObject);

  return queryParams;
};
