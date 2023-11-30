<template>
    <div class="container px-40">
        Product id is {{ productId }}
    </div>
</template>

<script setup>
const route = useRoute();
const productId = ref(route.params.id);

// When accessing /posts/1, route.params.id will be 1
console.log();
</script>
