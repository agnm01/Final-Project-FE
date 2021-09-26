import { createRouter, createWebHashHistory } from "vue-router";
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
  history: createWebHashHistory(),
  routes,
});

export default router;
