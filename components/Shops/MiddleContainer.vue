<template>
  <div
    class="shop-mid-centainer w-full flex-col flex items-center overflow-y-scroll hide-scrollbar"
  >
    <!-- seller background and text color configuration load -->
    <!-- banner background -->
    <!-- on Banner profile photo and name in big -->
    <!-- shop description behind the profile photo but not hide full visible and distributed around profile photo -->
    <!-- colabrative companies icons or brand icons of products -->
    <!-- ad section -->
    <!-- top selling products  -->
    <!-- top newest products  -->
    <!-- top categories  -->
    <!-- top liked products  -->
    <!-- most visited  -->
    <!-- recommended products from buyer  -->
    <div class="banner w-screen h-[240px] absolute" :style="bannerStyle">
      <!-- <img :src="banner.url" :alt="shopInfo.name" /> -->
    </div>
    <div
      class="flex w-[240px] h-[240px]"
    >
      <img :src="banner.url" class=" object-cover w-[240px] h-[240px] items-center justify-center rounded-full border-[20px] border-blue-600" alt="">
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["shopInfo", "banner"]);
const data = ref(props.shopInfo);
const banner = ref({
  url: "https://picsum.photos/2160/360?random=3652.webp",
});
const bannerStyle = `background-image: url(${banner.value.url}); z-index: -3`;
</script>
