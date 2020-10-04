import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListarPostagem.vue')
  },
  {
    path: '/criarpostagem',
    name: 'criarPostagem',
    component: () => import(/* webpackChunkName: "about" */ '../views/CriarPostagem.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
