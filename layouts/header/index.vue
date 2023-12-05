<template>
  <div class="header border-b-2 py-1 border-t-grey-400 px-10 space-between items-center">
    <div class="flex text-2xl font-bold text-gray-400 justify-center">
      <ULink to="/">
        <img :src="logo" class="h-[50px]" />
      </ULink>
    </div>
    <div v-if="data && show" :class="data ? 'header-left-menu' : 'hidden'">
      <div class="flex justify-start">
        <SearchBoxHeaderSearchInputBox />
      </div>
    </div>

    <div class="header-right-menu">
      <ULink to="/email">
        <span class="header-content font-bold">
        <IconsEmailAnimatedWithoutEmail class="text-2xl" />
      </span>
      </ULink>
      <ULink to="/shops">
        <span class="header-content font-bold">
        <IconsShop class="text-2xl" />
      </span>
      </ULink>
      <span class="header-content font-bold">
        <IconsBell class="text-2xl" />
      </span>
      <span class="header-content font-bold">
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
const route = useRouter();
const currentRoute = route.currentRoute.value.fullPath
const show = currentRoute === '/' ? false : true;
const data = inject("data");
import logo from '../../assets/images/logo.png'
</script>
