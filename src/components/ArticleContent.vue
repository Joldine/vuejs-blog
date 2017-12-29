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
    <el-button v-if="loading" :loading="loading"></el-button>
    <div class="content-title">
      <span>{{ article.title }}</span>
    </div>
    <div v-html="compiledMarkdown" class="content"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'ArticleContent',
  data () {
    return {
      article: {
        body: ''
      },
      number: this.$route.params.number,
      loading: true
    }
  },
  created () {
    this.getArticleById()
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.article.body, { sanitize: true, breaks: true })
    }
  },
  methods: {
    getArticleById () {
      if (!this.$store.getters.isArticleExisted(this.number)) {
        this.$store.dispatch('requestArticle', this.number).then(() => {
          this.article = this.$store.getters.getArticleById(this.number)
          this.loading = false
        })
      } else {
        this.article = this.$store.getters.getArticleById(this.number)
        this.loading = false
      }
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
