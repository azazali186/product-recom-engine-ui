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
                  <th v-if="prod.length>0">
                    <table class="w-full border-2">
                      <thead class="border-2">
                        <tr class="border-2">
                          <th class="border-2 font-bold  text-[18px]">Product Name</th>
                        </tr>
                      </thead>
                      <tbody class="border-2">
                        <tr class="border-2" v-for="pd in prod">
                          <td class="border-2">{{ pd.translations[0].name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </th>
                  <th v-if="category.length>0">
                    <table class="w-full border-2">
                      <thead class="border-2">
                        <tr class="border-2">
                          <th class="border-2 font-bold text-[18px]">Category Name</th>
                        </tr>
                      </thead>
                      <tbody class="border-2">
                        <tr class="border-2" v-for="cats in category">
                          <td class="border-2">{{ cats.translations[0].name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </th>
                  <th v-if="shop.length>0">
                    <table class="w-full border-2">
                      <thead class="border-2">
                        <tr class="border-2">
                          <th class="border-2 font-bold text-[18px]">Shop Name</th>
                        </tr>
                      </thead>
                      <tbody class="border-2">
                        <tr class="border-2" v-for="sp in shop">
                          <td class="border-2">{{ sp.name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </th>
                </tr>
              </thead>
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

const prodState = useProductData();

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
  await getCatData();
  emit("update", search.value);
};

const productSearch = async () => {
  data.value = false;
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
      prodState.setProductData(prod.value);

      if (
        prod.value.length > 0 ||
        category.value.length > 0 ||
        shop.value.length > 0
      ) {
        data.value = true;
      }

      console.log(prod.value);
    }
  } catch (error) {
    console.log("err", error);
  }
};

onMounted(async () => {
  search.value = store.queryData;
  await getCatData();
  document.addEventListener("click", handleClickOutside);
});

const getCatData = async () => {
  try {
    if (catState.getCatData()?.length > 0) {
      cat.value = catState.getCatData();
    } else {
      const res = await useCustomFetch({ url: "/category/public" });
      cat.value = res?.data?.list;
      catState.setCatData(cat.value);
    }
  } catch (error) {
    console.log("err", error);
  }
  product.catData = cat.value;
};

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
