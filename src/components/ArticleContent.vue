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
      return marked(this.article.content, { sanitize: true, breaks: true })
    }
  },
  methods: {
    getArticle () {
      getArticleApi(this.$route.params.number).then(response => {
        this.article.title = response.data.title
        this.article.content = response.data.body
        document.title = this.article.title
      })
    },
    goToList () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
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
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 10px;
}
code {
  color: #f66;
  background-color: transparent;
}
</style>
