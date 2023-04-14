<script setup lang="ts">
import { Icon } from '@iconify/vue';

const faq = ref([
    {
        id: 1,
        isOpen: true,
        title: 'Quem é a OrbbitFilms?',
        description: ' Produtora de vídeo em Florianópolis, temos um know-how de +5 anos trabalhando com produções de vídeos, atendendo agências de publicidade e empresas. Vídeos comerciais, filmages aéreas tran - missções ao vivo, Curso online, Vídeos Institucionais, Vídeos de Treinamentos, Vídeos em animações, Vídeo de eventos (After movie), entre outros. Produz - imos desde a criação do roteiro, a criação de arte, gravação, edição até a finalização.Trabalho, ded - cação e profissionalismo: é isso que nos move e nos leva a sempre inovar para alcançar os melhores re -'
    },
    {
        id: 2,
        isOpen: false,
        title: 'Que tipos de vídeos a OrbbitFilms produz?',
        description: ' Produtora de vídeo em Florianópolis, temos um know-how de +5 anos trabalhando com produções de vídeos, atendendo agências de publicidade e empresas. Vídeos comerciais, filmages aéreas tran - missções ao vivo, Curso online, Vídeos Institucionais, Vídeos de Treinamentos, Vídeos em animações, Vídeo de eventos (After movie), entre outros. Produz - imos desde a criação do roteiro, a criação de arte, gravação, edição até a finalização.Trabalho, ded - cação e profissionalismo: é isso que nos move e nos leva a sempre inovar para alcançar os melhores re -'
    },
    {
        id: 3,
        isOpen: false,
        title: 'Onde posso utilizar o vídeo?',
        description: ' Produtora de vídeo em Florianópolis, temos um know-how de +5 anos trabalhando com produções de vídeos, atendendo agências de publicidade e empresas. Vídeos comerciais, filmages aéreas tran - missções ao vivo, Curso online, Vídeos Institucionais, Vídeos de Treinamentos, Vídeos em animações, Vídeo de eventos (After movie), entre outros. Produz - imos desde a criação do roteiro, a criação de arte, gravação, edição até a finalização.Trabalho, ded - cação e profissionalismo: é isso que nos move e nos leva a sempre inovar para alcançar os melhores re -'
    },
    {
        id: 4,
        isOpen: false,
        title: 'Quanto custa?',
        description: ' Produtora de vídeo em Florianópolis, temos um know-how de +5 anos trabalhando com produções de vídeos, atendendo agências de publicidade e empresas. Vídeos comerciais, filmages aéreas tran - missções ao vivo, Curso online, Vídeos Institucionais, Vídeos de Treinamentos, Vídeos em animações, Vídeo de eventos (After movie), entre outros. Produz - imos desde a criação do roteiro, a criação de arte, gravação, edição até a finalização.Trabalho, ded - cação e profissionalismo: é isso que nos move e nos leva a sempre inovar para alcançar os melhores re -'
    },
    {
        id: 5,
        isOpen: false,
        title: 'Quais resultados posso alcançar com o vídeo?',
        description: ' Produtora de vídeo em Florianópolis, temos um know-how de +5 anos trabalhando com produções de vídeos, atendendo agências de publicidade e empresas. Vídeos comerciais, filmages aéreas tran - missções ao vivo, Curso online, Vídeos Institucionais, Vídeos de Treinamentos, Vídeos em animações, Vídeo de eventos (After movie), entre outros. Produz - imos desde a criação do roteiro, a criação de arte, gravação, edição até a finalização.Trabalho, ded - cação e profissionalismo: é isso que nos move e nos leva a sempre inovar para alcançar os melhores re -'
    },
])
</script>
<template>
    <section class="px-8 py-10">
        <div class="bg-eletric-purple rounded-lg p-4 text-white">

            <h1 class="font-bold ">Dúvidas</h1>
            <h1 class="font-bold text-3xl">Frequentes</h1>

            <div class="flex flex-col py-5">
                <div v-for="item of faq" :key="item.id"
                    class="flex flex-col first-of-type:border-t border-b border-white p-2">
                    <div class="flex flex-row justify-between items-center pb-2">
                        <h2 class="font-black">{{ item.title }}</h2>
                        <button @click="item.isOpen = !item.isOpen">
                            <Icon :class="[item.isOpen ? 'rotate-0 text-mint-green ' : '-rotate-90']" class="w-5 h-5"
                                icon="solar:round-alt-arrow-down-bold" />
                        </button>
                    </div>
                    <div class="text-xs overflow-hidden " :class="[item.isOpen ? 'h-fit' : 'h-0']">
                        {{ item.description }}
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>