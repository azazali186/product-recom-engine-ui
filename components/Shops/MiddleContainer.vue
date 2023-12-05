<template>
    <div class="shop-mid-centainer flex justify-around items-center overflow-y-scroll hide-scrollbar">

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

        
            <div>Hello Darling</div>
        </div>
</template>

<script setup>
const props = defineProps(["shopInfo", 'banner']);
const data = ref(props.shopInfo);
const banner = ref(props.banner);
</script>