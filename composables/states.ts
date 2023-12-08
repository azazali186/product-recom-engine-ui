import { ref, onMounted } from "vue";

// useProductData
export const useProductData = () => {
  const productData = ref([]); // Initialize with an empty array

  // Getter function
  const getProductData = () => productData.value;

  // Setter function
  const setProductData = (data) => {
    localStorage.setItem("product-search-result-data", JSON.stringify(data));
    productData.value = data;
    if (productData.value?.length === 0) {
      localStorage.removeItem("product-search-result-data");
    }
  };
  onMounted(() => {
    try {
      if (
        localStorage.getItem("product-search-result-data") &&
        localStorage.getItem("product-search-result-data") != null
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
        localStorage.getItem("search-engin-cat-data") != null
      ) {
        setCatData(JSON.parse(localStorage.getItem("search-engin-cat-data")));
      } else {
        const res = await useCustomFetch("/api/v1/category/public");
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
