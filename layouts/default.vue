<template>
  <div>
    <AppHeader />
    <HeaderVue />
    <slot />
    <FooterVue />
    <AppFooter />
  </div>
</template>

<script setup>
import HeaderVue from "./header";
import FooterVue from "./footer";
</script>
