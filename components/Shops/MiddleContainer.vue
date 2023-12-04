<template>
    <div class="shop-mid-centainer flex justify-around items-center overflow-y-scroll hide-scrollbar">
            <div>Hello Darling</div>
        </div>
</template>

<script setup>
const props = defineProps(["shopInfo", 'banner']);
const data = ref(props.shopInfo);
const banner = ref(props.banner);
</script>