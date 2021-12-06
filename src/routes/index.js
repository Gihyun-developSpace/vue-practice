import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import NotFound from './NotFound'

export default createRouter({
  //Hash, History
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  //page 구분
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:movieid',
      component: Movie
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }

  ]
})