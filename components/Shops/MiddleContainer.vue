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
      <div class="banner w-full h-[240px] flex justify-end" :style="bannerStyle">
        <div class="text-2xl font-bold pt-72 underline w-[50%] ">
            Catalogues
        </div>
        <div class="text-2xl flex flex-col items-center gap-2 font-bold pt-60 pr-10 underline ">
            {{ data.name }}
            <div class="flex gap-5">
                <span class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px] border-green-400"><IconsFacebookAnimated /></span>
                <span class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px] border-green-400"><IconsTelegramAnimated /></span>
                <span class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px] border-green-400"><IconsWhatsApp /></span>
                <span class="rounded-full flex justify-center items-center border-2 h-[50px] w-[50px] border-green-400"><IconsEmailAnimatedWithoutEmail /></span>                
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
    <div>
        <h1>Hello Darling</h1>
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
</script>
