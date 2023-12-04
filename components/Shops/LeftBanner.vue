<template>
    <div class="h-[100%] shop-side-banners">
        <img :src="leftBannerImages.url" class="h-[100%]" alt="">
    </div>
</template>

<script setup>
const props = defineProps(["data"]);
const leftBannerImages = ref(props.data);
</script>