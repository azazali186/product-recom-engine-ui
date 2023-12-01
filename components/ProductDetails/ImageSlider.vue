<template>
  <div>
    <div
      class="w-[415px] h-[600px] mt-10 shadow-green-400 overflow-hidden cursor-pointer shadow-sm m-5 p-5 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600 transition-shadow ease-in-out"
    >
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, Navigation, Pagination, Scrollbar, A11y]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :autoplay="{
          delay: val,
          disableOnInteraction: false,
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
        <SwiperSlide v-for="slide in images" lazy="true" :key="slide">
          <img
            :src="slide.url"
            class="object-contain h-[100%] w-100[%]"
            :alt="title"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const props = defineProps(["data", "title"]);
const images = ref(props.data);
const title = ref(props.title);
var val = Math.floor(1000 + Math.random() * 10000);
</script>
