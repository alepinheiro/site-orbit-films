<script setup lang="ts">
const knowhow = [{
    id: 1,
    image: '/img/know-how/estrategia.svg',
    title: 'Estratégia na produção',
    description: 'Se você ja produziu conteúdos ou vídeos e não teve resultados, nós podemos te ajudar.'
},
{
    id: 2,
    image: '/img/know-how/anuncios.svg',
    title: 'Videos para anúncios em tráfego pago',
    description: 'Se seu negócio precisa de anúncios que convertem em vendas, nós podemos te ajudar.'
},
{
    id: 3,
    image: '/img/know-how/posicionamento.svg',
    title: 'Posicionamento nas redes sociais',
    description: 'A imagem que você está transmitindo para seu cliente é a que você gostaria? Se não, nós podemos te ajudar.'
},
{
    id: 4,
    image: '/img/know-how/analise.svg',
    title: 'Análise de conteúdo',
    description: 'Já postou um conteúdo e não teve engajamento, nós podemos te ajudar.'
},
]
</script>
<template>
    <section class="p-8 w-full flex items-center flex-col ">
        <div class="flex flex-col gap-10 mx-auto w-full max-w-7xl">
            <h1 class="text-center">Somos especialistas em
                <span>alavancar négocios através de:</span>
            </h1>
            <div class="flex flex-col md:flex-row justify-between gap-5 items-stretch">
                <article v-for="item of knowhow" :key="item.id"
                    class="flex flex-1 flex-col items-center justify-between text-center gap-5 h-full">
                    <img :src="item.image" :alt="item.title" class="h-36 w-auto">
                    <h1 class="font-black text-2xl">{{ item.title }}</h1>
                    <p class="w-30 text-lg">{{ item.description }}</p>
                </article>
            </div>
            <button class="btn btn-circle px-6 bg-eletric-purple w-fit text-white font-bold mx-auto">
                Falar com um especialista
            </button>
        </div>
    </section>
</template>
<style lang="scss"></style>
