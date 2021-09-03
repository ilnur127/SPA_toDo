import { getDatabase, ref, push, set, child, get, remove } from 'firebase/database'
export default {
  actions: {
    async createPost ({ dispatch, commit }, { title, bigText, smallText, author, date }) {
      try {
        const uid = await this.dispatch('getUid')
        const database = getDatabase()
        const postListRef = await ref(database, `/users/${uid}/posts`)
        const newPostRef = await push(postListRef)
        await set(newPostRef, {
          title,
          bigText,
          smallText,
          author,
          date
        })
        return { title, bigText, smallText, id: newPostRef._path.pieces_[newPostRef._path.pieces_.length - 1] }
      } catch (e) {
        console.error(e)
      }
    },
    async fetchPosts ({ dispatch, commit }) {
      try {
        // const uid = await this.dispatch('getUid')
        const dbRef = ref(getDatabase())
        let postsU = []
        const posts = []
        await get(child(dbRef, '/users/')).then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val()
            postsU = Object.keys(data).map((idU) => {
              if (data[idU].posts) {
                return Object.keys(data[idU].posts).map((idP) => {
                  posts.push({
                    idU,
                    idP,
                    ...data[idU].posts[idP]
                  })
                  return {
                    idU,
                    idP,
                    ...data[idU].posts[idP]
                  }
                })
              }
            })
            postsU = postsU.filter((el) => el)
          } else {
            console.log('No data available')
          }
        }).catch((error) => {
          console.error(error)
        })
        return posts
      } catch (e) {
        console.error(e)
      }
    },
    async fetchPostsById ({ dispatch, commit }, id) {
      try {
        const dbRef = ref(getDatabase())
        let postsU = []
        const posts = []
        let post = {}
        await get(child(dbRef, '/users/')).then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val()
            postsU = Object.keys(data).map((idU) => {
              if (data[idU].posts) {
                return Object.keys(data[idU].posts).map((idP) => {
                  posts.push({
                    idU,
                    idP,
                    ...data[idU].posts[idP]
                  })
                  return {
                    idU,
                    ...data[idU].posts[idP]
                  }
                })
              }
            })
            postsU = postsU.filter((el) => el)
            post = posts.filter((el) => el.idP === id)[0]
          } else {
            console.log('No data available')
          }
        }).catch((error) => {
          console.error(error)
        })
        return post
      } catch (e) {
        console.error(e)
      }
    },
    async updatePost ({ dispatch, commit }, { id, title, bigText, smallText, author, date }) {
      try {
        const uid = await this.dispatch('getUid')
        const database = getDatabase()
        await set(ref(database, `/users/${uid}/posts/${id}`), { title, bigText, smallText, author, date })
      } catch (e) {
        console.error(e)
      }
    },
    async deletePostById ({ dispatch, commit }, { idU, idP }) {
      try {
        const database = getDatabase()
        await remove(ref(database, `/users/${idU}/posts/${idP}`))
      } catch (e) {
        console.log(e)
      }
    }
  }
}
