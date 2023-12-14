<template>
  <div :style="{ background: theme.theme.bgColor, color: theme.theme.txColor }">
    
    <div
      class="flex w-full h-screen justify-center items-center"
      v-if="loading"
    >
      <IconsLoadingCube class="text-[108px]" />
    </div>
    <div v-else>
      <HeaderVue />
      <div class="h-[84vh] overflow-y-scroll hide-scrollbar">
        <slot />
      </div>
      <FooterVue />
    </div>
  </div>
</template>

<script setup>
import HeaderVue from "./header";
import FooterVue from "./footer";
import store from "~/store";

import theme from "~/store/theme";

watch(theme, () => {
  console.log("theme change ", theme);
});

const loading = ref(true);
onMounted(() => {
  loading.value = store.isLoading;
});
</script>
