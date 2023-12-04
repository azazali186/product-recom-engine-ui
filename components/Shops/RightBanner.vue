<template>
    <div class="h-[100%] shop-side-banners">
        <img :src="rightBannerImage.url" class="h-[100%]" alt="">
    </div>
</template>

<script setup>
const props = defineProps(["data"]);
const rightBannerImage = ref(props.data);
</script>