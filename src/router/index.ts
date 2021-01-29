import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routers = [
    {
        path: '/',
        name: 'Home',
        components: Home
    },
    {
        path: '/About',
        name: 'About',
        components: () => import('../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routers
})

export default router