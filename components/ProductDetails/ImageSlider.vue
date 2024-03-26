<template>
  <div>
    <div
      class="w-[415px] h-[600px] mt-10 shadow-gray-400 overflow-hidden cursor-pointer shadow-lg m-5 p-5 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600 transition-shadow ease-in-out"
    >
      <!-- <Swiper
        :modules="[
          SwiperAutoplay,
          SwiperEffectCreative,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
        ]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
        navigation
        :pagination="{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }"
        :scrollbar="{ draggable: true }"
      >
        <SwiperSlide v-for="slide in getImages" :key="slide">
          <img
            :src="slide.url"
            class="object-contain h-[100%] w-[100%]"
            :alt="title"
          />
        </SwiperSlide>
      </Swiper> -->

      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div
            v-for="(slide, index) in getImages"
            :key="slide"
            class="duration-700 ease-in-out"
            :class="getActive == index ? '' : 'hidden'"
            data-carousel-item
          >
            <img
              :src="slide.url"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              :alt="title"
            />
          </div>
        </div>
        <!-- Slider indicators -->
        <div
          class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
        >
          <button
            v-for="slide in getImages"
            :key="slide"
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            :aria-label="'Slide ' + index"
            :data-carousel-slide-to="index"
          ></button>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          @click="changeActive('decrease')"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          @click="changeActive('increase')"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
const props = defineProps(["data", "title"]);
import productStore from "~/store/product";
const product = ref(productStore?.selectedProduct);
const title = ref(props.title);

console.log("Images ", product.value);
watch(productStore, () => {
  console.log("Images watch", productStore.selectedProduct);
});
const active = ref(0);

const changeActive = (s) => {
  if (s === "increase") {
    if (getActive.value < getImages.value.length - 1) {
      active.value++;
    }
  } else {
    if (active.value > 0) active.value--;
  }
};

const getActive = computed(() => {
  return active.value;
});

const getImages = computed(() => {
  return productStore.selectedProduct.images;
});

var val = Math.floor(1000 + Math.random() * 10000);
</script>
