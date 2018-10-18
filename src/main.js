import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

import './assets/css/freelancer.css'

import './assets/vendor/bootstrap/css/bootstrap.min.css'



/*/import './assets/vendor/magnific-popup/jquery.magnific-popup.min.js'
//import './assets/vendor/jquery-easing/jquery.easing.min.js'

import './assets/vendor/jquery/jquery.js'

import './assets/vendor/magnific-popup/magnific-popup.css'

import './assets/vendor/jquery/jquery.min.js'
import './assets/js/freelancer.min.js'
import './assets/js/contact_me.js'
import './assets/js/jqBootstrapValidation.js'

//import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'*/


new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
})
