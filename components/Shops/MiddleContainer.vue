<template>
  <div
    class="shop-mid-centainer w-full flex-col flex overflow-y-scroll hide-scrollbar"
  >
    <!-- seller background and text color configuration load -->
    <!-- banner background -->
    <!-- on Banner profile photo and name in big -->
    <!-- shop description behind the profile photo but not hide full visible and distributed around profile photo -->
    <!-- colabrative companies icons or brand icons of products -->
    <!-- ad section -->
    <!-- top selling products  -->
    <!-- top newest products  -->
    <!-- top categories  -->
    <!-- top liked products  -->
    <!-- most visited  -->
    <!-- recommended products from buyer  -->
    <div class="banner w-full h-[320px]">
      <div
        class="banner w-full h-[240px] flex justify-end"
        :style="bannerStyle"
      >
        <!-- <div class="text-2xl font-bold pt-72 underline w-[50%]">Catalogues</div> -->
        <div
          class="text-2xl flex flex-col items-center gap-2 font-bold pt-60 pr-10 underline"
        >
          {{ data.name }}
          <div class="flex gap-5">
            <span
              class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px] border-green-400"
              ><IconsFacebookAnimated
            /></span>
            <span
              class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px] border-green-400"
              ><IconsTelegramAnimated
            /></span>
            <span
              class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px] border-green-400"
              ><IconsWhatsApp
            /></span>
            <span
              class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px] border-green-400"
              ><IconsEmailAnimatedWithoutEmail
            /></span>
            <span
              class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px] border-green-400"
              ><IconsTelephone
            /></span>
          </div>
        </div>
        <div class="w-[320px] h-[320px] pt-[70px] mr-[100px]">
          <img
            :src="avtar.url"
            class="right-0 object-cover w-[320px] h-[320px] items-center justify-center rounded-full border-[10px] border-green-400"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mt-28">
      <div class="prod-container mx-auto my-8">
        <h1 class="text-4xl font-bold mb-4">Product Catalog</h1>
        <div class="product-container">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card "
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">${{ product.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["shopInfo", "banner"]);
const data = ref(props.shopInfo);
const banner = ref({
  url: "https://picsum.photos/2160/360?random=3652.webp",
});

const avtar = ref({
  url: "https://picsum.photos/2160/360?random=1234566.webp",
});
const bannerStyle = `background-image: url(${banner.value.url}); z-index: -3`;

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image:
      "https://picsum.photos/720/1080?random=Gaming+Laptop+16GB+512GB.webp",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image: "https://picsum.photos/720/1080?random=Gaming+Laptop+32GB+1TB.webp",
  },
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image:
      "https://picsum.photos/720/1080?random=Gaming+Laptop+16GB+512GB.webp",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image: "https://picsum.photos/720/1080?random=Gaming+Laptop+32GB+1TB.webp",
  },
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image:
      "https://picsum.photos/720/1080?random=Gaming+Laptop+16GB+512GB.webp",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image: "https://picsum.photos/720/1080?random=Gaming+Laptop+32GB+1TB.webp",
  },
  // Add more products as needed
];
</script>

<style scoped>

.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.product-card {
  box-sizing: border-box;
  width: 100%;
  max-width: calc(25% - 1rem); /* Four cards in a row with 1rem spacing */
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }
}

.prod-container {
  max-width: 1200px;
  margin: 0 auto;
}

.product-image {
  width: 100%;
  height: 250px; /* Adjust the height as needed */
  object-fit: cover;
  border-radius: 8px;
}

.product-name {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.product-price {
  color: #888;
  margin-top: 0.5rem;
}
</style>
