<script setup lang="ts">
const works = [
    {
        id: 1,
        title: 'Comercial de produto',
        category: 'Videomarketing',
        categorySlug: 'videomarketing',
        image: 'http://unsplash.it/1690/900?random=0&gravity=center'
    },
    {
        id: 2,
        title: 'Transmissão ao Vivo',
        category: 'Transmissão ao Vivo',
        categorySlug: 'transmissao-ao-vivo',
        image: 'http://unsplash.it/1690/900?random=1&gravity=center'
    },
    {
        id: 3,
        title: 'Filmagem aérea',
        category: 'Filmagem aérea',
        categorySlug: 'filmagem-aerea',
        image: 'http://unsplash.it/1690/900?random=2&gravity=center'
    },
    {
        id: 4,
        title: 'Eventos',
        category: 'Eventos',
        categorySlug: 'eventos',
        image: 'http://unsplash.it/1690/900?random=3&gravity=center'
    },
    {
        id: 5,
        title: 'Corporativos',
        category: 'Corporativos',
        categorySlug: 'corporativos',
        image: 'http://unsplash.it/1690/900?random=4&gravity=center'
    },
    {
        id: 6,
        title: 'Casamentos',
        category: 'Casamentos',
        categorySlug: 'casamentos',
        image: 'http://unsplash.it/1690/900?random=5&gravity=center'
    },
    {
        id: 7,
        title: 'Comercial de produto 2',
        category: 'Videomarketing',
        categorySlug: 'videomarketing',
        image: 'http://unsplash.it/1690/900?random=6&gravity=center'
    },
    {
        id: 8,
        title: 'Transmissão ao Vivo 2',
        category: 'Transmissão ao Vivo',
        categorySlug: 'transmissao-ao-vivo',
        image: 'http://unsplash.it/1690/900?random=7&gravity=center'
    },
    {
        id: 9,
        title: 'Filmagem aérea 2',
        category: 'Filmagem aérea',
        categorySlug: 'filmagem-aerea',
        image: 'http://unsplash.it/1690/900?random=8&gravity=center'
    },
    {
        id: 10,
        title: 'Eventos 2',
        category: 'Eventos',
        categorySlug: 'eventos',
        image: 'http://unsplash.it/1690/900?random=9&gravity=center'
    },
    {
        id: 11,
        title: 'Corporativos 2',
        category: 'Corporativos',
        categorySlug: 'corporativos',
        image: 'http://unsplash.it/1690/900?random=10&gravity=center'
    },
    {
        id: 12,
        title: 'Casamentos 2',
        category: 'Casamentos',
        categorySlug: 'casamentos',
        image: 'http://unsplash.it/1690/900?random=11&gravity=center'
    },
]
const categories = ['Todos', ...new Set(works.map(item => item.category))]

function filterWorks(category: string) {
    filteredWorks.value = []
    if (category === 'Todos') {
        filteredWorks.value = null
    } else {
        works.find(item => {
            //@ts-expect-error
            if (item.category === category) filteredWorks.value.push(item)
        })
    }
}

const filteredWorks = ref<{
    id: number,
    title: string,
    category: string,
    categorySlug: string,
    image: string,
}[] | null>(null)
</script>
<template>
    <section class="py-10 w-full  flex items-center flex-col bg-cover bg-fixed bg-blend-multiply bg-opacity-30"
        style="background-image: url('http://unsplash.it/2000/1000?random=15&gravity=center')">
        <div class="flex flex-col gap-5 mx-auto w-full max-w-max px-8">
            <h1 class="text-white text-center">
                <span>conheça</span><br>
                nosso trabalho
            </h1>
            <div class="flex flex-row flex-wrap justify-center max-w-6xl mx-auto gap-3">
                <button v-for="item of categories" :key="item" class="btn btn-sm btn-circle w-fit px-5 text-xs"
                    @click="filterWorks(item)">
                    {{ item }}
                </button>
            </div>

            <div v-if="!!filteredWorks" class="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-2">
                <article v-for="item of filteredWorks"
                    class="p-2 w-full shadow-lg border rounded-2xl overflow-hidden border-t-eletric-purple flex flex-col items-center text-center bg-white"
                    :key="item.title">
                    <img class="rounded-xl" :src="item.image" alt="">
                    <div class="flex flex-col items-center pt-2">
                        <h1 class="font-black !text-sm leading-3">{{ item.title }}</h1>
                        <span class="label text-xs leading-3">{{ item.category }}</span>
                    </div>
                </article>
            </div>

            <div v-else class="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-2">
                <article v-for="item of works"
                    class="p-2 w-full shadow-lg border rounded-xl overflow-hidden border-t-eletric-purple flex flex-col items-center text-center bg-white"
                    :key="item.title">
                    <img class="rounded-xl" :src="item.image" alt="">
                    <div class="flex flex-col items-center pt-2">
                        <h1 class="font-black !text-sm leading-3">{{ item.title }}</h1>
                        <span class="label text-xs leading-3 p-0">{{ item.category }}</span>
                    </div>
                </article>
            </div>

        </div>
    </section>
</template>
<style lang="scss"></style>
