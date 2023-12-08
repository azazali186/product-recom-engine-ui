<template>
  <div class="px-10 py-2 flex justify-center">
    <ProductList :data="data" />
  </div>
</template>

<script setup>
const data = ref([]);
const prodState = useProductData();

onMounted(() => {
  data.value = prodState.getProductData();
  console.log("data is ", data.value);
});
</script>
