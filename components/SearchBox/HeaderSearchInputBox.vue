<template>
  <div
    :class="
      input
        ? 'bg-gradient-to-br from-green-400 to-blue-600' + clas
        : 'bg-gray-300' + clas
    "
  >
    <div class="search-engine-search w-full bg-white">
      <Icon
        class="search-engine-search-box-icon color-search"
        name="heroicons-solid:search"
      />
      <input
        v-model="search"
        type="text"
        class="search-engine-input-box min-w-[290px]"
        placeholder="Search your needed products..."
        ref="searchInput"
      />

      <USelectMenu
        v-model="selected"
        :options="cat"
        placeholder="Select Category"
        value-attribute="id"
        option-attribute="label"
        class="search-engine-select-box relative"
        selected-icon="i-heroicons-hand-thumb-up-solid"
        searchable
        searchable-placeholder="Search by name or favorite colors"
        :search-attributes="['label']"
        :popper="{
          offsetDistance: 0,
          placement: 'left-end',
          modifiers: {
            offset: { offset: '0,10' },
            preventOverflow: { boundariesElement: 'viewport' },
            zIndex: { enabled: true, base: 2000 },
          },
        }"
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
const emit = defineEmits(["update"]);
const input = ref(false);
const open = ref(false);
const searchInput = ref(null);

const search = ref("");

const cat = ref([]);

const selected = ref([]);

const current = computed(() => cat.value?.find((ct) => ct.id === selected.value));

const clas = " rounded-[50px] p-0.5 sp relative ";

const handleClickOutside = (event) => {
  if (searchInput.value && !searchInput.value.contains(event.target)) {
    input.value = false;
  } else {
    input.value = true;
  }
};

watch(search, () => {
  if (search.value.length > 2) {
    searchFunction();
  }
  if (search.value.length == 0) {
    resetFunction();
  }
});

watch(selected, () => {
  searchFunction();
});

const searchFunction = async () => {
  await productSearch();
  await getCatData();
  emit("update");
};

const productSearch = async () => {
  try {
    const queryData = {};
    if (selected.value > 0) queryData.category_ids = selected.value;
    if (search.value.length > 2) queryData.search = search.value;

    const params = getQueryData(queryData);

    const url = "/api/v1/products/public?" + params;
    const res = await useCustomFetch(url);
    prod.value = res.data.list;
    console.log(prod.value);
    if (prod.value?.length > 0) {
      localStorage.setItem("product-search-result-data", prod.value);
    } else {
      localStorage.removeItem("product-search-result-data");
    }
  } catch (error) {
    console.log("err", error);
    localStorage.removeItem("product-search-result-data");
  }
};

onMounted(async () => {
  await getCatData();
  document.addEventListener("click", handleClickOutside);
});

const getCatData = async () => {
  try {
    const res = await useCustomFetch("/api/v1/category/public");
    cat.value = res.data.list;
    if (cat.value?.length > 0) {
      localStorage.setItem("search-engin-cat-data", JSON.stringify(cat.value));
    } else {
      localStorage.removeItem("search-engin-cat-data");
    }
  } catch (error) {
    console.log("err");
  }
};

onMounted(() => {
  const catData = localStorage.getItem("search-engin-cat-data");
  if (catData?.length > 0) {
    cat.value = catData;
  }
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const resetFunction = () => {
  console.log("Reset is called");
  localStorage.removeItem("product-search-result-data");
  emit("update");
};
</script>
