<template>
  <div>
    <div
      class="flex w-full h-screen justify-center items-center"
      v-if="loading"
    >
      <IconsLoadingCube class="text-[72px]" />
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
const loading = ref(true);
const router = useRouter();
onMounted(() => {
  if (typeof window !== "undefined") {
    console.log(localStorage.getItem("search-engin-login-token"));
    if (!localStorage.getItem("search-engin-login-token")) {
      loading.value = false;
      router.push("/login");
    } else {
      loading.value = false;
    }
  }
});
</script>
