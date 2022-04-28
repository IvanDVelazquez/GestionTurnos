import {createRouter,createWebHashHistory} from 'vue-router'
import Especialidades from '../components/Especialidades.vue'
import Home from '../components/Home.vue'
import GestionTurnos from '../components/GestionTurnos.vue'
import Usuario from '../components/Usuario.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/especialidades', component: Especialidades},
    { path: '/gestionturno', component: GestionTurnos },
    { path: '/usuario/:id', component: Usuario },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router