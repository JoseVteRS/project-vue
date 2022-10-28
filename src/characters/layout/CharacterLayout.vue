<script setup lang="ts">
import type { RouteLink } from "@/router/link-routes";
import NavBar from "@/shared/components/NavBar.vue";
import { RouterView } from "vue-router";
import { characterRoute } from "../router";

const routeLink: RouteLink[] = characterRoute
  .children!.filter((route) => (route.props as { visible: boolean }).visible)
  .map((route) => {
    return {
      name: route.name as string,
      path: route.path,
      title: (route.props as { title: string; visible: boolean }).title,
    };
  });
</script>

<template>
  <div>
    <h1>Personajes</h1>
    <!-- Navbar -->
    <NavBar :show-icon="false" :links="routeLink" />
    <!-- RouterView + Suspense -->
    <!-- <Suspense> -->
    <RouterView />
    <!-- </Suspense> -->
  </div>
</template>

<style scoped></style>
