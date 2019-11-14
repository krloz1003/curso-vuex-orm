import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/database/models/Auth'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { title: 'Iniciar sesión', requiresAuth: false }
  }, {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: { title: 'Regístrate', requiresAuth: false }
  }, {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
    meta: { title: 'Blog', requiresAuth: true }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  const auth = Auth.query().first();
  if (to.meta.requiresAuth && ! auth){
    return next('/login')
  }

  if(! to.meta.requiresAuth && auth ){
    return next('/blog')
  }
  
  next()

})


export default router
