<template>
  <ULink :to="url" block target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="#2563eb"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path
          stroke-dasharray="16"
          stroke-dashoffset="16"
          d="M21 5L18.5 20M21 5L9 13.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="16;0"
          ></animate>
        </path>
        <path stroke-dasharray="22" stroke-dashoffset="22" d="M21 5L2 12.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="22;0"
          ></animate>
        </path>
        <path stroke-dasharray="12" stroke-dashoffset="12" d="M18.5 20L9 13.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.3s"
            values="12;0"
          ></animate>
        </path>
        <path stroke-dasharray="8" stroke-dashoffset="8" d="M2 12.5L9 13.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.3s"
            values="8;0"
          ></animate>
        </path>
        <path
          stroke-dasharray="6"
          stroke-dashoffset="6"
          d="M12 16L9 19M9 13.5L9 19"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.3s"
            values="6;0"
          ></animate>
        </path>
      </g>
    </svg>
  </ULink>
</template>

<script setup>
const props = defineProps(["mobile"]);
const mobile = ref(props.mobile);
const url = `https://t.me/+855${mobile.value}`;
</script>
