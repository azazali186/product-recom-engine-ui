<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div
        class="flip-card-front text-xs shadow-green-400 cursor-pointer shadow-sm m-5 p-5 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600 transition-shadow ease-in-out"
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
              <img
                :src="slide.url"
                class="py-2 object-contain"
                :alt="product.title"
              />
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
          <span
            class="flex justify-between items-center w-full text-[13px] mt-2"
          >
            <div class="flex gap-1 items-center">
              <b>Price: </b>
              <span class="text-green-600 text-base font-bold">{{
                `${product.price}${product.currency}`
              }}</span>
            </div>
          </span>
        </div>
      </div>

      <!-- Back side of the card -->
      <div
        class="flip-card-back text-xs shadow-green-400 cursor-pointer shadow-sm m-5 p-5 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600 transition-shadow ease-in-out"
      >
        <div>
          <p class="text-2xl">{{ product.title }}</p>
        </div>
        <div class="flex flex-col justify-between items-center">
          <UButton :to="url" block target="_blank">View More</UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const product = ref(props.data);

const url = "/products/" + product?.value?.id;

const images = product.value.images;

var val = Math.floor(1000 + Math.random() * 10000);
</script>
