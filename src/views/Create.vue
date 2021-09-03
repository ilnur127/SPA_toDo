<template>
  <div>
    <div class="breadcrumb-wrap">
      <router-link to="/posts" class="breadcrumb">История</router-link>
    </div>
    <div>
      <div>
        <div class="page-title">Режим создания</div>
        <form @submit.prevent="submitForm">
            <div class="input-field">
                <label for="nameCreate">Название</label>
                <input
                    id="nameCreate"
                    type="text"
                    v-model="title"
                    :class="{invalidInput: errorTitle}"
                    @change="checkTitle"
                >
                <span v-if="errorTitle" class="helper-text invalid">Введите название поста</span>
            </div>

            <div class="input-field">
                <label for="limitCreate">Описание</label>
                <input
                    id="limitCreate"
                    type="text"
                    v-model="bigText"
                    :class="{invalidInput: errorBig_text}"
                    @change="checkBig_text"
                >
                <span v-if="errorBig_text" class="helper-text invalid">Введите название описание поста</span>
            </div>

            <div class="input-field">
                <label for="limitCreate">Краткое описание</label>
                <input
                    id="limitCreate"
                    type="text"
                    v-model="smallText"
                    :class="{invalidInput: errorSmall_text}"
                    @change="checkSmall_text"
                >
                <span v-if="errorSmall_text" class="helper-text invalid">Введите название краткое описание поста</span>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
                Создать
            </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'create',
  data: () => ({
    title: '',
    bigText: '',
    smallText: '',
    errorTitle: false,
    errorBig_text: false,
    errorSmall_text: false
  }),
  mounted () {
  },
  methods: {
    checkTitle () {
      if (this.title === '') {
        this.errorTitle = true
      } else {
        this.errorTitle = false
      }
    },
    checkBig_text () {
      if (this.bigText === '') {
        this.errorBig_text = true
      } else {
        this.errorBig_text = false
      }
    },
    checkSmall_text () {
      if (this.smallText === '') {
        this.errorSmall_text = true
      } else {
        this.errorSmall_text = false
      }
    },
    async submitForm () {
      this.checkTitle()
      this.checkBig_text()
      this.checkSmall_text()
      if (this.errorTitle || this.errorBig_text || this.errorSmall_text) {
        return
      }
      const date = new Date()
      const author = this.name
      const formData = {
        title: this.title,
        bigText: this.bigText,
        smallText: this.smallText,
        author: author,
        date: date.toString()
      }

      try {
        await this.$store.dispatch('createPost', formData)
        this.title = ''
        this.bigText = ''
        this.smallText = ''
        // this.$emit('created', category)
        this.$router.push('/')
      } catch (e) {
        return false
      }
    }
  },
  computed: {
    name () {
      return `${this.$store.getters.info.name} ${this.$store.getters.info.surname}`
    }
  }
}
</script>
