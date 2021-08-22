require('./bootstrap');

import vue from 'vue'
import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
import excel from 'vue-excel-export';
import store from "./store";
import Swal from 'sweetalert2';


window.Vue = vue;
window.Swal = Swal;

Vue.component('pagination', require('laravel-vue-pagination'));
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(excel);

window.Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
const app = new Vue({
    store,
    el: '#app',
    router: router,
    render: h => h(App),
});

