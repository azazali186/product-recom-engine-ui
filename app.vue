<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Product Search Engine",
  description:
    "This is the product search engine. It saves your searching time for the product it provide you the best and suitable result based on your searching product.",
});

provide("data", true);
</script>
