import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ImpressumsView from "../views/ImpressumsView.vue";

const routes = [
  {
    path: "/",
    name: "portfolio",
    component: HomeView,
  },
  {
    path: "/ueber-mich",
    name: "über mich",
    component: AboutView,
  },

  {
    path: "/impressum",
    name: "impressum",
    component: ImpressumsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
