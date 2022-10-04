import HomePage from './components/Pages/HomePage.vue'
import AboutPage from './components/pages/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Breed List', component: HomePage },
  { path: '/about', name: 'About Us', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
