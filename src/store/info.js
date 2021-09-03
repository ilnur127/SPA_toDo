import store from '../store'
import { getDatabase, ref, onValue } from 'firebase/database'
export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
    },
    clearInfo (state) {
      state.info = {}
    }
  },
  actions: {
    async fetchInfo ({ dispatch }) {
      try {
        await this.dispatch('initializeApp')
        const database = getDatabase()
        const uid = await this.dispatch('getUid')
        await onValue(ref(database, `/users/${uid}/info`), (snapshot) => {
          const data = snapshot.val()
          store.commit('setInfo', data)
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    info: s => s.info
  }
}
