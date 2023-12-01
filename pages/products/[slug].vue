<template>
  <div class="flex justify-center">
    <div class="container flex flex-col mt-10">
      <div class="flex gap-5">
        <ImageSlider :data="product.images" :title="product.title" />
        <TopDetails :data="product" />
      </div>
      <!-- Left Image and Right (attributes and Name price and quantity and Buy Now and Contact to Seller Info, through InApp Email, Whats'App, Telegram, and Facebook) -->
      <!-- Product Description  -->
      <!-- Similar or recomended product -->
      <!-- Top selling product by this seller -->
      <!-- Write Review and rate product -->
      <!-- ratings and feedback of product -->
      <!-- relevent product -->
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import ImageSlider from "../../components/ProductDetails/imageSlider";
import TopDetails from "../../components/ProductDetails/TopDetails";

const route = useRoute();
const productId = ref(route.params.slug);
const product = ref({
  id: 5,
  title: "Ultimate Gaming Laptop",
  price: 1200,
  currency: "$",
  quantity: 12,
  images: [
    { url: "https://dummyimage.com/720x1080/000/fff.png&text=Blender+1" },
    { url: "https://dummyimage.com/720x1080/000/fff.png&text=Blender+2" },
    { url: "https://dummyimage.com/720x1080/000/fff.png&text=Blender+3" },
    { url: "https://dummyimage.com/720x1080/000/fff.png&text=Blender+4" },
    { url: "https://dummyimage.com/720x1080/000/fff.png&text=Blender+5" },
    { url: "https://dummyimage.com/720x1080/000/fff.png&text=Blender+6" },
    { url: "https://dummyimage.com/720x1080/000/fff.png&text=Blender+7" },
    { url: "https://dummyimage.com/720x1080/000/fff.png&text=Blender+8" },
    { url: "https://dummyimage.com/720x1080/000/fff.png&text=Blender+9" },
    { url: "https://dummyimage.com/720x1080/000/fff.png&text=Blender+10" },
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
