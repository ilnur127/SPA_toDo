import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import posts from './posts'

import { initializeApp } from 'firebase/app/'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDj_v59jcSH2SU1xuHe2UH1IAJAQNvgD-U',
  authDomain: 'test-spa-3f144.firebaseapp.com',
  projectId: 'test-spa-3f144',
  storageBucket: 'test-spa-3f144.appspot.com',
  messagingSenderId: '624582455831',
  appId: '1:624582455831:web:495757b3917fd9903ee252',
  measurementId: 'G-SKC2PG2MY3'
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firebase: null
  },
  mutations: {},
  actions: {
    initializeApp () {
      return initializeApp(firebaseConfig)
    }
  },
  modules: {
    auth,
    info,
    posts
  }
})
