<script setup lang="ts">
import { toRef } from "vue";
import type { Character } from "../interfaces/character.interface";

const props = defineProps<{ character: Character }>();
const character = toRef(props, "character");
</script>
<template>
  <div class="character-card">
    <img :src="character.img" :alt="character.name" />

    <h3>{{ character.name }}</h3>
    <h4>{{ character.nickname }}</h4>
  </div>
</template>

<style scoped>
.character-card {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
}
</style>
