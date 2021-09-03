import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        const app = await this.dispatch('initializeApp')
        const auth = getAuth(app)
        await signInWithEmailAndPassword(auth, email, password)
        await this.dispatch('fetchInfo')
        return { dispatch, commit }
      } catch (e) {
        const error = e
        return error
      }
    },
    async logout () {
      const app = await this.dispatch('initializeApp')
      await getAuth(app).signOut()
      localStorage.clear()
    },
    async register ({ dispatch }, { email, password, name, surname, rule }) {
      try {
        console.log('111')
        const app = await this.dispatch('initializeApp')
        const auth = getAuth(app)
        const database = getDatabase()
        await createUserWithEmailAndPassword(auth, email, password)
        const uid = await this.dispatch('getUid')
        await set(ref(database, `/users/${uid}/info`), {
          name,
          surname,
          rule
        })
        await this.dispatch('fetchInfo')
      } catch (e) {
        console.error(e)
      }
    },
    async getUid () {
      const app = await this.dispatch('initializeApp')
      const user = await getAuth(app).currentUser
      if (user) {
        localStorage.setItem('uid', user.uid)
        return user.uid
      } else {
        return localStorage.getItem('uid')
      }
    }
  }
}
