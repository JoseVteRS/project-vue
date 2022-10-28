<script setup lang="ts">
import type { RouteLink } from "@/router/link-routes";

interface Props {
  title?: string;
  links?: RouteLink[];
  showIcon?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  showIcon: true,
  links: () => [],
});
</script>

<template>
  <div>
    <nav>
      <img
        v-if="showIcon"
        src="@/assets/logo.svg"
        alt="Vue Logo"
        height="25"
        width="25"
      />
      <span v-if="props.title">{{ props.title }}</span>

      <RouterLink v-for="link of props.links" :key="link.path" :to="link.path">
        {{ link.title }}
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
nav {
  align-items: center;
  display: flex;
  font-size: 1rem;
  margin-top: 2rem;
  text-align: center;
  width: 100%;
}

span {
  margin-right: 1rem;
}

a {
  margin-right: 2rem;
}
</style>
