<template>
  <div
    class="shop-mid-centainer w-full flex-col flex overflow-y-scroll hide-scrollbar"
    :style="{ background: bgColor }"
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
    <UModal
      v-model="isOpen"
      :ui="{
        base: 'min-w-[1200px]',
        rounded: 'rounded-lg',
      }"
    >
      <ShopsSettingModelCard />
    </UModal>
    <div class="absolute right-0 top-[50%]">
      <div
        class="cursor-pointer rounded-full flex justify-center items-center border-2 h-[50px] w-[50px] border-green-400 bg-green-400"
        :style="{
          borderColor: theme.theme.avtarRingColor,
          background: theme.theme.avtarRingColor,
        }"
        @click="isOpen = true"
      >
        <IconsSettings />
      </div>
    </div>
    <div class="banner w-full h-[320px]">
      <div
        class="banner w-full h-[240px] flex justify-end"
        :style="bannerStyle"
      >
        <!-- <div class="text-2xl font-bold pt-72 underline w-[50%]">Catalogues</div> -->
        <div
          class="text-2xl flex flex-col items-center gap-2 font-bold pt-60 pr-10 underline"
          :style="{ color: theme.theme.snColor }"
        >
          {{ getShopInfo.name }}
          <div class="flex gap-5">
            <span
              class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px]"
              :style="{ borderColor: theme.theme.avtarRingColor }"
              ><IconsFacebookAnimated
            /></span>
            <span
              class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px]"
              :style="{ borderColor: theme.theme.avtarRingColor }"
              ><IconsTelegramAnimated :mobile="getShopInfo.tg"
            /></span>
            <span
              class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px]"
              :style="{ borderColor: theme.theme.avtarRingColor }"
              ><IconsWhatsApp :mobile="getShopInfo.wa"
            /></span>
            <span
              class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px]"
              :style="{ borderColor: theme.theme.avtarRingColor }"
              ><IconsEmailAnimated :email="getShopInfo.email"
            /></span>
            <span
              class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px]"
              :style="{ borderColor: theme.theme.avtarRingColor }"
              ><IconsTelephone
            /></span>
          </div>
        </div>
        <div class="w-[320px] h-[320px] pt-[70px] mr-[100px]">
          <img
            :src="getShopInfo?.logo"
            class="right-0 object-cover w-[320px] h-[320px] items-center justify-center rounded-full border-[10px]"
            :style="{ borderColor: theme.theme.avtarRingColor }"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mt-28">
      <!-- <div class="prod-container mx-auto my-8">
        <h1
          class="text-4xl font-bold mb-4"
          :style="{ color: theme.theme.hdColor }"
        >
          Product Catalogs
        </h1>
        <div class="product-container hide-scrollbar">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="product-card shadow-green-400 cursor-pointer shadow-sm p-2 m-2 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
            <h2 class="product-name">Catalogue {{ index }}</h2>
            <p class="product-price">${{ product.price.toFixed(2) }}</p>
          </div>
        </div>
      </div> -->
      <div class="prod-container mx-auto my-8">
        <h1
          class="text-4xl font-bold mb-4"
          :style="{ color: theme.theme.hdColor }"
        >
          Top Visited products
        </h1>
        <div class="product-container hide-scrollbar">
          <!-- <div
            v-for="(product, index) in products"
            :key="index"
            class="product-card shadow-green-400 cursor-pointer shadow-sm p-2 m-2 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">${{ product.price.toFixed(2) }}</p>
          </div> -->
          <ProductCard
            v-if="visited?.length > 0"
            v-for="product in visited"
            :data="product"
          />
          <div v-else> No Top Visited products available now.</div>
        </div>
      </div>
      <div class="prod-container mx-auto my-8">
        <h1
          class="text-4xl font-bold mb-4"
          :style="{ color: theme.theme.hdColor }"
        >
          Top Selling products
        </h1>
        <div class="product-container hide-scrollbar">
          <!-- <div
            v-for="(product, index) in products"
            :key="index"
            class="product-card shadow-green-400 cursor-pointer shadow-sm p-2 m-2 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">${{ product.price.toFixed(2) }}</p>
          </div> -->
          <ProductCard
            v-if="orders?.length > 0"
            v-for="product in orders"
            :data="product"
          />
          <div v-else> No Top Selling products available now.</div>
        </div>
      </div>
      <!-- <div class="prod-container mx-auto my-8">
        <h1
          class="text-4xl font-bold mb-4"
          :style="{ color: theme.theme.hdColor }"
        >
          Top Catagories
        </h1>
        <div class="product-container hide-scrollbar">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="product-card shadow-green-400 cursor-pointer shadow-sm p-2 m-2 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
            <h2 class="product-name">Catagory {{ index }}</h2>
          </div>
        </div>
      </div> -->
      <div class="prod-container mx-auto my-8">
        <h1
          class="text-4xl font-bold mb-4"
          :style="{ color: theme.theme.hdColor }"
        >
          Recommended products
        </h1>
        <div class="product-container hide-scrollbar">
          <!-- <div
            v-for="(product, index) in products"
            :key="index"
            class="product-card shadow-green-400 cursor-pointer shadow-sm p-2 m-2 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">${{ product.price.toFixed(2) }}</p>
          </div> -->
          <ProductCard
            v-if="recom?.length > 0"
            v-for="product in recom"
            :data="product"
          />
          <div v-else> No recommended products available now.</div>
        </div>
      </div>
      <div class="prod-container mx-auto my-8">
        <h1
          class="text-4xl font-bold mb-4"
          :style="{ color: theme.theme.hdColor }"
        >
          Most Popular products
        </h1>
        <div class="product-container hide-scrollbar">
          <!-- <div
            v-for="(product, index) in products"
            :key="index"
            class="product-card shadow-green-400 cursor-pointer shadow-sm p-2 m-2 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">${{ product.price.toFixed(2) }}</p>
          </div> -->
          <ProductCard
            v-if="popular?.length > 0"
            v-for="product in popular"
            :data="product"
          />
          <div v-else> No Most Popular products available now.</div>
        </div>
      </div>
      <div class="prod-container mx-auto my-8">
        <h1
          class="text-4xl font-bold mb-4"
          :style="{ color: theme.theme.hdColor }"
        >
          Most Liked products
        </h1>
        <div class="product-container hide-scrollbar">
          <!-- <div
            v-for="(product, index) in products"
            :key="index"
            class="product-card shadow-green-400 cursor-pointer shadow-sm p-2 m-2 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">${{ product.price.toFixed(2) }}</p>
          </div> -->
          <ProductCard
            v-if="wish?.length > 0"
            v-for="product in wish"
            :data="product"
          />
          <div v-else> No Most Liked products available now.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["shopInfo", "banner"]);
