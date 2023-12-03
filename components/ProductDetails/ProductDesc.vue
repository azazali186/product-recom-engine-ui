<template>
    <div class="flex gap-5 mt-10">
        <Span class="font-bold text-2xl "><u class="font-bold text-2xl">Description</u>: {{ desc }}</span>
    </div>
</template>

<script setup>
const props = defineProps(["data"]);
const desc = ref(props.data);
</script>