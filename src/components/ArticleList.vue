<template>
  <div class="article-list">
    <div class="article-list-search">
    </div>
    <hr>
    <el-button v-if="loading" type="primary" :loading="loading"></el-button>
    <div v-for="article in articleList" class="article-list-item">
      <div @click="goToContent(article.number)" class="article-list-item-title">
        <span>{{ article.title }}</span>
      </div>
      <div class="article-list-item-content">
        <div v-html="marked(article.body)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  export default {
    name: 'ArticleList',
    data () {
      return {
        articleList: [],
        loading: false
      }
    },
    created () {
      document.title = 'Joldnine | Blog'
      this.initArticleList()
    },
    methods: {
      initArticleList () {
        this.loading = true
        this.$store.commit('CLEAR_ARTICLE')
        this.$store.dispatch('getArticleList', 1).then(() => {
          this.loading = false
          this.articleList = this.$store.getters.getArticles
        }).catch(() => {
          this.loading = false
        })
      },
      goToContent (number) {
        this.$router.push('/article/' + number)
      },
      marked (body) {
        return marked(body, { sanitize: true, breaks: true }).substring(0, 40)
      }
    }
  }
</script>

<style scoped>
  .article-list {
    text-align: left;
  }
  .article-list-item {
    padding: .5em;
    margin: 1em 0;
  }
  .article-list-item:hover {
    background-color: rgba(0, 0, 0, .05);
  }
  .article-list-item-title {
    font-size: 1.3em;
    cursor: pointer;
    transition: transform .2s;
  }
  .article-list-item-title:hover {
    color: #409EFF;
    transform: translateX(.3em);
  }
  .article-list-item-content {
    font-size: 0.9em;
  }
</style>
