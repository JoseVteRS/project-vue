<script setup lang="ts">
import NavBar from "@/shared/components/NavBar.vue";
import { RouterView } from "vue-router";
import { routeLink } from "./router/link-routes";
</script>

<template>
  <div class="wrapper">
    <header>
      <!-- Navbar -->
      <NavBar show-icon title="Breaking bad" :links="routeLink" />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
