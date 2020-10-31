import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/criarpostagem',
    name: 'criarPostagem',
    component: () => import(/* webpackChunkName: "CriarPostagem" */ '../views/CriarPostagem.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import(/* webpackChunkName: "Cadastro" */ '../views/Cadastro.vue')
  },
  {
    path: '/post',
    name: 'listarUmaPostagem',
    component: () => import(/* webpackChunkName: "ListarUmaPostagem" */ '../views/ListarUmaPostagem.vue'),
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "Perfil" */ '../views/Perfil.vue'),
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "Editar" */ '../views/Editar.vue'),
  },
  {
    path: '/noticias',
    name: 'FeedDeNoticias',
    component: () => import(/* webpackChunkName: "about" */ '../views/FeedDeNoticias.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router