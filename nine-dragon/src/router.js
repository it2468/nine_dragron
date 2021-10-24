import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage.vue';
import Login from './pages/Login.vue';
import ListUser from './pages/ListUser'

import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'


Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        component: HomePage,
        children:[
            {
                path:'',
                component:Home
            },
            {
                path:'/about-us',
                component:AboutUs
            }
        ]
     },
    { 
        path: '/login',
        component:  Login
    },
    {
        path:'/user/:id?',
        component: ListUser
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router;