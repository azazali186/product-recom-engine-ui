<template>
  <div
    class="w-[415px] h-[650px] mt-10 shadow-gray-400 overflow-hidden cursor-pointer shadow-lg m-5 p-5 flex flex-col justify-around hover:shadow-md hover:shadow-blue-600 transition-shadow ease-in-out"
  >
    <Flicking
      :options="{
        circular: true,
      }"
      ref="flicking"
      :plugins="plugins"
    >
      <div class="panel" v-for="imgs in images">
        <img
          :src="imgs.url"
          class="object-contain h-[95%] w-[100%]"
          :alt="title"
        />
      </div>
      <template #viewport>
        <span class="flicking-arrow-prev is-circle"></span>
        <span class="flicking-arrow-next is-circle"></span>
      </template>
    </Flicking>
  </div>
</template>

<script setup>
import Flicking from "@egjs/vue3-flicking";
import { Fade, AutoPlay, Arrow } from "@egjs/flicking-plugins";

const props = defineProps(["data", "title"]);
const images = ref(props.data);
const title = ref(props.title);


const plugins = [
  new AutoPlay(),
  new Fade(),
  new Arrow(),
];
var val = Math.floor(1000 + Math.random() * 10000);
</script>
