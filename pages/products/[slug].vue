<template>
  <div class="flex justify-center">
    <div class="container flex flex-col mt-10">
      <div class="flex gap-5">
        <ImageSlider :data="product.images" :title="productTitle" />
        <TopDetails :data="productData" :sellerInfo="sellerInfo" />
      </div>
      <div>
        <ProductDetailsProductDesc :data="productDescription" />
      </div>
      <!-- <div class="flex flex-col">
        <div class="text-2xl font-bold text-center mt-10">
          Recommended Products:
        </div>
        <div class="flex justify-center my-2 gap-10 relative flex-wrap mb-10">
          <ProductCardVue v-for="product in products" :data="product" />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-2xl font-bold text-center mt-10">
          Top Selling Products:
        </div>
        <div class="flex justify-center my-2 gap-10 relative flex-wrap mb-10">
          <ProductCardVue v-for="product in products" :data="product" />
        </div>
      </div> -->
      <ProductDetailsWriteReview />
      <div class="flex flex-col gap-5 pb-10 pt-5">
        <div class="text-center text-2xl font-bold">
          Customers Feedback: From 1 to 10
        </div>
        <div class="py-3" v-for="i in 10">
          <ProductDetailsFeedbacks />
        </div>
      </div>
      <!-- <div class="flex flex-col">
        <div class="text-2xl font-bold text-center mt-10">
          Relavent Products:
        </div>
        <div class="flex justify-center my-2 gap-10 relative flex-wrap mb-10">
          <ProductCardVue v-for="product in products" :data="product" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import ImageSlider from "../../components/ProductDetails/imageSlider";
import TopDetails from "../../components/ProductDetails/TopDetails";
import ProductCardVue from "../../components/ProductList/ProductCard";
import store from "~/store";
import productStore from "~/store/product";
// https://picsum.photos/720/1080?random=100.webp
const route = useRoute();
const productId = ref(route.params.slug);
const seoData = ref({
  title:"",
  description:"",
  keywords:[],
  tags:[]
})

const sellerInfo = ref({
  name: "AdminShop",
  slug: "AdminShop",
  ratings: 5,
  logo: "https://avatars.githubusercontent.com/u/739984?v=4",
  contact: "support@adminshop.com",
  fb: "https://fb.com",
  tg: "0965655136",
  wa: "0965655136",
});



const productData = ref({});
const productTitle = ref("");
const productDescription = ref("");

const product = ref({
  id: 5,
  title: "Ultimate Gaming Laptop",
  price: 1200,
  currency: "$",
  quantity: 12,
  images: [
    { url: "https://picsum.photos/720/1080?random=101.webp" },
    { url: "https://picsum.photos/720/1080?random=102.webp" },
    { url: "https://picsum.photos/720/1080?random=103.webp" },
    { url: "https://picsum.photos/720/1080?random=104.webp" },
    { url: "https://picsum.photos/720/1080?random=105.webp" },
    { url: "https://picsum.photos/720/1080?random=106.webp" },
    { url: "https://picsum.photos/720/1080?random=107.webp" },
    { url: "https://picsum.photos/720/1080?random=108.webp" },
    { url: "https://picsum.photos/720/1080?random=109.webp" },
    { url: "https://picsum.photos/720/1080?random=110.webp" },
  ],
  status: "In Stock",
  category: "Electronics",
  tags: ["Gaming", "Laptop", "High-Performance"],
  keyPoints: [
    "Powerful gaming performance",
    "High-resolution display",
    "Advanced graphics capabilities",
    "Responsive keyboard for gaming",
    "Sleek and portable design",
  ],
  description:
    "Experience unparalleled gaming with our Ultimate Gaming Laptop. Equipped with advanced graphics capabilities, a high-resolution display, and a responsive keyboard, this laptop ensures a smooth and immersive gaming experience. Its sleek and portable design makes it perfect for gaming on the go. Whether you're a professional gamer or a casual enthusiast, this laptop delivers the power you need. Dive into your favorite games with confidence, knowing you have the ultimate gaming companion by your side.",
  variations: [
    {
      name: "RAM",
      values: [
        {
          id: "16GB",
          title: "Ultimate Gaming Laptop - 16GB RAM",
          price: 1200,
          quantity: 8,
          currency: "$",
        },
        {
          id: "32GB",
          title: "Ultimate Gaming Laptop - 32GB RAM",
          price: 1400,
          quantity: 4,
          currency: "$",
        },
      ],
    },
  ],
  sellerInfo: {
    name: "TechEmpire",
    ratings: 4.8,
    contact: "support@techempire.com",
    fb: "https://fb.com",
    tg: "0965655136",
    wa: "0965655136",
  },
  meta: {
    title: "Ultimate Gaming Laptop",
    keywords: [
      "Gaming Laptop",
      "High-Performance Laptop",
      "Gaming",
      "Electronics",
    ],
    description:
      "Explore the ultimate gaming experience with our high-performance gaming laptop. Designed for gamers, this laptop features advanced graphics, a responsive keyboard, and a sleek design.",
    tags: ["Gaming", "Laptop", "Electronics", "TechEmpire"],
  },
});

onMounted(async () => {
  store.isLoading = true;
  try {
    const res = await useCustomFetch({
      url: `/products/details/${productId.value}`,
    });
    productData.value = res.data;
    productStore.selectedProduct = productData.value;
    if(productData.value.created_by){
      const shop = productData.value.created_by?.shop;
      sellerInfo.value = {
        name : shop?.name,
        slug: shop?.slug,
        ratings: shop?.ratings || 0,
        logo: shop?.logo?.url || "https://avatars.githubusercontent.com/u/739984?v=4",
        contact: productData.value.created_by.mobile_number,
        fb: shop?.fb || "https://fb.com",
        tg: shop?.tg || productData.value.created_by.mobile_number,
        wa: shop?.wa || productData.value.created_by.mobile_number,
      }
    }
    store.isLoading = false;
  } catch (error) {
    store.isLoading = false;
  }
  store.isLoading = true;
});

useHead({
  title: `${product.value.title}`,
  description: `${product.value.description}`,
  meta: [
    {
      name: "description",
      content: `${product.value.meta.description}`,
    },
    { name: "keywords", content: `${product.value.meta.keywords}` },
    { name: "tags", content: `${product.value.meta.tags}` },
    { name: "title", content: `${product.value.meta.title}` },
  ],
});
</script>
