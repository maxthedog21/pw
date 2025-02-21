
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import index from '@/pages/index.vue'
import ResumeView from '@/views/resume/ResumeView.vue'
import PortfolioView from '@/views/portfolio/PortfolioView.vue'
import GameView from '@/views/game/GameView.vue'

const routes = [
  { path: '/', component: PortfolioView },
  { path: '/resume', component: ResumeView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/game', component: GameView },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
