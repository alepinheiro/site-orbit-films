<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const clients = [
    {
        id: 1,
        title: 'Google',
        image: '/img/clients/google.png'
    },
    {
        id: 2,
        title: 'Marc Jacobs',
        image: '/img/clients/marc-jacobs.png'
    },
    {
        id: 3,
        title: 'Rentalmed',
        image: '/img/clients/rentalmed.png'
    },
    {
        id: 4,
        title: 'Calvin Klein',
        image: '/img/clients/calvin-klein.png'
    },
    {
        id: 5,
        title: 'Dior',
        image: '/img/clients/dior.png'
    },
    {
        id: 6,
        title: 'Channel',
        image: '/img/clients/channel.png'
    },
    {
        id: 7,
        title: 'Supreme',
        image: '/img/clients/supreme.png'
    },
]
</script>
<template>
    <section class="p-8 ">

        <div id="businessSlider" class="w-full p-5 rounded-lg bg-white flex flex-col items-center max-w-3xl mx-auto">
            <h1 class="text-center w-5/6">
                Algumas das empresas que confiam
                <span> no nosso trabalho</span>
            </h1>
            <Swiper :modules="[Pagination, Autoplay]" :slidesPerView="3" :autoplay="true" :centeredSlides="true"
                :loop="true" :pagination="true">
                <SwiperSlide v-for="item of clients" :key="item.id" class="">
                    <img :src="item.image" :alt="item.title">
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>
<style lang="scss">
#businessSlider {


    .swiper-slide {
        @apply transition-all;
    }

    .swiper-slide-active {
        @apply saturate-100;
    }

    .swiper-slide:not(.swiper-slide-active) {
        @apply saturate-0;
    }

}
</style>
