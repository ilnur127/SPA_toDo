<template>
    <div>
        <div class="app-main-layout">
            <Navbar />
            <main :class="{'full': !isOpen, 'app-content': true}">
                <div class="app-page">
                    <router-view />
                </div>
            </main>

            <div class="fixed-action-btn">
                <router-link class="btn-floating btn-large blue" to="/posts/create">
                    <i class="large material-icons">+</i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Navbar
  },
  async mounted () {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
  },
  computed: {
  },
  watch: {
  }
}
</script>

<style>

</style>
