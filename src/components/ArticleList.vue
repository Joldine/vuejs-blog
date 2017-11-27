<template>
  <div class="article-list">
    <div class="article-list-search">
    </div>
    <hr>
    <div v-for="article in articleList" class="article-list-item">
      <div @click="goToContent(article.number)" class="article-list-item-title">
        <span>{{ article.title }}</span>
      </div>
      <div class="article-list-item-content">
        <span>{{ article.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleListApi } from '@/api'

export default {
  name: 'ArticleList',
  data () {
    return {
      articleList: []
    }
  },
  created () {
    this.getArticleList()
  },
  methods: {
    getArticleList () {
      document.title = 'Joldnine | Blog'
      const pagination = { page: 1, size: 5 }
      getArticleListApi(pagination).then(response => {
        response.data.forEach(article => this.articleList.push(
          {
            'title': article.title,
            'content': article.body.substring(0, 20) + '...',
            'number': article.number
          }
        ))
      })
    },
    goToContent (number) {
      this.$router.push('/article/' + number)
    }
  }
}
</script>

<style scoped>
.article-list {

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
