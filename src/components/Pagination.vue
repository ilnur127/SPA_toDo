<template>
    <div class="pagination-block">
        <div
            v-for="p of pages"
            :key="p"
            class="pagination-block--page"
            :class="{active: page == p}"
            @click="changePage(p)"
        >
            {{p}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pages', 'page'],
  data: () => ({
  }),
  methods: {
    changePage (p) {
      this.$emit('changePage', p)
    }
  }
}
</script>

<style scoped>
    .pagination-block{
        display: flex;
        justify-content: space-around;
        margin: 15px 0px;
    }
    .pagination-block--page{
        margin: 10px;
        border: 1px solid;
        border-radius: 40%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .pagination-block--page:hover {
        background: gray;
        color: beige;
    }
    .active {
        background: gray;
        color: beige;
    }
</style>
