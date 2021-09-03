import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Posts from '../views/Posts.vue'
import Detail from '../views/Detail.vue'
import Create from '../views/Create.vue'
import Edit from '../views/Edit.vue'
import notFound from '../views/notFound.vue'
import PostBlock from '../views/PostBlock.vue'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app/'

const firebaseConfig = {
  apiKey: 'AIzaSyDj_v59jcSH2SU1xuHe2UH1IAJAQNvgD-U',
  authDomain: 'test-spa-3f144.firebaseapp.com',
  projectId: 'test-spa-3f144',
  storageBucket: 'test-spa-3f144.appspot.com',
  messagingSenderId: '624582455831',
  appId: '1:624582455831:web:495757b3917fd9903ee252',
  measurementId: 'G-SKC2PG2MY3'
}
const app = initializeApp(firebaseConfig)

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth/sign-up',
    name: 'register',
    meta: {
      layout: 'empty'
    },
    component: Register
  },
  {
    path: '/auth/sign-in',
    name: 'login',
    meta: {
      layout: 'empty'
    },
    component: Login
  },
  {
    path: '/posts',
    meta: {
      layout: 'main',
      auth: true
    },
    component: PostBlock,
    children: [
      {
        path: '',
        name: 'posts',
        meta: {
          layout: 'main',
          auth: true
        },
        component: Posts
      },
      {
        path: 'create',
        name: 'create',
        meta: {
          layout: 'main',
          auth: true
        },
        component: Create
      },
      {
        path: 'edit',
        name: 'edit',
        meta: {
          layout: 'main',
          auth: true
        },
        component: Edit
      },
      {
        path: ':id',
        name: 'detail',
        meta: {
          layout: 'main',
          auth: true
        },
        component: Detail
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    meta: {
      layout: 'empty'
    },
    component: notFound
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main',
      auth: true
    },
    component: Posts
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = localStorage.getItem('uid') || getAuth(app).currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && !currentUser) {
    next('/auth/sign-in')
  }

  if (currentUser && (to.fullPath === '/auth/sign-up' || to.fullPath === '/auth/sign-in')) {
    next('/')
  }

  if (!to.matched.length) {
    next('/404')
  } else {
    next()
  }
})

export default router
