import { characterRoute } from "@/characters/router";
import AboutPage from "@/shared/pages/AboutPage.vue";
import HomePage from "@/shared/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Publicas
    { path: "/", name: "home", component: HomePage },
    { path: "/about", name: "about", component: AboutPage },
    // Characters
    {
      ...characterRoute,
      path: "/characters",
    },

    // Default
    { path: "/:pathMatch(.*)*", redirect: () => ({ name: "home" }) },
  ],
});

// router.addRoute(characterRoute);

export default router;
