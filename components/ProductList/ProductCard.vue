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
                class="py-2 object-contain w-[100%] h-[100%]"
                :alt="productName"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="flex flex-col justify-between items-center">
          <span class="text-[15px] flex justify-start w-full">
            <ULink :to="url">
              <b>{{
                productName.length > 22
                  ? `${productName.slice(0, 22)}.....`
                  : productName
              }}</b></ULink
            >
          </span>
          <span
            class="flex justify-between items-center w-full text-[13px] mt-2"
          >
            <div class="flex gap-1 items-center">
              <b>Price: </b>
              <span class="text-green-600 text-base font-bold">{{
                `${productPrice} ${priceSymbol}`
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
          <p class="text-2xl">{{ productName }}</p>
        </div>
        <div class="flex flex-col justify-between items-center">
          <UButton :to="url" block>View More</UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const product = ref(props.data);

const productPrice = ref(0);
const priceSymbol = ref("$");

const productName = ref("");

onMounted(() => {
  if (product?.value?.price?.length > 0) {
    productPrice.value = product?.value.price[0].price;
  }
  if (product?.value?.stocks?.length > 0) {
    productPrice.value = product?.value.stocks[0].price[0].price;
  }
  if (product?.value?.stocks?.price?.length > 0) {
    priceSymbol.value = product?.value.stocks[0].price[0].price.currency.code;
  }
  if (product?.value?.translations?.length > 0) {
    productName.value = product.value.translations[0].name;
  }

});

const url = "/products/" + product?.value?.slug;

const images = product.value.images;

var val = Math.floor(1000 + Math.random() * 10000);
</script>
