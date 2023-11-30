<template>
  <div class="mt-10 flex flex-col flex-wrap">
    <h1 class="text-4xl font-bold">
      {{ selectedVariation?.title || product.title }}
    </h1>
    <br />
    <h1>
      Price: {{ selectedVariation?.price || product.price
      }}{{ product.currency }}
    </h1>
    <h1>Quantity: {{ selectedVariation?.quantity || product.quantity }} set</h1>
    <br />

    <div class="flex flex-row gap-5 items-center">
      <span>Variations: </span>
      <div v-for="variation in product.variations">
        <UBadge color="primary" variant="solid">{{ variation.id }}</UBadge>
      </div>
    </div>
    <br />
    <h1 class="text-xl font-bold">{{ product.title }} Key Points</h1>
    <ul class="">
      <li class="font-bold" v-for="(keyword, index) in product.keyPoints">
        {{ index + 1 }}. {{ keyword }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const product = ref(props.data);
var val = Math.floor(1000 + Math.random() * 3000);
const selectedVariation = ref();
</script>
