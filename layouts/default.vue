<template>
  <div>
    <HeaderVue />
    <div class="h-[84vh] overflow-y-scroll hide-scrollbar">
      <slot />
    </div>
    <FooterVue />
  </div>
</template>

<script setup>
import HeaderVue from "./header";
import FooterVue from "./footer";
</script>
