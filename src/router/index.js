import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/criarpostagem',
    name: 'criarPostagem',
    component: () => import(/* webpackChunkName: "about" */ '../views/CriarPostagem.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro.vue')
  },
  {
    path: '/post',
    name: 'listarUmaPostagem',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListarUmaPostagem.vue'),
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Perfil.vue'),
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router