import breakingBadApi from "@/api/breakingBarApi";
import axios from "axios";
import { onMounted, ref } from "vue";
import type { Character } from "../interfaces/character.interface";

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useCharacters = () => {
  onMounted(() => {
    loadCharacters();
  });

  const loadCharacters = async () => {
    if (characters.value.length > 0) return;

    isLoading.value = true;
    try {
      const { data } = await breakingBadApi.get<Character[]>("/characters");

      characters.value = data;
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
      hasError.value = true;
      if (axios.isAxiosError(error)) {
        return (errorMessage.value = error.message);
      }
      errorMessage.value = JSON.stringify(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    characters,
    isLoading,
    hasError,
    errorMessage,
  };
};
