import Vue from 'vue'
import VueRouter from 'vue-router'
import menu from 'components/vue/menu'
import estimate from 'components/vue/estimate'
import merchants from 'components/vue/merchants'


Vue.use(VueRouter);

const routes = [
    { path: '/', component: menu   },
    { path: '/menu', component: menu },
    { path: '/estimate', component: estimate },
    { path: '/merchants', component: merchants }
];
const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});

export default router;


