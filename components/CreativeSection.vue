<script setup lang="ts">
const creativeSteps = [
    {
        id: 5,
        image: '/img/creative/distribuicao.svg',
        class: 'order-6',
        title: 'Distribuição',
        description: 'Depois de finalizar setJS vídeos, é hora de começar a Usar os canais de distribuição apropriados para atingir seu objetivo.'
    },
    {
        id: 6,
        image: '/img/creative/hero-image.svg',
        class: 'order-1 lg:row-span-2',
        title: '',
        description: ''
    },
    {
        id: 1,
        image: '/img/creative/reuniao.svg',
        class: 'order-2',
        title: 'Reunião | Briefing',
        description: 'Nesta etapa iremos fazer uma reunião, chamada de vídeo ou simplemente você irá preencher um formulário com suas ideias e informações da produção.'
    },
    {
        id: 4,
        image: '/img/creative/pos-producao.svg',
        class: 'order-5',
        title: 'Pós-Produção',
        description: 'Assim que tivermos um plano em vigor, nossa equipe de produção trabalhará com você ou sua equipe para garantir que seu vídeo seja filmado de maneira cativante.'
    },
    {
        id: 2,
        image: '/img/creative/analise.svg',
        class: 'order-3',
        title: 'Análise + Estratégia',
        description: 'Aprenderemos sobre você e seus objetivos e criaremos uma estratégia de marketing que gerará resultados.'
    },
    {
        id: 3,
        image: '/img/creative/producao.svg',
        class: 'order-4 lg:col-span-3 lg:w-1/3 lg:mx-auto',
        title: 'Produção',
        description: 'Assim que tivermos um plano em vigor, nossa equipe de produção trabalhará com você ou sua equipe para garantir que seu vídeo seja filmado de maneira cativante.'
    },
]
</script>
<template>
    <section class="py-10 w-full flex items-center flex-col ">
        <div class="flex flex-col gap-10 mx-auto w-full max-w-6xl px-8">
            <h1 class="text-center">
                conheça nosso<br>
                <span>processo criativo</span>
            </h1>
            <div class="flex flex-col lg:grid lg:grid-cols-3  lg:grid-flow-row gap-4">
                <article v-for="item of creativeSteps" :key="item.id" :class="item.class"
                    class="flex flex-col items-center gap-2 text-center">
                    <img :src="item.image" :alt="item.title" :class="[item.id == 6 ? 'h-auto' : 'h-24 lg:h-10']">
                    <h1 class="text-2xl font-black">{{ item.title }}</h1>
                    <p>{{ item.description }}</p>
                </article>
            </div>
        </div>
    </section>
</template>