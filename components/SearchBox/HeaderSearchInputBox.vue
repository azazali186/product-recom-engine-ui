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
        class="search-engine-input-box mw-290"
        placeholder="Search your needed products..."
        ref="searchInput"
      />

      <USelectMenu
        v-model="selected"
        :options="cat"
        placeholder="Select Category"
        value-attribute="id"
        option-attribute="label"
        class="search-engine-select-box"
        selected-icon="i-heroicons-hand-thumb-up-solid"
        searchable
        searchable-placeholder="Search by name or favorite colors"
        :search-attributes="['label']"
      >
        <UButton color="gray" class="flex-1 justify-between search-engine-select-box-button">
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
const input = ref(false);
const open = ref(false);
const searchInput = ref(null);

const search = ref("");

const cat = [
  {
    id: 1,
    label: "Cat 1894",
  },
  {
    id: 2,
    label: "Cat 16541",
  },
  {
    id: 3,
    label: "Cat 169874",
  },
  {
    id: 4,
    label: "Cat 1125",
  },
  {
    id: 5,
    label: "Cat 1365",
  },
  {
    id: 6,
    label: "Cat 1956",
  },
  {
    id: 7,
    label: "Cat 1365",
  },
  {
    id: 7,
    label: "Cat 1651",
  },
  {
    id: 8,
    label: "Cat 1",
  },
  {
    id: 9,
    label: "Cat 1",
  },
  {
    id: 10,
    label: "Cat 1",
  },
  {
    id: 11,
    label: "Cat 1",
  },
  {
    id: 12,
    label: "Cat 1",
  },
  {
    id: 13,
    label: "Cat 1",
  },
  {
    id: 14,
    label: "Cat 1",
  },
  {
    id: 15,
    label: "Cat 1",
  },
  {
    id: 16,
    label: "Cat 1",
  },
  {
    id: 17,
    label: "Cat 1",
  },
  {
    id: 18,
    label: "Cat 1",
  },
];

const selected = ref(cat[0].id);

const current = computed(() =>
  cat.find((ct) => ct.id === selected.value)
);

const clas = " rounded-[50px] p-0.5 sp ";

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
});

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

