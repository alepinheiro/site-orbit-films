<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
</script>
<template>
    <section class="pt-14">
        <div class="flex flex-col lg:flex-row items-center text-center max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-1 items-center ">
                <h1>
                    Escale suas vendas com
                    <span> videos que geram resultados </span>
                </h1>
                <p class="w-4/5 hidden lg:block lg:py-4">
                    Somos uma produtora de vídeos
                    especializada em vídeomarketing e geramos
                    resultados para o seu negócio através da
                    produção de vídeos estratégicos.
                </p>
                <button class="btn rounded-full bg-eletric-purple text-white my-4 hidden lg:block"> Falar com um
                    especialista</button>
            </div>

            <div class="w-full lg:w-1/2 pb-5 lg:flex-1 ">
                <Swiper id="heroSlider" :modules="[Pagination, Autoplay]" :slidesPerView="3" :centeredSlides="true"
                    :loop="true" :pagination="true" :autoplay="true">
                    <SwiperSlide v-for="slide in 8" :key="slide">
                        <img class="h-56 lg:h-72 object-contain" src="/img/footage-slider.png" alt="" srcset="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <p class="w-4/5 lg:hidden">
                Somos uma produtora de vídeos
                especializada em vídeomarketing e geramos
                resultados para o seu negócio através da
                produção de vídeos estratégicos.
            </p>
            <button class="btn rounded-full bg-eletric-purple text-white my-8 lg:hidden"> Falar com um especialista</button>
        </div>
    </section>
</template>
<style lang="scss">
#heroSlider {


    .swiper-slide {
        @apply transition-all;
    }

    .swiper-slide-active {
        transform: scale(2) !important;
        z-index: 1;
        @apply drop-shadow-md;
    }

    .swiper-slide:not(.swiper-slide-active) {
        @apply blur-sm;
    }

    .swiper-pagination {
        @apply bottom-0 #{!important};

        .swiper-pagination-bullet-active {
            @apply bg-eletric-purple;
        }

        :not(.swiper-pagination-bullet-active) {
            @apply bg-eletric-purple/80;
        }
    }

}
</style>
