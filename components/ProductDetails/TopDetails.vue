<template>
  <div class="mt-10 flex flex-col flex-wrap">
    <h1 class="text-4xl font-bold">
      {{ selectedVariation ? getVariationName : getName }}
    </h1>
    <br />
    <h1>
      Price:
      <b>{{ price }} {{ currency }}</b>
    </h1>
    <h1>Quantity: {{ qty }} set available</h1>
    <br />

    <div class="flex flex-col gap-5 items-center">
      <div v-for="variation in variations" class="w-full">
        <div class="flex flex-row gap-5 w-full">
          <span
            ><b>{{ variation.name }}:</b></span
          >
          <UBadge
            v-for="val in variation.values"
            @click="selectVariation(val)"
            :color="selectedVariation == val ? 'green' : 'white'"
            variant="solid"
            class="cursor-pointer px-[20px] shadow-sm shadow-green-400"
            :ui="{ rounded: 'rounded-full' }"
            >{{ val }}</UBadge
          >
        </div>
      </div>
    </div>
    <br />

    <div v-if="seller">
      <b>Seller informations:</b>
      <div class="flex items-center gap-5">
        Shop Name:
        <ULink :to="'/shops/' + seller.name" block
          ><b>{{ seller.name }}</b></ULink
        >
        <ULink :to="'/shops/' + seller.name" block
          ><UAvatar
            :src="seller.logo"
            :alt="seller.name"
            class="cursor-pointer"
        /></ULink>
      </div>
      <div class="flex items-center gap-2">
        Seller Ratings: <b class="text-[20px]">{{ seller.ratings }}</b> ⭐
      </div>
    </div>
    <br />
    <h1 v-if="getFeatures?.length > 0" class="text-xl font-bold">
      {{ selectedVariation ? getVariationName : getName }} Key Points
    </h1>
    <ul v-if="getFeatures?.length > 0">
      <li class="font-bold" v-for="(keyword, index) in getFeatures">
        {{ index + 1 }}. {{ keyword.translations[0].name }}
      </li>
    </ul>
    <br />
    <div class="flex gap-3 items-center" v-if="seller">
      <ULink :to="'/shops/' + seller.slug" block
        ><button
          class="w-[135px] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span
            class="relative px-5 py-2.5 hover:text-white font-bold dark:text-white transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            Contact Seller
          </span>
        </button></ULink
      >

      <TelegramIcon
        class="text-[24px] hover:scale-150 transition-shadow ease-in-out rounded-full hover:shadow-blue-600 shadow-lg"
        :mobile="seller.tg"
      />
      <WhatsAppIcon
        class="text-[24px] hover:scale-150 transition-shadow ease-in-out rounded-full hover:shadow-green-400 shadow-lg"
        :mobile="seller.wa"
      />
      <FacebookIcon
        class="text-[24px] hover:scale-150 transition-shadow ease-in-out rounded-full hover:shadow-blue-600 shadow-lg"
        :link="seller.fb"
      />
      <EmailIcon
        class="text-[24px] hover:scale-150 transition-shadow ease-in-out rounded-full hover:shadow-red-400 shadow-lg cursor-pointer"
        :email="seller.contact"
      />
    </div>
  </div>
</template>

<script setup>
import TelegramIcon from "../Icons/TelegramAnimated";
import WhatsAppIcon from "../Icons/WhatsApp";
import FacebookIcon from "../Icons/FacebookAnimated";
import EmailIcon from "../Icons/EmailAnimated";
import productStore from "~/store/product";
import { convertVariationsArray } from "~/helpers/Utils";
const props = defineProps(["sellerInfo"]);
const seller = ref(props.sellerInfo);
const selectedVariation = ref(null);
const product = ref(productStore?.selectedProduct);

const price = ref(0);
const currency = ref(null);
const qty = ref();

const selectVariation = (val) => {
  selectedVariation.value = val;
};

watch(productStore, () => {
  console.log("product watch", productStore.selectedProduct);
});

const getName = computed(() => {
  if (productStore?.selectedProduct?.translations?.length > 0) {
    qty.value = productStore.selectedProduct.quantity;
    productStore.translation = productStore.selectedProduct.translations[0];
    if (productStore?.selectedProduct?.stocks?.length > 0) {
      console.log("price", productStore.selectedProduct.stocks[0].price[0]);
      price.value = productStore.selectedProduct.stocks[0].price[0]?.price;
      currency.value =
        productStore.selectedProduct.stocks[0].price[0]?.currency?.symbol;
    }
    qty.value = productStore.selectedProduct.quantity;
    return productStore.selectedProduct.translations[0].name;
  }
  return "";
});

watch(selectedVariation, () => {
  console.log("Selected valriations ", selectedVariation.value);
  console.log(getVariationName);
});

const getVariationName = computed(() => {
  if (selectedVariation.value) {
    const matchingStock = productStore.selectedProduct.stocks.find((st) => {
      console.log("st", st.sku.includes(selectedVariation.value));
      return (
        st?.translations?.length > 0 && st.sku.includes(selectedVariation.value)
      );
    });
    if (matchingStock) {
      productStore.matchStock = matchingStock;
      productStore.selectedVariarion = selectedVariation;
      productStore.stockTranslation = matchingStock.translations[0];
      qty.value = matchingStock.quantity;
      price.value = matchingStock.price[0]?.price;
      currency.value = matchingStock.price[0]?.currency?.symbol;
      return matchingStock.translations[0].name;
    }
  }
  return "";
});

const variations = computed(() => {
  if (productStore?.selectedProduct?.variations?.length > 0) {
    const v = convertVariationsArray(productStore.selectedProduct.variations);
    console.log("variations are ", v);
    return v;
  }
  return null;
});

const getFeatures = computed(() => {
  if (productStore?.selectedProduct?.features?.length > 0) {
    const features = productStore?.selectedProduct?.features;
    return features;
  }
  return null;
});
</script>
