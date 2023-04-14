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
                Temos tempo e disponibilidaade
                <span> para seu negócio </span>
            </h1>
            <div class="w-full py-5">
                <Swiper id="disponibilitySlider" :modules="[Pagination]" :slidesPerView="3" :centeredSlides="true"
                    :loop="true" :pagination="true">
                    <SwiperSlide v-for="slide in 8" :key="slide">
                        <img class="h-56 object-contain" src="/img/footage-slider.png" alt="" srcset="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="flex flex-col gap-5 flex-1 w-full">
                <h2 class="text-2xl font-black">
                    Videomakers
                    <span class="text-eletric-purple">+</span>
                    Editores
                    <span class="text-eletric-purple">+</span>
                    Copywriter
                    <br>
                    Um time completo à sua disposição.
                </h2>
                <p>
                    Com uma <span class="text-eletric-purple font-bold">dinâmica high-touch</span>, nosso time trabalhará
                    diretamente com você e sua equipe, acompanhando todo
                    o processo criativo do seu projeto, da pré-produção à
                    finalização.
                </p>
                <button class="btn rounded-full bg-eletric-purple text-white my-8 w-fit mx-auto"> Falar com um
                    especialista</button>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
#disponibilitySlider {
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
