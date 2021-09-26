import { createRouter, createWebHistory } from "vue-router";
import { applicationState } from "../state";
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
    meta: {
      requiresAuth: true
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!applicationState.isLoggedIn) {
      next({path:"/"})
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;
