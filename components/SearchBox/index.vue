<template>
  <div class="search-engine-container" v-if="!data">
    <div class="w-full flex justify-center">
      <SearchInputBox />
    </div>
    <div class="flex gap-2 mt-5 p-3">
      <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Product Search
        </span>
      </button>

      <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          I'm Feeling Lucky
        </span>
      </button>
    </div>
  </div>
  <div v-else class="px-10 py-2 flex justify-center"><ProductsListVue /></div>
</template>

<script setup>

import SearchInputBox from "./SearchInputBox";
import ProductsListVue from "../ProductList"
const data = inject("data");

const clas = " rounded-[50px] w-[40%] p-0.5 sp ";
</script>
