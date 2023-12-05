<template>
    <div class="flex justify-center gap-5 text-4xl font-bold items-center h-container">
        <ULink to="/seller/login" class="font-bold text-blue-400 hover:text-green-600 hover:scale-110 cursor-pointer transition ease-in-out">Login</ULink>
        <ULink to="/seller/register" class="font-bold text-blue-400 hover:text-green-600 hover:scale-110 cursor-pointer transition ease-in-out">Register</ULink>
    </div>
</template>
<script setup>
definePageMeta({
  layout: false,
});
</script>