require('./bootstrap');
import vue from 'vue'
window.Vue = vue;

import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
import excel from 'vue-excel-export';

 
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(excel);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});