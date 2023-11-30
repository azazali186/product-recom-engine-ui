<template>
  <div
    class="header border-b-2 py-1 border-t-grey-400 px-10 space-between items-center"
  >
    <div v-if="data" :class="data ? 'header-right-menu' : 'hidden'">
      <div class="flex justify-start relative">
        <SearchBoxHeaderSearchInputBox />
      </div>
    </div>
    <h1 class="flex text-2xl font-bold text-gray-400 justify-center">
      Welcome to Product Search Engine
    </h1>
    <div class="header-right-menu">
      <span class="header-content font-bold">Email</span>
      <span class="header-content font-bold">Products</span>
      <span class="header-content font-bold">Shops</span>
      <span class="header-content font-bold">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
const data = inject("data");
</script>
