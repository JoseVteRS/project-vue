<script setup lang="ts">
import CharacterCard from "@/characters/components/CharacterCard.vue";
import type { Character } from "../interfaces/character.interface";
// import breakingBadApi from "@/api/breakingBarApi";
// import { useQuery } from "@tanstack/vue-query";
// import type { Character } from "../interfaces/character.interface";
interface Props {
    characters: Character[]
}
const props = defineProps<Props>();

// ! 1- Normal suspense
// const {data: characters} = await breakingBadApi.get<Character[]>('/characters');
// const characters = ref<Character[]>([]);

// ! 2- Composable functions
// const { characters, isLoading, hasError, errorMessage } = useCharacters();

// ! 3- Tanstack Query
// const { data: characters } = useQuery(["characters"], getCharacterSlow, {
//   cacheTime: 1000 * 60,
//   refetchOnReconnect: "always",
// });
</script>

<template>
  <div>
    <div class="card-list">
      <CharacterCard
        v-for="character of characters"
        :key="character.char_id"
        :character="character"
      />
    </div>
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
