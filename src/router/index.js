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
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
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
    component: () => import(/* webpackChunkName: "EditarPerfil" */ '../views/EditarPerfil.vue'),
  },
  {
    path: '/editarpostagem/:post_id',
    name: 'EditarPostagem',
    component: () => import(/* webpackChunkName: "EditarPostagem" */ '../views/EditarPostagem.vue'),
  },
  {
    path: '/noticia/:id',
    name: 'VisualizarNoticia',
    component: () => import(/* webpackChunkName: "VisualizarNoticia" */ '../views/VisualizarNoticia.vue'),
  },
  {
    path: '/noticias',
    name: 'FeedDeNoticias',
    component: () => import(/* webpackChunkName: "FeedDeNoticias" */ '../views/FeedDeNoticias.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router