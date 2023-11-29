<template>
  <div class="search-engine-container">
    <div class="search-engine-search">
      <Icon
        class="search-engine-search-box-icon"
        name="heroicons-solid:search"
      />
      <input
        v-model="search"
        type="text"
        class="search-engine-input-box"
        placeholder="Search your needed products..."
      />

      <Icon
        class="search-engine-search-box-icon mx-2"
        name="heroicons-solid:microphone"
      />
      <Icon
        class="search-engine-search-box-icon mx-2"
        name="heroicons-solid:camera"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const search = ref("");

watch(search, () => {
  if (search.value.length > 2) {
    searchFunction();
  }
});
const searchFunction = () => {
  console.log("Calling searchFunction with search value:", search.value);
};
</script>
