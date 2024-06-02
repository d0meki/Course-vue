<template>
    <section v-if="isLoading || randomPokemon.id === null"
        class="flex flex-col justify-center items-center w-screen h-screen ">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class=" animate-pulse ">Cargando Pokemon</h3>
    </section>
    <section v-else class="flex flex-col justify-center items-center w-screen h-screen ">
        <h1 class="m-5">¿Quien es este Pokemon?</h1>
        <!-- <h3 class="capitalize">{{ gameStatus }}</h3> -->
        <div class="h-20">
            <button class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition-all " v-if="gameStatus !== GameStatus.Playing" @click="getNextRound(4)">
                ¿Juagar de nuevo?
            </button>    
        </div>
        
        <!-- Pokemon Picture -->
        <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus !== GameStatus.Playing" />
        <!-- Pokemon Option -->
        <PokemonOptions :options="options" :block-selection="gameStatus !== GameStatus.Playing" @selected-option="checkAnswer" :correct-answer="randomPokemon.id" />
    </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';
const { randomPokemon,
    isLoading,
    gameStatus,
    pokemonsOptions: options,
    checkAnswer,
    getNextRound
} = usePokemonGame();


</script>


<style scoped></style>