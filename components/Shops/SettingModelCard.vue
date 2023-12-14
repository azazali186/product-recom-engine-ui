<template>
  <UCard
    :ui="{
      base: 'h-[90%] flex flex-col',
      ring: '',
      divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      body: {
        base: 'grow',
      },
    }"
  >
    <template #header>
      <div class="flex justify-center items-center gap-5">
        <!-- <UTooltip
          text="Applicable only for shop page"
          :shortcuts="['⌘', 'O']"
          :popper="{ placement: 'right' }"
        > -->
        Set Theme Color
        <!-- </UTooltip> -->
      </div>
    </template>

    <div class="flex flex-col justify-center items-center gap-20">
      <div class="flex justify-between items-center w-[95%]">
        <span class="flex justify-around items-center w-[95%]"
          ><span>Background Color:</span
          ><span
            ><ColorPicker
              theme="light"
              :color="bgColor"
              @changeColor="changeBGColor" /></span
        ></span>
        <span class="flex justify-around items-center w-[95%]"
          ><span>Text Color:</span
          ><span
            ><ColorPicker
              theme="light"
              :color="txColor"
              @changeColor="changeTXColor" /></span
        ></span>
        <span class="flex justify-around items-center w-[95%]"
          ><span>Shop Name Color:</span
          ><span
            ><ColorPicker
              theme="light"
              :color="snColor"
              @changeColor="changeSNColor" /></span
        ></span>
      </div>
      <div class="flex justify-between items-center w-[95%]">
        <span class="flex justify-around items-center w-[95%]"
          ><span>Headings Color:</span
          ><span
            ><ColorPicker
              theme="light"
              :color="hdColor"
              @changeColor="changeHDColor" /></span
        ></span>
        <span class="flex justify-around items-center w-[95%]"
          ><span>Shop Logo Ring Color:</span
          ><span
            ><ColorPicker
              theme="light"
              :color="avtarRingColor"
              @changeColor="changeAVColor" /></span
        ></span>
      </div>
    </div>
  </UCard>
</template>

<script setup>
import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";
import theme from "~/store/theme";

const bgColor = ref(theme.theme.bgColor);
const txColor = ref(theme.theme.txColor);
const snColor = ref(theme.theme.snColor);
const hdColor = ref(theme.theme.hdColor);
const avtarRingColor = ref(theme.theme.avtarRingColor);

const changeBGColor = (color) => {
  const { r, g, b, a } = color.rgba;
  bgColor.value = `rgba(${r}, ${g}, ${b}, ${a})`;
  theme.theme.bgColor = bgColor.value;
};

const changeTXColor = (color) => {
  const { r, g, b, a } = color.rgba;
  txColor.value = `rgba(${r}, ${g}, ${b}, ${a})`;
  theme.theme.txColor = txColor.value;
};

const changeSNColor = (color) => {
  const { r, g, b, a } = color.rgba;
  snColor.value = `rgba(${r}, ${g}, ${b}, ${a})`;
  theme.theme.snColor = snColor.value;
};

const changeHDColor = (color) => {
  const { r, g, b, a } = color.rgba;
  hdColor.value = `rgba(${r}, ${g}, ${b}, ${a})`;
  theme.theme.hdColor = hdColor.value;
};

const changeAVColor = (color) => {
  const { r, g, b, a } = color.rgba;
  avtarRingColor.value = `rgba(${r}, ${g}, ${b}, ${a})`;
  theme.theme.avtarRingColor = avtarRingColor.value;
};
</script>
