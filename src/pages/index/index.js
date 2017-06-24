/**
 * Created by trigkit4 on 2017/5/11.
 */


import Vue from 'vue'
import router from '../../router/index';
import App from '../../App.vue';

let Index = {
    init () {
        let vm = new Vue({
            el: '#main',
            router,
            ...App
        })
    }
};
Index.init();



