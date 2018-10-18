import Estudo from './components/estudo/Estudo.vue';
import Home from './components/home/Home.vue';


export const routes = [
	{ path: '', component: Home, titulo: 'Home' },
	{ path: '/estudo', component: Estudo, titulo: 'Estudo' }

];