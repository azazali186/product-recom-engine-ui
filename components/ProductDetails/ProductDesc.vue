<template>
  <div class="flex gap-5 mt-10">
    <Span class="font-bold text-2xl"
      ><u class="font-bold text-2xl">Description</u>: {{ desc }}</Span
    >
  </div>
</template>

<script setup>
const desc = ref(null);

import product from "~/store/product";

watch(product, () => {
  if (product.selectedVariarion) {
    desc.value = product.stockTranslation.description;
  }
  desc.value = product.translation.description;
});

</script>
