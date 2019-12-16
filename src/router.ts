import Vue from "vue"
import VueRouter from 'vue-router';
import AppTheme from "./components/main/AppTheme.vue"
Vue.use(VueRouter);

 const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', 
        component: AppTheme }]
});
export default router