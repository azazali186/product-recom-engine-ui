import { ref, onMounted } from "vue";
import store from "~/store";

// useProductData
export const useProductData = () => {
  const productData = ref([]); // Initialize with an empty array

  // Getter function
  const getProductData = () => {
    if (
      localStorage.getItem("product-search-result-data") &&
      localStorage.getItem("product-search-result-data") != null &&
      localStorage.getItem("product-search-result-data") != "undefined"
    ) {
      const data = JSON.parse(
        localStorage.getItem("product-search-result-data")
      );

      store.dataLength = data.length;

      return data;
    }
    return null;
  };

  // Setter function
  const setProductData = (data) => {
    if (data == null) {
      store.dataLength = 0;
      store.showSearchBox = true;
      localStorage.removeItem("product-search-result-data");
    } else {
      store.dataLength = data.length;
      localStorage.setItem("product-search-result-data", JSON.stringify(data));
      productData.value = data;
    }

    if (productData.value?.length === 0) {
      store.dataLength = 0;
      store.showSearchBox = true;
      localStorage.removeItem("product-search-result-data");
    }
  };
  onMounted(() => {
    try {
      if (
        localStorage.getItem("product-search-result-data") &&
        localStorage.getItem("product-search-result-data") != null &&
        localStorage.getItem("product-search-result-data") != "undefined"
      ) {
        setProductData(
          JSON.parse(localStorage.getItem("product-search-result-data"))
        );
      }
    } catch (error) {
      console.log("err", error);
    }
  });

  return { getProductData, setProductData };
};

// useCatData
export const useCatData = () => {
  const catData = ref([]);

  const getCatData = () => catData.value;

  const setCatData = (data) => {
    localStorage.setItem("search-engin-cat-data", JSON.stringify(data));
    catData.value = data;
    if (catData.value?.length == 0) {
      localStorage.removeItem("search-engin-cat-data");
    }
  };

  onMounted(async () => {
    try {
      if (
        localStorage.getItem("search-engin-cat-data") &&
        localStorage.getItem("search-engin-cat-data") != null &&
        localStorage.getItem("search-engin-cat-data") != "undefined"
      ) {
        setCatData(JSON.parse(localStorage.getItem("search-engin-cat-data")));
      } else {
        const res = await useCustomFetch("/category/public");
        setCatData(res?.data?.list);
      }
      if (catData.value?.length == 0) {
        localStorage.removeItem("search-engin-cat-data");
      }
    } catch (error) {
      console.log("err", error);
    }
  });

  return { getCatData, setCatData };
};

// useQueryData
export const useQueryData = () => {
  const queryData = ref("");

  const getQueryData = () => queryData.value;

  const setQueryData = (data) => {
    localStorage.setItem("search-engin-query-data", data);
    queryData.value = data;
    if (queryData.value?.length == 0) {
      localStorage.removeItem("search-engin-query-data");
    }
  };

  onMounted(async () => {
    try {
      if (
        localStorage.getItem("search-engin-query-data") &&
        localStorage.getItem("search-engin-query-data") != null
      ) {
        setQueryData(localStorage.getItem("search-engin-query-data"));
      }
      if (queryData.value == "") {
        localStorage.removeItem("search-engin-query-data");
      }
    } catch (error) {
      console.log("err", error);
    }
  });

  return { getQueryData, setQueryData };
};

// useShowSearch
export const useShowSearch = () => {
  const showSearch = ref(true);

  const getShowSearch = () => showSearch.value;

  const setShowSearch = (value: boolean) => {
    showSearch.value = value;
  };

  return { getShowSearch, setShowSearch };
};

// useShowHeaderSearch
export const useShowHeaderSearch = () => {
  const showHeaderSearch = ref(false);

  const getShowHeaderSearch = () => showHeaderSearch.value;

  const setShowHeaderSearch = (value: boolean) => {
    showHeaderSearch.value = value;
  };

  return { getShowHeaderSearch, setShowHeaderSearch };
};
