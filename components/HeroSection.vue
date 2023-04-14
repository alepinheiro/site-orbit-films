<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
</script>
<template>
    <section class="pt-14">
        <div class="flex flex-col items-center text-center">
            <h1>
                Escale suas vendas com
                <span> videos que geram resultados </span>
            </h1>
            <div class="w-full py-5">
                <Swiper id="heroSlider" :modules="[Pagination]" :slidesPerView="3" :centeredSlides="true" :loop="true"
                    :pagination="true">
                    <SwiperSlide v-for="slide in 8" :key="slide">
                        <img class="h-56 object-contain" src="/img/footage-slider.png" alt="" srcset="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <p class="w-4/5">
                Somos uma produtora de vídeos
                especializada em vídeomarketing e geramos
                resultados para o seu negócio através da
                produção de vídeos estratégicos.
            </p>
            <button class="btn rounded-full bg-eletric-purple text-white my-8"> Falar com um especialista</button>
        </div>
    </section>
</template>
<style lang="scss">
#heroSlider {

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
