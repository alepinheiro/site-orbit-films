<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        id: 1,
        description: 'Minha maior preocupação como criador de conteúdo era se seria seguro largar meu emprego e apenas sobreviver de acordos com marcas. O SocialBook me',
        name: 'Alexandre Costa',
        title: 'Growth Marketing Manager',
        image: '/img/footage-slider.png'
    },
    {
        id: 2,
        description: 'Minha maior preocupação como criador de conteúdo era se seria seguro largar meu emprego e apenas sobreviver de acordos com marcas. O SocialBook me',
        name: 'Alexandre Costa',
        title: 'Growth Marketing Manager',
        image: '/img/footage-slider.png'
    },
    {
        id: 3,
        description: 'Minha maior preocupação como criador de conteúdo era se seria seguro largar meu emprego e apenas sobreviver de acordos com marcas. O SocialBook me',
        name: 'Alexandre Costa',
        title: 'Growth Marketing Manager',
        image: '/img/footage-slider.png'
    },
    {
        id: 4,
        description: 'Minha maior preocupação como criador de conteúdo era se seria seguro largar meu emprego e apenas sobreviver de acordos com marcas. O SocialBook me',
        name: 'Alexandre Costa',
        title: 'Growth Marketing Manager',
        image: '/img/footage-slider.png'
    },
]
</script>
<template>
    <section class="py-10 w-full flex flex-col items-center ">
        <h1 class=" text-center py-8">
            o que dizem <br>
            <span>nossos clientes</span><br>
        </h1>
        <Swiper id="testimonialSlider" class="bg-eletric-purple" :modules="[Pagination]" :slidesPerView="'auto'"
            :centeredSlides="true" :loop="true" :pagination="true">
            <SwiperSlide v-for="item of testimonials" :key="item.id" class="p-1 !w-3/5 h-auto">
                <div class=" bg-white rounded-lg flex flex-col items-center px-2 py-4">
                    <p class="text-sm">{{ item.description }}</p>
                    <img class="h-10 mt-4" :src="item.image" :alt="item.title">
                    <p class="font-bold text-base text-eletric-purple">{{ item.name }}</p>
                    <p class="text-xs">{{ item.title }}</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>
<style lang="scss">
#testimonialSlider {

    .swiper-pagination {
        @apply bottom-7 #{!important};

        .swiper-pagination-bullet-active {
            @apply bg-white;
        }

        :not(.swiper-pagination-bullet-active) {
            @apply bg-white/80;
        }
    }

}
</style>