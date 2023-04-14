<script setup lang="ts">
const services = [
    {
        title: 'Videomarketing',
        description: 'Vídeos para redes sociais, produtos, fashionfilm, vídeos de anúncios.',
        image: '/img/services/video-marketing.svg'
    },
    {
        title: 'Transmissão ao vivo',
        description: 'Videos para redes sociais, institucionais, comerciais para youtube, cobertura de eventos, cursos e outros.',
        image: '/img/services/transmissao-ao-vivo.svg'
    },
    {
        title: 'Filmagem aérea',
        description: 'Videos para redes sociais, institucionais, comerciais para youtube, cobertura de eventos, cursos e outros.',
        image: '/img/services/imagens-aereas.svg'
    },
    {
        title: 'Cobertura de eventos',
        description: 'Videos para redes sociais, institucionais, comerciais para youtube, cobertura de eventos, cursos e outros.',
        image: '/img/services/cobertura-de-eventos.svg'
    },
    {
        title: 'Video corporativo',
        description: 'Videos para redes sociais, institucionais, comerciais para youtube, cobertura de eventos, cursos e outros.',
        image: '/img/services/video-corporativo.svg'
    },
    {
        title: 'Curso Online',
        description: 'Videos para redes sociais, institucionais, comerciais para youtube, cobertura de eventos, cursos e outros.',
        image: '/img/services/curso-online.svg'
    },
]
</script>
<template>
    <section class=" w-full flex items-center flex-col py-32">
        <div class="flex flex-col gap-5 mx-auto w-full max-w-6xl">
            <h1 class="text-center">
                A solução para
                <span>empresas que buscam por:</span>
            </h1>
            <div class="grid grid-flow-row md:grid-cols-3 gap-5 px-14">
                <article v-for="item of services"
                    class=" w-full shadow-lg border-t-2 rounded-xl overflow-hidden border-t-eletric-purple flex flex-col  items-center text-center bg-white justify-between p-8"
                    :key="item.title">
                    <img class="" :src="item.image" alt="">
                    <h1 class="font-black text-2xl">{{ item.title }}</h1>
                    {{ item.description }}
                    <button class="btn btn-circle px-6 text-white bg-eletric-purple w-fit my-4">
                        QUERO PROPOSTA
                    </button>
                </article>
            </div>
        </div>
    </section>
</template>
<style lang="scss"></style>
