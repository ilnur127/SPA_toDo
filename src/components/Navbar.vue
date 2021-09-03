<template>
    <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
            <div style="display:flex">
                <div
                  :class="{active: $route.fullPath === '/'}"
                  @click="goPage('/')"
                  class="menu-first menu-item"
                >Главная</div>
                <div
                  :class="{active: $route.fullPath === '/posts'}"
                  @click="goPage('/posts')"
                  class="menu-item"
                >Посты</div>
            </div>
            <div class="nav--item">
                <div>{{name}}</div>
                <button @click="logout" class="logout">Выйти</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: {
    name () {
      return `${this.$store.getters.info ? this.$store.getters.info.name : ''} ${this.$store.getters.info ? this.$store.getters.info.surname : ''}`
    }
  },
  mounted () {
    console.dir(this.$route)
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/auth/sign-in')
    },
    goPage (path) {
      if (this.$route.fullPath !== path) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style>
  .active {
    color: gray;
  }
</style>