const data = ref(props.shopInfo);
const isOpen = ref(false);
import theme from "~/store/theme";
import store from "~/store";

import ProductCard from "../ProductList/ProductCard.vue";

const banner = ref(props.banner);

const products = ref([]);
const orders = ref([]);
const popular = ref([]);
const recom = ref([]);
const visited = ref([]);
const wish = ref([]);

watch(theme, () => {
  console.log("theme change ");
});

const avtar = ref(props.shopInfo.logo);
const bannerStyle = `background-image: url(${banner.value.url}); z-index: -3`;

console.log("shopInfo data ", data.value);

const getShopInfo = computed(() => {
  const contact = store.shop?.vendor?.mobile_number || "0965655136";
  const email = store.shop?.vendor?.email || "shop@example.com";
  const shop = store.shop;
  const info = {
    name: shop?.name || "AdminShop",
    slug: shop?.slug || "AdminShop",
    ratings: shop?.ratings || 0,
    logo: getLogoUrl(shop?.logo?.url),
    contact: contact,
    fb: shop?.fb || "https://fb.com",
    tg: shop?.tg || contact,
    wa: shop?.wa || contact,
    email: shop?.email || email,
  };
  console.log("shopinfo is ", info);
  return info;
});

const getLogoUrl = (url) => {
  getPopularProducts();
  if (url) {
    return "https://api.go-kh.com/" + url;
  }
  return "https://avatars.githubusercontent.com/u/739984?v=4";
};

const getPopularProducts = async () => {
  let url = "/products/public/landing-page/shop/" + getShopInfo?.value.slug;
  if (getShopInfo?.value.slug === "AdminShop") {
    url = "/products/public/landing-page";
  }
  const res = await useCustomFetch({ url });
  console.log("getPopularProducts ", res);
  products.value = res.data.visited;
  popular.value = res.data.popular;
  orders.value = res.data.orders;
  recom.value = res.data.recom;
  visited.value = res.data.visited;
  wish.value = res.data.wish;
};

/* const products = [
  {
    id: 1,
    name: "Product",
    price: 29.0,
    image:
      "https://picsum.photos/1080/1080?random=Gaming+Laptop+16GB+512GB.webp",
  },
  {
    id: 2,
    name: "Product",
    price: 29.0,
    image: "https://picsum.photos/1080/1080?random=Gaming+Laptop+32GB+1TB.webp",
  },
  {
    id: 1,
    name: "Product",
    price: 29.0,
    image:
      "https://picsum.photos/1080/1080?random=Gaming+Laptop+16GB+512GB.webp",
  },
  {
    id: 2,
    name: "Product",
    price: 29.0,
    image: "https://picsum.photos/1080/1080?random=Gaming+Laptop+32GB+1TB.webp",
  },
  {
    id: 1,
    name: "Product",
    price: 29.0,
    image:
      "https://picsum.photos/1080/1080?random=Gaming+Laptop+16GB+512GB.webp",
  },
  {
    id: 2,
    name: "Product",
    price: 29.0,
    image: "https://picsum.photos/1080/1080?random=Gaming+Laptop+32GB+1TB.webp",
  },
  {
    id: 1,
    name: "Product",
    price: 29.0,
    image:
      "https://picsum.photos/1080/1080?random=Gaming+Laptop+16GB+512GB.webp",
  },
  {
    id: 2,
    name: "Product",
    price: 29.0,
    image: "https://picsum.photos/1080/1080?random=Gaming+Laptop+32GB+1TB.webp",
  },
  // Add more products as needed
]; */
</script>

<style scoped>
.product-container {
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  padding: 20px;
}

.product-card {
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.prod-container {
  max-width: 90%;
  margin: 0 auto;
  overflow: auto;
}

.product-image {
  max-width: 250px;
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
