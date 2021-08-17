import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home'
import Cadastro from './components/Cadastro'


/* Registrar o router na instância do Vue. 
*/
Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path:'/cadastro',
            component: Cadastro
        }
    ]
});