<script setup lang="ts">
import breakingBadApi from "@/api/breakingBarApi";
import CardList from "@/characters/components/CardList.vue";
import { useQuery } from "@tanstack/vue-query";
import type { Character } from "../interfaces/character.interface";
const props = defineProps<{ title: string; visible: boolean }>();

const getCharacters = async (): Promise<Character[]> => {
  const { data } = await breakingBadApi.get<Character[]>("/characters");
  return data;
};

const { isLoading, data: characters = [] } = useQuery(["characters"], getCharacters);
</script>

<template>
  <div>
    <div v-if="isLoading">Loading characters...</div>
    <template v-else>
      <h2>{{ props.title }}</h2>
      <CardList :characters="characters!" />
    </template>
  </div>
</template>

<style scoped></style>
