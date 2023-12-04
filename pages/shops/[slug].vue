<template>
    <div :class="classes">

        <LeftBanner  :data="leftBannerImages" />

        <MiddleContainer :shopInfo="shopInfo" :banner="centerBannerImages" />
        
        <RightBanner  :data="rightBannerImages" />

        <!-- long left ad section done -->
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
        <!-- long right ad section done -->

        <!-- contact us banner  -->

        <!-- right side middle setting icon for changing the theme color for store. -->
    </div>
</template>

<script setup>

import LeftBanner from '../../components/Shops/LeftBanner'
import RightBanner from '../../components/Shops/RightBanner'
import MiddleContainer from '../../components/Shops/MiddleContainer'

const route = useRoute();
const shopUrl = ref(route.params.slug);

const leftBannerImages = ref({
    url: "https://picsum.photos/240/1080?random=9658.webp"
});

const rightBannerImages = ref({
    url: "https://picsum.photos/240/1080?random=3652.webp"
});

const centerBannerImages = ref({
    url: "https://picsum.photos/1080/240?random=3652.webp"
});

const shopConfig = ref({
    background: "#ebeef5",
    text: "#7367f5"
});

const classes = `bg-[${shopConfig.value.background || '#fff'}] text-[${shopConfig.value.background || '#121212'}] flex flex-row justify-between shop-main gap-5 mt-5 w-[100%]`

const stylesmid = 'height: calc(100vh - 220px); overflow-y:scroll'

const shopInfo = ref({
    name: "TechEmpire",
    ratings: 4.8,
    slug: '',
    contact: {
        email: "support@techempire.com",
        fb: "https://fb.com",
        tg: "0965655136",
        wa: "0965655136"
    },
    banner: [
        {
            url: "https://picsum.photos/1080/720?random=1021.webp"
        },
        {
            url: "https://picsum.photos/1080/720?random=1451.webp"
        },
        {
            url: "https://picsum.photos/1080/720?random=7584.webp"
        },
        {
            url: "https://picsum.photos/1080/720?random=4512.webp"
        }
    ],
    profileImage: {
        url: "https://picsum.photos/512/512?random=4758.webp"
    },
    description:
        "Explore the ultimate gaming experience with our high-performance gaming laptop. Designed for gamers, this laptop features advanced graphics, a responsive keyboard, and a sleek design.",
    location: {
        langitude: "",
        latitude: ""
    },
    faq: [
        {
            question: "",
            answers: [
                {
                    name: "",
                    ans: ""
                }
            ]
        }
    ],
    meta: {
        title: "Ultimate Gaming Laptop",
        keywords: [
            "Gaming Laptop",
            "High-Performance Laptop",
            "Gaming",
            "Electronics",
        ],
        description:
            "Explore the ultimate gaming experience with our high-performance gaming laptop. Designed for gamers, this laptop features advanced graphics, a responsive keyboard, and a sleek design.",
        tags: ["Gaming", "Laptop", "Electronics", "TechEmpire"],
    },
});

useHead({
    title: `${shopInfo.value.name} ${shopInfo.value.description}`,
    meta: [
        {
            name: "description",
            content: `${shopInfo.value.meta.description}`,
        },
        { name: "keywords", content: `${shopInfo.value.meta.keywords}` },
        { name: "tags", content: `${shopInfo.value.meta.tags}` },
        { name: "title", content: `${shopInfo.value.meta.name}` },
    ],
});

</script>