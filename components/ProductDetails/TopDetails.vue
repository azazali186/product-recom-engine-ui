<template>
  <div class="mt-10 flex flex-col flex-wrap">
    <h1 class="text-4xl font-bold">
      {{ selectedVariation?.title || product.title }}
    </h1>
    <br />
    <h1>
      Price: <b>{{ selectedVariation?.price || product.price
      }}{{ product.currency }}</b>
    </h1>
    <h1>Quantity: {{ selectedVariation?.quantity || product.quantity }} set available</h1>
    <br />

    <div class="flex flex-row gap-5 items-center">
      <span>Variations: </span>
      <div v-for="variation in product.variations">
        <UBadge @click="selectedVariation = variation" :color="selectedVariation == variation? 'primary' : 'white'" variant="solid" class="cursor-pointer px-[20px]" :ui="{ rounded: 'rounded-full'  }">{{ variation.id }}</UBadge>
      </div>
    </div>
    <br />

    <div>
        Seller informations: 
        <div>
            Shop Name: <ULink :to="'/'+seller.name" block target="_blank"><b>{{ seller.name }}</b></ULink>
        </div>
        <div>
            Seller Ratings: <b>{{ seller.ratings }}</b>
        </div>
        <div class="flex gap-3 items-center">
            Seller Contacts: 
        <TelegramIcon :mobile="seller.tg" />
        <WhatsAppIcon :mobile="seller.wa"/>
        <FacebookIcon :link="seller.fb"/>
        <EmailIcon :email="seller.contact"/>
        
        
        </div>
    </div>
    <br />
    <h1 class="text-xl font-bold">{{ product.title }} Key Points</h1>
    <ul class="">
      <li class="font-bold" v-for="(keyword, index) in product.keyPoints">
        {{ index + 1 }}. {{ keyword }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import TelegramIcon from '../Icons/Telegram'
import WhatsAppIcon from '../Icons/WhatsApp'
import FacebookIcon from '../Icons/Facebook'
import EmailIcon from '../Icons/Email'
const props = defineProps(["data"]);
const product = ref(props.data);
const seller = ref(props.data.sellerInfo);
var val = Math.floor(1000 + Math.random() * 3000);
const selectedVariation = ref();
</script>
