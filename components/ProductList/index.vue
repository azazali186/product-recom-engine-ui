<template>
  <div class="container mt-5">
    <div class="flex justify-between items-center text-2xl">
      <div>
        Search result for <b class="capitalize">{{ `mobile` }}</b> is
        <b>{{ products.length }}</b> Products
      </div>
      <div>
        <USelectMenu
          v-model="selected"
          :options="filters"
          placeholder="Select Category"
          value-attribute="id"
          option-attribute="label"
          selected-icon="i-heroicons-hand-thumb-up-solid"
          searchable
          searchable-placeholder="Search by name or favorite colors"
          :search-attributes="['label']"
          class="w-[200px]"
        >
          <UButton color="gray" class="flex-1 justify-between">
            {{ current.label }}
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
              :class="[open && 'transform rotate-90']"
            />
          </UButton>
          <template #label>
            {{ current.label }}
          </template>
        </USelectMenu>
      </div>
    </div>
    <div class="flex justify-center my-10 flex-wrap">
      <ProductCardVue v-for="product in products" :data="product" />
    </div>
  </div>
</template>

<script setup>
import ProductCardVue from "./ProductCard.vue";
const filters = [
  {
    id: "Most relavent",
    label: "Most relavent",
  },
  {
    id: "Price Low to High",
    label: "Price Low to High",
  },
  {
    id: "Price High to Low",
    label: "Price High to Low",
  },
  {
    id: "Most Popular",
    label: "Most Popular",
  },
  {
    id: "Top Selling",
    label: "Top Selling",
  },
  {
    id: "Top Rated",
    label: "Top Rated",
  },
];
const selected = ref(filters[0].id);

const current = computed(() => filters.find((ct) => ct.id === selected.value));

