<template>
<div>
  <Loader v-if="loading"/>
    <div v-else>
        <div class="page-title">Posts</div>
        <div class="input-field">
            <label for="limitCreate">Количество постов на странице</label>
            <select
                v-model="pageSize"
            >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Заголовок</th>
                    <th>Краткий текст</th>
                    <th>Дата изменения</th>
                    <th>Автор</th>
                    <th>Открыть</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(post, indx) of posts"
                    :key="post.idP"
                >
                    <td>{{indx + 1}}</td>
                    <td>{{post.title}}</td>
                    <td>{{post.smallText}}</td>
                    <td>{{post.date | date('datetime')}}</td>
                    <td>{{post.author}}</td>
                    <td>
                        <button
                            class="btn-small btn"
                            @click="$router.push('/posts/' + post.idP)"
                        >
                            Detail
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <Pagination
            :pages="pageCount"
            :page="page"
            @changePage="changePage"
        />
    </div>
</div>
</template>
<script>
import paginationMixin from '../mixins/pagination.mixin'
import Pagination from '../components/Pagination.vue'
import Loader from '../components/Loader.vue'
export default {
  components: { Pagination, Loader },
  mixins: [paginationMixin],
  name: 'Posts',
  data: () => ({
    loading: true
  }),
  async mounted () {
    this.posts = await this.$store.dispatch('fetchPosts')
    this.setup(this.posts)
    this.loading = false
  },
  methods: {
    setup (posts) {
      this.setupPagination(posts.map(post => {
        return {
          ...post
        }
      }))
    }
  },
  watch: {
    pageSize (pageSize) {
      this.changeSize(pageSize)
    }
  }
}
</script>
