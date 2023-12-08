<template>
  <div class="container mt-5">
    <div class="flex justify-between items-center text-2xl">
      <div>
        Search result for <b class="capitalize">{{ query }}</b> is
        <b>{{ products?.length }}</b> Products
      </div>
      <div>
        <USelectMenu
          v-model="selected"
          :options="filters"
          placeholder="Select Category"
          value-attribute="id"
          option-attribute="label"
          selected-icon="i-heroicons-hand-thumb-up-solid"
          searchable
          searchable-placeholder="Search by name or favorite colors"
          :search-attributes="['label']"
          class="w-[200px]"
        >
          <UButton color="gray" class="flex-1 justify-between">
            {{ current.label }}
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
              :class="[open && 'transform rotate-90']"
            />
          </UButton>
          <template #label>
            {{ current.label }}
          </template>
        </USelectMenu>
      </div>
    </div>
    <div class="flex justify-center my-2 gap-10 relative flex-wrap">
      <!-- <ProductCardVue v-if="products?.length > 0" v-for="product in products" :data="product" /> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const products = ref(props.data);
const query = ref("");
import store from "~/store";
import ProductCardVue from "./ProductCard.vue";
const filters = [
  {
    id: "Most relavent",
    label: "Most relavent",
  },
  {
    id: "Price Low to High",
    label: "Price Low to High",
  },
  {
    id: "Price High to Low",
    label: "Price High to Low",
  },
  {
    id: "Most Popular",
    label: "Most Popular",
  },
  {
    id: "Top Selling",
    label: "Top Selling",
  },
  {
    id: "Top Rated",
    label: "Top Rated",
  },
];
const selected = ref(filters[0].id);

watch(query,()=>{
  query.value = store.queryData;
})

onMounted(()=>{
  query.value = store.queryData;
})

const current = computed(() => filters.find((ct) => ct.id === selected.value));


useHead({
  title: `Mobile search Result`,
  meta: [
    {
      name: "description",
      content:
        "This is the product search engine. It saves your searching time for the product it provide you the best and suitable result based on your searching product.",
    },
    { name: "keywords", content: "mobile" },
  ],
});
</script>
