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
    path: '/post',
    name: 'listarUmaPostagem',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListarUmaPostagem.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
