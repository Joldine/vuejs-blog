<template>
  <transition>
    <div class="back-to-top" :style="`bottom:${this.bottom};right:${this.right};`" v-show="visible" @click="backToTop">
      <el-tag type="info" title="Back to top">
        <i class="el-icon-arrow-up"></i>
      </el-tag>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    visibleOffset: {
      type: [String, Number],
      default: 100
    },
    right: {
      type: String,
      default: '32px'
    },
    bottom: {
      type: String,
      default: '40px'
    }
  },
  data () {
    return {
      visible: false
    }
  },
  created () {
    let catchScroll = () => {
      this.visible = (window.pageYOffset > parseInt(this.visibleOffset))
    }
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.onscroll = catchScroll
  },
  methods: {
    backToTop () {
      window.smoothscroll()
    }
  }
}
</script>

<style scoped>
  .back-to-top{
    position: fixed;
    cursor: pointer;
  }
</style>
