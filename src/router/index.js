import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Portofolio from "../views/Portofolio.vue";
// import TeamMembers from "../components/PortofolioPage/TeamMembers.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portofolio",
    name: "Portofolio",
    component: Portofolio,
  },
  // {
  //   path: "/teammates",
  //   name: "TeamMembers",
  //   component: TeamMembers,
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
