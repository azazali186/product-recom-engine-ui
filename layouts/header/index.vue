<template>
  <div :class="data ? 'header border-b-2 border-t-grey-400 px-10 space-between' : 'header border-b-2 border-t-grey-400 px-10'">
    <div v-if="data" :class="data ? 'header-right-menu' : 'hidden'">
      <div class="flex justify-start">
        <SearchBoxHeaderSearchInputBox />
      </div>
    </div>
    <div class="header-right-menu">
      <span class="header-content font-bold">Email</span>
      <span class="header-content font-bold">Products</span>
      <span class="header-content font-bold">Shops</span>
      <span class="header-content font-bold">
        <div class="profile-image">P</div>
      </span>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
const data = inject('data');
</script>
