import type { Character } from "@/characters/interfaces/character.interface";
import { reactive } from "vue";
interface Store {
  characters: {
    list: Character[];
    count: number;
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string | null;
  };

  startLoadingCharacters: () => void;
  loadedCharacters: (data: Character[]) => void;
  loadedCharactersFailed: (error: string) => void;
}

// Initial state
const characterStore = reactive<Store>({
  characters: {
    list: [],
    count: 0,
    errorMessage: null,
    hasError: false,
    isLoading: true,
  },

  startLoadingCharacters() {
    console.log("Start loading characters");
  },
  loadedCharacters(data: Character[]) {},
  loadedCharactersFailed(error: string) {},
});

characterStore.startLoadingCharacters();

export default characterStore;
