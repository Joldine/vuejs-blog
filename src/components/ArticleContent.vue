<template>
  <div>
    <div class="content-header">
      <span @click="goToList()" class="content-header-back">
        Back to list
      </span>
    </div>
    <div>
      <hr>
    </div>
    <div class="content-title">
      <span>{{ article.title }}</span>
    </div>
    <div v-html="compiledMarkdown" class="content"></div>
  </div>
</template>

<script>
import { getArticleApi } from '@/api'
import marked from 'marked'

export default {
  name: 'ArticleContent',
  data () {
    return {
      article: {
        title: '',
        content: ''
      }
    }
  },
  created () {
    this.getArticle()
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.article.content).split(/<!--\s*\w{1,9}\s*-->/g)[0]
    }
  },
  methods: {
    getArticle () {
      getArticleApi(this.$route.params.number).then(response => {
        this.article.title = response.data[0].title
        this.article.content = response.data[0].body
      })
    },
    goToList () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.content-header {
  text-align: left;
}
.content-header-back {
  font-size: 0.9em;
  cursor: pointer;
}
.content-header-back:hover {
  color: #409EFF;
}
.content-title {
  font-size: 1.3em;
}
.content {
  text-align: left;
}
</style>
