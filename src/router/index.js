import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/postagem/:id',
    name: 'ListarUmaPostagem',
    component: () => import(/* webpackChunkName: "ListarUmaPostagem" */ '../views/ListarUmaPostagem.vue'),
  },
  {
    path: '/criarpostagem',
    name: 'CriarPostagem',
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
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "Perfil" */ '../views/Perfil.vue'),
  },
  {
    path: '/editarperfil',
    name: 'EditarPerfil',
    component: () => import(/* webpackChunkName: "Editar" */ '../views/EditarPerfil.vue'),
  },
  {
    path: '/editarpostagem',
    name: 'EditarUmaPostagem',
    component: () => import(/* webpackChunkName: "Editar" */ '../views/EditarPostagem.vue'),
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