<template>
  <div>
    <HeaderVue />
    <slot />
    <FooterVue />
  </div>
</template>

<script setup>
import HeaderVue from "./header";
import FooterVue from "./footer";
</script>