const products = [
  {
    id: 1,
    title: "Exclusive mobile with awesome features",
    price: 400,
    currency: "$",
    quantity: 50,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Exclusive+mobile+with+awesome+features+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Exclusive+mobile+with+awesome+features+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Exclusive+mobile+with+awesome+features+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Exclusive+mobile+with+awesome+features+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Exclusive+mobile+with+awesome+features+5",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Exclusive+mobile+with+awesome+features+6",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Exclusive+mobile+with+awesome+features+7",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Exclusive+mobile+with+awesome+features+8",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Exclusive+mobile+with+awesome+features+9",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Exclusive+mobile+with+awesome+features+10",
      },
    ],
  },
  {
    id: 2,
    title: "High-end Smartphone with Advanced Features",
    price: 600,
    currency: "$",
    quantity: 30,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=High-end+Smartphone+with+Advanced+Features+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=High-end+Smartphone+with+Advanced+Features+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=High-end+Smartphone+with+Advanced+Features+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=High-end+Smartphone+with+Advanced+Features+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=High-end+Smartphone+with+Advanced+Features+5",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=High-end+Smartphone+with+Advanced+Features+6",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=High-end+Smartphone+with+Advanced+Features+7",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=High-end+Smartphone+with+Advanced+Features+8",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=High-end+Smartphone+with+Advanced+Features+9",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=High-end+Smartphone+with+Advanced+Features+10",
      },
    ],
  },
  {
    id: 3,
    title: "Premium Camera Phone for Photography Enthusiasts",
    price: 800,
    currency: "$",
    quantity: 20,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Premium+Camera+Phone+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Premium+Camera+Phone+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Premium+Camera+Phone+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Premium+Camera+Phone+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Premium+Camera+Phone+5",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Premium+Camera+Phone+6",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Premium+Camera+Phone+7",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Premium+Camera+Phone+8",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Premium+Camera+Phone+9",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Premium+Camera+Phone+10",
      },
    ],
  },
  {
    id: 4,
    title: "Smart Fitness Tracker with Health Monitoring",
    price: 150,
    currency: "$",
    quantity: 50,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Fitness+Tracker+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Fitness+Tracker+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Fitness+Tracker+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Fitness+Tracker+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Fitness+Tracker+5",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Fitness+Tracker+6",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Fitness+Tracker+7",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Fitness+Tracker+8",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Fitness+Tracker+9",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Fitness+Tracker+10",
      },
    ],
  },
  {
    id: 5,
    title: "Ultimate Gaming Laptop",
    price: 1200,
    currency: "$",
    quantity: 15,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Gaming+Laptop+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Gaming+Laptop+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Gaming+Laptop+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Gaming+Laptop+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Gaming+Laptop+5",
      },
    ],
  },
  {
    id: 6,
    title: "Premium Noise-Canceling Headphones",
    price: 250,
    currency: "$",
    quantity: 25,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Noise-Canceling+Headphones+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Noise-Canceling+Headphones+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Noise-Canceling+Headphones+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Noise-Canceling+Headphones+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Noise-Canceling+Headphones+5",
      },
    ],
  },
  {
    id: 7,
    title: "Slim and Lightweight Ultrabook",
    price: 900,
    currency: "$",
    quantity: 20,
    images: [
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=Ultrabook+1" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=Ultrabook+2" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=Ultrabook+3" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=Ultrabook+4" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=Ultrabook+5" },
    ],
  },
  {
    id: 8,
    title: "Home Security Camera Kit",
    price: 300,
    currency: "$",
    quantity: 18,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Security+Camera+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Security+Camera+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Security+Camera+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Security+Camera+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Security+Camera+5",
      },
    ],
  },
  {
    id: 9,
    title: "High-Fidelity Bluetooth Speaker",
    price: 80,
    currency: "$",
    quantity: 35,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Bluetooth+Speaker+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Bluetooth+Speaker+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Bluetooth+Speaker+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Bluetooth+Speaker+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Bluetooth+Speaker+5",
      },
    ],
  },
  {
    id: 10,
    title: "Smart 4K Ultra HD TV",
    price: 1200,
    currency: "$",
    quantity: 12,
    images: [
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+TV+1" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+TV+2" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+TV+3" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+TV+4" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+TV+5" },
    ],
  },
  {
    id: 11,
    title: "Pro DSLR Camera Kit",
    price: 1800,
    currency: "$",
    quantity: 8,
    images: [
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=DSLR+Camera+1" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=DSLR+Camera+2" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=DSLR+Camera+3" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=DSLR+Camera+4" },
      { url: "https://dummyimage.com/720x1080/000/fff.png&text=DSLR+Camera+5" },
    ],
  },
  {
    id: 12,
    title: "Home Espresso Machine",
    price: 250,
    currency: "$",
    quantity: 20,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Espresso+Machine+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Espresso+Machine+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Espresso+Machine+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Espresso+Machine+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Espresso+Machine+5",
      },
    ],
  },
  {
    id: 13,
    title: "Ergonomic Office Chair",
    price: 150,
    currency: "$",
    quantity: 30,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Ergonomic+Chair+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Ergonomic+Chair+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Ergonomic+Chair+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Ergonomic+Chair+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Ergonomic+Chair+5",
      },
    ],
  },
  {
    id: 14,
    title: "Wireless Charging Pad",
    price: 30,
    currency: "$",
    quantity: 40,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Wireless+Charging+Pad+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Wireless+Charging+Pad+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Wireless+Charging+Pad+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Wireless+Charging+Pad+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Wireless+Charging+Pad+5",
      },
    ],
  },
  {
    id: 15,
    title: "Professional Drawing Tablet",
    price: 350,
    currency: "$",
    quantity: 15,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Drawing+Tablet+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Drawing+Tablet+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Drawing+Tablet+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Drawing+Tablet+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Drawing+Tablet+5",
      },
    ],
  },
  {
    id: 16,
    title: "Smart Home Thermostat",
    price: 120,
    currency: "$",
    quantity: 25,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Thermostat+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Thermostat+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Thermostat+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Thermostat+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Smart+Thermostat+5",
      },
    ],
  },
  {
    id: 17,
    title: "Mini Air Purifier",
    price: 80,
    currency: "$",
    quantity: 30,
    images: [
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Air+Purifier+1",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Air+Purifier+2",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Air+Purifier+3",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Air+Purifier+4",
      },
      {
        url: "https://dummyimage.com/720x1080/000/fff.png&text=Air+Purifier+5",
      },
    ],
  },
];

useHead({
  title: `Mobile search Result`,
  meta: [
    {
      name: "description",
      content:
        "This is the product search engine. It saves your searching time for the product it provide you the best and suitable result based on your searching product.",
    },
    { name: "keywords", content: "mobile" },
  ],
});
</script>
