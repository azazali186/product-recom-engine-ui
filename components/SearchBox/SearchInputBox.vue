<template>
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
        class="search-engine-input-box mw-550"
        placeholder="Search your needed products..."
        ref="searchInput"
      />

      <USelectMenu
        v-model="selected"
        :options="cat"
        placeholder="Select Category"
        value-attribute="id"
        option-attribute="name"
        class="search-engine-select-box"
        selected-icon="i-heroicons-hand-thumb-up-solid"
        searchable
        searchable-placeholder="Search by name or favorite colors"
        :search-attributes="['name']"
      >
        <UButton
          color="gray"
          class="flex-1 justify-between search-engine-select-box-button"
        >
          {{ current?.name || "All Categories" }}
          <UIcon
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
            :class="[open && 'transform rotate-90']"
          />
        </UButton>
        <template #label>
          {{ current?.name || "All Categories" }}
        </template>
      </USelectMenu>

      <!-- <Icon
        class="search-engine-search-box-icon mh-30 color-mic"
        name="heroicons-solid:microphone"
      />
      <Icon
        class="search-engine-search-box-icon mh-30 color-camera"
        name="heroicons-solid:camera"
      /> -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { getQueryData } from "~/helpers/Utils";
const cat = ref([]);
const prod = ref([]);
const input = ref(false);
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
  try {
    const queryData = {};
    if (selected.value > 0) queryData.category_ids = selected.value;
    if (search.value.length > 2) queryData.search = search.value;
    const params = getQueryData(queryData);
    const url = "/products/public?" + params;
    const res = await useCustomFetch({ url });
    prod.value = res?.data?.list;
    product.data = prod.value;
    product.count = res.data.count;
    product.query = search.value;
    prodState.setProductData(prod.value);
    console.log(prod.value);
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
