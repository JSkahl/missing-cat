import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/astrid",
      name: "astrid",
      component: () => import("@/views/AstridRecordView.vue"),
    },
    {
      path: "/mia",
      name: "mia",
      component: () => import("@/views/MiaRecordView.vue"),
    },
  ],
});

export default router;
