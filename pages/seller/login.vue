﻿<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="login-card border-1 rounded-lg border-green-400 shadow-lg shadow-gray-400 flex flex-col gap-10 p-10 hover:shadow-md hover:shadow-blue-600"
    >
      <div class="text-4xl font-bold flex justify-center items-center">
        Merchant Login
      </div>
      <div class="flex gap-5 w-[100%] justify-center items-center">
        <span class="login-input-lable">Email: </span>
        <span class="login-input-box"
          ><UInput v-model="email" autocomplete="off" placeholder="***@***.***">
            <template #leading>
              <IconsEmailAnimated />
            </template> </UInput
        ></span>
      </div>
      <div class="flex gap-5 w-[100%] justify-center items-center">
        <span class="login-input-lable">Password: </span>
        <span class="login-input-box"
          ><UInput
            v-model="password"
            autocomplete="off"
            placeholder="***@***.***"
            :type="!show ? 'password' : 'text'"
            :ui="{ icon: { trailing: { pointer: '' } } }"
          >
            <template #trailing>
              <div class="cursor-pointer">
                <template v-if="show">
                  <IconsEyeShow @click="show = !show" />
                </template>
                <template v-else>
                  <IconsEyeHide @click="show = !show" />
                </template>
              </div>
            </template> </UInput
        ></span>
      </div>
      <div class="flex justify-center items-center">
        <button
        @click="submitLogin"
          class="w-[80px] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span
            class="relative px-5 py-2.5 hover:text-white font-bold dark:text-white transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            Login
          </span>
        </button>
      </div>
      <div class="flex justify-center gap-2 items-center">
        Don't have seller account
        <ULink to="/seller/register" class="hover:text-green-400 font-bold">
          Register Here
        </ULink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
const email = ref();
const password = ref();
const show = ref(true);

const submitLogin = async () => {
  try {
    const res = await useCustomFetch({
      url: "/auth/login",
      method: "POST",
      body: {
        username: email.value,
        password: password.value,
      },
    });
    const result = res.data;
    if (result?.token) {
      localStorage.setItem("search-engin-login-token", result.token);
    }
    if (result?.user) {
      localStorage.setItem("search-engin-login-user", JSON.stringify(result.user));
    }
    navigateTo("/dashboard");
  } catch (error) {}
};
</script>
