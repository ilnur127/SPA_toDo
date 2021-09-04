<template>
<div>
  <Loader v-if="loading"/>
  <div v-else>
    <div class="breadcrumb-wrap">
      <router-link to="/posts" class="breadcrumb">История</router-link>
      <span>></span>
      <a
        class="breadcrumb"
        @click.prevent
      >
        {{ $route.params.id }}
      </a>
    </div>
    <div>
      <div>
        <div class="page-title">Режим просмотра</div>
        <div style="display: flex;justify-content: space-evenly;">
            <div>
                <p><strong>Заголовок:</strong> {{post.title}}</p>
                <p><strong>Описание:</strong> {{post.bigText}}</p>
                <p><strong>Автор:</strong> {{post.author}}</p>

                <small>Дата изменения: {{post.date | date('datetime')}}</small>
            </div>
            <div style="display: flex;flex-direction: column;justify-content: space-evenly;">
              <button
                v-if="rule === 'writer' || getId === post.idU"
                @click="editBlock()"
              >Редактировать</button>
              <button
                v-if="rule"
                @click="$router.push('./create')"
              >Создать</button>
              <button
                v-if="rule == 'writer'"
                @click="deletePost"
              >Удалить</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="attensionBlock" class="modal">
    <div class="page-title">Внимание</div>
    <div class="modal-text">{{Message}}</div>
    <div class="modal-action">
      <button
        @click="callBack"
      >Да</button>
      <button
        @click="attensionBlock = false"
      >Нет</button>
    </div>
  </div>
</div>
</template>
<script>
import Loader from '../components/Loader.vue'
export default {
  name: 'detail',
  data: () => ({
    post: null,
    loading: true,
    attensionBlock: false,
    Message: '',
    callBack: null
  }),
  methods: {
    deletePost () {
      this.Message = 'Вы действительно хотите удалить пост?'
      this.attensionBlock = true
      this.callBack = function () {
        this.$store.dispatch('deletePostById', { idU: this.post.idU, idP: this.post.idP })
        this.$router.push('/')
      }.bind(this)
    },
    editBlock () {
      this.Message = 'Вы действительно хотите отредактировать пост?'
      this.attensionBlock = true
      this.callBack = function () {
        this.$router.push({
          name: 'edit',
          params: { id: this.$route.params.id }
        })
      }.bind(this)
    }
  },
  async mounted () {
    const id = this.$route.params.id
    this.post = await this.$store.dispatch('fetchPostsById', id)
    this.loading = false
  },
  computed: {
    rule () {
      return this.$store.getters.info.rule
    },
    getId () {
      return localStorage.getItem('uid')
    }
  },
  components: {
    Loader
  }
}
</script>
