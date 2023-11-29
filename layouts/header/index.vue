<template>
  <div :class="data ? 'header space-between' : 'header'">
    <div v-if="data" :class="data ? 'header-right-menu' : 'hidden'">
      <span class="header-content">Email</span>
      <span class="header-content">Products</span>
      <span class="header-content">Shops</span>
      <span class="header-content">
        <div class="profile-image">P</div>
      </span>
    </div>
    <div class="header-right-menu">
      <span class="header-content">Email</span>
      <span class="header-content">Products</span>
      <span class="header-content">Shops</span>
      <span class="header-content">
        <div class="profile-image">P</div>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { inject } from "vue";
const data = inject('data');
</script>
