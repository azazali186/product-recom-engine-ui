<template>
    <div class="flex gap-5 flex-col border-1  rounded-lg border-green-400 shadow-sm shadow-green-400 p-10 hover:shadow-md hover:shadow-blue-600">
        <div class="flex gap-5 items-center">
            <span class="text-lg font-bold">Customer Name : </span>
            <span class="text-lg font-bold">Sam Khan </span>
        </div>
        <div class="flex gap-[78px] items-center">
            <span class="text-lg font-bold">Feedback: </span>
            <span class="text-lg font-bold">{{ desc }}</span>
        </div>
        <div class="flex gap-[88px] items-center">
            <span class="text-lg font-bold">Ratings : </span>
            <span class="text-lg font-bold flex gap-1 items-center">4.8 <IconsStarFilled/> </span>
        </div>
        <div class="flex gap-[88px] items-center">
            <span class="text-lg font-bold">Images : </span>
            <span class="flex gap-2"><img :src="imgs" v-for="imgs in images" class="w-[150px] object-contain"/> </span>
        </div>
    </div>
</template>
<script setup>
const images = [
    "https://picsum.photos/1080/1080?random=Exclusive+mobile+with+awesome+features+21.webp",
    "https://picsum.photos/1080/1080?random=Exclusive+mobile+with+awesome+features+22.webp",
    "https://picsum.photos/1080/1080?random=Exclusive+mobile+with+awesome+features+23.webp",
    "https://picsum.photos/1080/1080?random=Exclusive+mobile+with+awesome+features+24.webp",
    "https://picsum.photos/1080/1080?random=Exclusive+mobile+with+awesome+features+25.webp",
]

const desc = ref("Experience unparalleled gaming with our Ultimate Gaming Laptop. Equipped with advanced graphics capabilities, a high-resolution display, and a responsive keyboard, this laptop ensures a smooth and immersive gaming experience. Its sleek and portable design makes it perfect for gaming on the go. Whether you're a professional gamer or a casual enthusiast, this laptop delivers the power you need. Dive into your favorite games with confidence, knowing you have the ultimate gaming companion by your side.")
</script>