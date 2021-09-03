import _ from 'lodash'

export default {
  data () {
    return {
      page: +this.$route.query.page || 1,
      pageSize: +this.$route.query.pageSize || 10,
      pageCount: 0,
      allPosts: [],
      changePosts: [],
      posts: []
    }
  },
  methods: {
    setupPagination (allItems) {
      this.allPosts = allItems
      this.changePosts = _.chunk(allItems, this.pageSize)
      this.pageCount = _.size(this.changePosts)
      this.posts = this.changePosts[this.page - 1] || this.changePosts[0]
    },
    changePage (page) {
      this.$router.push(`${this.$route.path}?page=${page}&pageSize=${this.pageSize}`)
      this.page = page
      this.posts = this.changePosts[page - 1] || this.changePosts[0]
    },
    changeSize (size) {
      this.setupPagination(this.allPosts)
      this.$router.push(`${this.$route.path}?pageSize=${size}`)
    }
  }
}
