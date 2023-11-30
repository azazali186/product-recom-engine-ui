<template>
  <div
    class="text-xs shadow-green-400 cursor-pointer shadow-sm m-5 p-5 w-[250px] h-[400px] flex flex-col justify-around hover:shadow-md hover:shadow-blue-600 transition-shadow ease-in-out"
  >
    <div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: val,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="slide in images" :key="slide">
          <img :src="slide.url" class="py-2 object-contain" :alt="product.title">
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="flex flex-col justify-between items-center">
      <span class="text-[15px] flex justify-start w-full">
        <ULink :to="url">
          <b>{{
            product.title.length > 22
              ? `${product.title.slice(0, 22)}.....`
              : product.title
          }}</b></ULink
        >
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

const url = "/products/" + product?.value?.id;

const images = product.value.images;

const currentSlide = ref(0);
const totalSlides = ref(0);

var val = Math.floor(1000 + Math.random() * 3000);
</script>
