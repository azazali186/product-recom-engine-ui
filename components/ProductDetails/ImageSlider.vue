<template>
  <div
    class="w-[420px] h-[600px] mt-10 shadow-green-400 overflow-hidden cursor-pointer shadow-sm m-5 p-5 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600 transition-shadow ease-in-out"
  >
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
        <img
          :src="slide.url"
          class="object-contain h-[100%] w-100[%]"
          :alt="title"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const props = defineProps(["data", 'title']);
const images = ref(props.data);
const title = ref(props.title);
console.log("images", images);
var val = Math.floor(1000 + Math.random() * 3000);
</script>
