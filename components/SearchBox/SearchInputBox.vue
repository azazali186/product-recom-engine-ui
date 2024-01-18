<template>
  <div
    style="
      width: 100%;
      justify-content: center;
      display: flex;
      flex-direction: column;
      gap: 20px;
    "
  >
    <div style="width: 100%; justify-content: center; display: flex">
      <div
        :class="
          input
            ? 'bg-gradient-to-br from-green-400 to-blue-600' + clas
            : 'bg-gray-300' + clas
        "
      >
        <div class="search-engine-search bg-white">
          <Icon
            class="search-engine-search-box-icon color-search"
            name="heroicons-solid:search"
          />
          <input
            v-model="search"
            type="text"
            class="search-engine-input-box mw-full"
            placeholder="Search your needed products..."
            ref="searchInput"
          />
        </div>
      </div>
    </div>
    <div
      style="width: 100%; justify-content: center; display: flex"
      v-if="data"
    >
      <div
        :class="
          input
            ? 'bg-gradient-to-br from-green-400 to-blue-600' + clas
            : 'bg-gray-300' + clas
        "
      >
        <div
          class="search-engine-search bg-white"
          style="flex-direction: column"
        >
          <h1 class="font-bold capitalize text-[24px]">search Suggestions:</h1>
          <div
            class="flex w-full px-5 pb-5"
            style="justify-content: space-between"
          >
            <table class="w-full border-2">
              <thead class="border-2">
                <tr>
                  <th class="border-2 w-[40%] font-bold text-[14px]">
                    Product Name
                  </th>
                  <th class="border-2 w-[30%] font-bold text-[14px]">
                    Category Name
                  </th>
                  <th class="border-2 w-[30%] font-bold text-[14px]">
                    Shop Name
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-2" v-for="pd in searchData">
                  <td
                    class="border-2 text-[12px] px-2 py-1"
                    style="line-height: 20px"
                    @click="
                      () => {
                        selData = {
                          name: 'product',
                          value: searchInput,
                        };
                      }
                    "
                  >
                    {{ pd.product }}
                  </td>
                  <td
                    class="border-2 text-[12px] px-2 py-1"
                    style="line-height: 20px"
                    @click="
                      () => {
                        selData = {
                          name: 'category',
                          value: pd.category,
                        };
                      }
                    "
                  >
                    {{ pd.category }}
                  </td>
                  <td
                    class="border-2 text-[12px] px-2 py-1"
                    style="line-height: 20px"
                    @click="
                      () => {
                        selData = {
                          name: 'shop',
                          value: pd.shop,
                        };
                      }
                    "
                  >
                    {{ pd?.shop }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { getQueryData } from "~/helpers/Utils";
const cat = ref([]);
const searchData = ref([]);
const selData = ref({
  name: "",
  value: "",
});
const prod = ref([]);
const category = ref([]);
const shop = ref([]);
const input = ref(false);
const data = ref(false);
const open = ref(false);
const searchInput = ref(null);
import store from "~/store";
import product from "~/store/product";

const catState = useCatData();

const emit = defineEmits(["update"]);

const search = ref("");

const selected = ref();

const current = computed(() =>
  cat.value?.find((ct) => ct.id === selected.value)
);

const clas = " rounded-[50px] w-[40%] p-0.5 sp ";

const handleClickOutside = (event) => {
  if (searchInput.value && !searchInput.value.contains(event.target)) {
    input.value = false;
  } else {
    input.value = true;
  }
};

watch(selData, () => {
  console.log("selData is ", selData.value);
  getSearchData(selData.value.name, selData.value.value);
});

watch(search, () => {
  data.value = false;
  if (search.value?.length > 2) {
    searchFunction();
  }
});

watch(selected, () => {
  searchFunction();
});

const searchFunction = async () => {
  await productSearch();
  // await getCatData();
  emit("update", search.value);
};

const productSearch = async () => {
  data.value = false;
  searchData.value = [];
  try {
    const queryData = {};
    if (selected.value > 0) queryData.category_ids = selected.value;
    if (search.value.length > 2) queryData.search = search.value;
    const params = getQueryData(queryData);
    const url = "/search?" + params;
    if (search.value.length > 2) {
      const res = await useCustomFetch({ url });
      console.log("res", res);
      prod.value = res?.data?.products?.list;
      category.value = res?.data?.cats?.list;
      shop.value = res?.data?.shops?.list;
      product.data = prod.value;
      product.count = res.data.products.count;
      product.query = search.value;

      if (
        prod.value.length > 0 ||
        category.value.length > 0 ||
        shop.value.length > 0
      ) {
        data.value = true;
      }
    }
  } catch (error) {
    console.log("err", error);
  }
  getData();
};

const getSearchData = async (routeName, routeValue) => {
  try {
    if (routeName === "product") {
      routeValue = routeValue.value;
    }
    const url = `/search/${routeName}/${routeValue}`;
    if (search.value.length > 2) {
      const res = await useCustomFetch({ url });
      console.log("res data", res.data);
      if (routeName === "product") {
        product.data = res.data;
        product.count = res.data.length;
        product.query = routeValue;
        searchData.value = [];
        navigateTo("/search");
      }
      if (routeName === "shop") {
        store.data = res.data;
        store.count = res.data.length;
        store.query = routeValue;
        if (res.data.length > 0) {
          searchData.value = [];
          navigateTo(`/shops/${res.data[0].slug}`)
        };
      }
    }
  } catch (error) {
    console.log("err", error);
  }
};

const getData = () => {
  const maxlength = Math.max(
    category.value.length,
    prod.value.length,
    shop.value.length
  );
  const sData = [];
  for (let index = 0; index < maxlength; index++) {
    const dt = {
      product:
        prod.value.length > index
          ? prod.value[index].translations[0]?.name
          : null,
      category:
        category.value.length > index
          ? category.value[index].translations[0]?.name
          : null,
      shop: shop.value.length > index ? shop.value[index].name : null,
    };
    sData.push(dt);
  }
  searchData.value = sData;
};

onMounted(async () => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
