import Vue from "vue";
import VueRouter from "vue-router";
import ProductHunt from "../views/ProductHunt.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductHunt
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
