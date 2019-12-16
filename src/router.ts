import Vue from "vue";
import Router, { RouterOptions, RouteConfig } from "vue-router";
import AppTheme from "./components/main/AppTheme.vue";
Vue.use(Router);

const router = new Router({
  base: "/",
  // history removes the hash from url
  // gives the app a cleaner url string.
  mode: "history",
  routes: [{ path: "/", component: AppTheme }] as RouteConfig[]
} as RouterOptions);
export default router;
