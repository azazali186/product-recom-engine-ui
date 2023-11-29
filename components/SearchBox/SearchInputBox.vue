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
        class="search-engine-input-box mw-700"
        placeholder="Search your needed products..."
        ref="searchInput"
      />

      <Icon
        class="search-engine-search-box-icon mh-30 color-mic"
        name="heroicons-solid:microphone"
      />
      <Icon
        class="search-engine-search-box-icon mh-30 color-camera"
        name="heroicons-solid:camera"
      />
    </div>
  </div>
</template>

<script setup>
const input = ref(false);
const searchInput = ref(null);

const clas = " rounded-[50px] w-[40%] p-0.5 sp ";

const handleClickOutside = (event) => {
  console.log("searchInput", searchInput.value);
  console.log("event.target", event.target);
  if (searchInput.value && !searchInput.value.contains(event.target)) {
    input.value = false;
  } else {
    input.value = true;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
