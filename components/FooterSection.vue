<script setup lang="ts">

import { Icon } from '@iconify/vue';

const anchorLinks = [
    {
        id: 1,
        title: 'Sobre',
        link: '#sobre'
    },
    {
        id: 2,
        title: 'Clientes',
        link: '#clientes'
    },
    {
        id: 3,
        title: 'Clientes',
        link: '#clientes'
    },
    {
        id: 4,
        title: 'Portfólio',
        link: '#portfolio'
    },
    {
        id: 5,
        title: 'Como te ajudaremos',
        link: '#howto'
    },
    {
        id: 6,
        title: 'Contato',
        link: '#contato'
    },

]

const socials = [{
    id: 1,
    icon: 'ph:instagram-logo-fill',
    description: 'OrbbitFilms',
    href: 'https://www.instagram.com/orbbitfilms/',
}, {
    id: 2,
    icon: 'mdi:youtube',
    description: 'OrbbitAle',
    href: 'https://www.youtube.com/@orbbiale',
}, {
    id: 3,
    icon: 'carbon:logo-facebook',
    description: 'OrbbitFilms',
    href: 'https://www.facebook.com/OrbbitFilms',
},
{
    id: 4,
    icon: 'ic:baseline-tiktok',
    description: 'OrbbitAle',
    href: 'https://www.tiktok.com/@orbbitale',
},
{
    id: 5,
    icon: 'ic:baseline-whatsapp',
    description: '(48) 99986-7990',
    href: 'https://wa.me/5548999867990',
},
{
    id: 6,
    icon: 'ic:outline-email',
    description: 'contato@orbbitfilms.com',
    href: 'mailto:contato@orbbitfilms.com',
},
]
</script>
<template>
    <section class=" py-20 bg-gondola">
        <div class="flex flex-col items-center text-white max-w-xl mx-auto">
            <img src="/img/logo-orbbit-mobile.png" alt="" class="w-2/5 lg:w-72 mx-auto pb-10 flex-1">
            <div class="flex flex-row justify-between w-full px-8  mx-auto flex-1">
                <ul class="flex flex-col w-full items-start flex-1">
                    <li class="py-2" v-for="item of anchorLinks" :key="item.id">
                        <a :href="item.link">{{ item.title }}</a>
                    </li>
                </ul>
                <ul class="flex flex-col w-full items-start flex-1">
                    <li v-for="item of socials" :key="item.id">

                        <a class="flex flex-row items-center " :href="item.href">
                            <Icon class="h-10 text-white" :icon="item.icon" />

                            <p class="text-sm pl-2">
                                {{ item.description }}
                            </p>

                        </a>
                    </li>
                </ul>
            </div>
            <button class="btn bg-mint-green btn-sm border-current font-black my-8"> Falar com um especialista </button>
        </div>
    </section>
</template>