<template>
  <div class="mt-10 flex flex-col flex-wrap">
    <h1 class="text-4xl font-bold">
      {{ selectedVariation?.title || product.title }}
    </h1>
    <br />
    <h1>
      Price:
      <b
        >{{ selectedVariation?.price || product.price
        }}{{ product.currency }}</b
      >
    </h1>
    <h1>
      Quantity: {{ selectedVariation?.quantity || product.quantity }} set
      available
    </h1>
    <br />

    <div class="flex flex-row gap-5 items-center">
      <div v-for="variation in product.variations">
        <div class="flex flex-row gap-5 items-center">
          <span
            ><b>{{ variation.name }}:</b></span
          >
          <UBadge
            v-for="val in variation.values"
            @click="selectedVariation = val"
            :color="selectedVariation == val ? 'primary' : 'white'"
            variant="solid"
            class="cursor-pointer px-[20px]"
            :ui="{ rounded: 'rounded-full' }"
            >{{ val.id }}</UBadge
          >
        </div>
      </div>
    </div>
    <br />

    <div>
      <b>Seller informations:</b>
      <div class="flex items-center gap-5">
        Shop Name:
        <ULink :to="'/shop/' + seller.name" block target="_blank"
          ><b>{{ seller.name }}</b></ULink
        >  
        <ULink :to="'/shop/' + seller.name" block target="_blank"
          ><UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          :alt="seller.name"
          class="cursor-pointer"
        /></ULink>
      </div>
      <div>
        Seller Ratings: <b>{{ seller.ratings }}</b>
      </div>
    </div>
    <br />
    <h1 v-if="product?.keyPoints?.length > 0 " class="text-xl font-bold">{{ product.title }} Key Points</h1>
    <ul v-if="product?.keyPoints?.length > 0 " >
      <li class="font-bold" v-for="(keyword, index) in product?.keyPoints">
        {{ index + 1 }}. {{ keyword }}
      </li>
    </ul>
    <br />
    <div class="flex gap-3 items-center">
      <button
        class="w-[100px] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span
          class="relative px-5 py-2.5 hover:text-white font-bold dark:text-white transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          Buy Now
        </span>
      </button>

      <TelegramIcon class="text-[24px] hover:scale-150 transition-shadow ease-in-out rounded-full hover:shadow-blue-600 shadow-lg" :mobile="seller.tg" />
      <WhatsAppIcon class="text-[24px] hover:scale-150 transition-shadow ease-in-out rounded-full hover:shadow-green-400 shadow-lg" :mobile="seller.wa" />
      <FacebookIcon class="text-[24px] hover:scale-150 transition-shadow ease-in-out rounded-full hover:shadow-blue-600 shadow-lg" :link="seller.fb" />
      <EmailIcon class="text-[24px] hover:scale-150 transition-shadow ease-in-out rounded-full hover:shadow-red-400 shadow-lg cursor-pointer" :email="seller.contact" />
    </div>
  </div>
</template>

<script setup>
import TelegramIcon from "../Icons/TelegramAnimated";
import WhatsAppIcon from "../Icons/WhatsApp";
import FacebookIcon from "../Icons/FacebookAnimated";
import EmailIcon from "../Icons/EmailAnimated";
const props = defineProps(["data"]);
const product = ref(props.data);
const seller = ref(props.data?.sellerInfo);
const selectedVariation = ref();
</script>
