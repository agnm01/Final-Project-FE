import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Portofolio from "../views/Portofolio.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Portofolio",
    component: Portofolio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
