<template>
  <div
    class="text-xs shadow-green-400 shadow-sm m-5 p-5 w-[250px] h-[400px] flex flex-col justify-between hover:shadow-md hover:shadow-blue-600 transition-shadow ease-in-out">
    <div>Images Slider</div>
    <div class="flex flex-col justify-between items-center">
      <span class="text-[15px] flex justify-start w-full">
        <b>{{
          product.title.length > 22
            ? `${product.title.slice(0, 22)}.....`
            : product.title
        }}</b>
      </span>
      <span class="flex justify-between items-center w-full text-[13px] mt-2">
        <div class="flex gap-1 items-center">
          <b>Price: </b>
          <span class="text-green-600 text-base font-bold">{{
            `${product.price}${product.currency}`
          }}</span>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const product = ref(props.data);
</script>
