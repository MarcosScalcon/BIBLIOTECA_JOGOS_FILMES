import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue') },
  { path: '/biblioteca', name: 'Biblioteca', component: () => import('../views/BibliotecaView.vue') },
  { path: '/galeria', name: 'Galeria', component: () => import('../views/GaleriaView.vue') },
  { path: '/sobre', name: 'Sobre', component: () => import('../views/SobreView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
