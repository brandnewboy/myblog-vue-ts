<template>
  <div class="article-detail-container">
    <PageHeader
      class="header"
      :title="data ? data.title : ''"
      :time="dayjs(data?.createtime).format('YYYY-MM-DD HH:mm')"
    />

    <article ref="articleContent" class="article-content"></article>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from './PageHeader.vue'
import { getArticleDetail } from '@/api/article'
import { useRoute } from 'vue-router'
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import { Blog } from '@/types/base'
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'

const route = useRoute()
const data = ref<Blog>()
onMounted(() => {
  getArticleDetail(Number(route.params.id)).then(res => {
    data.value = res
    new Viewer({
      el: document.querySelector('.article-content') as HTMLElement,
      initialValue: data.value.content
    })
  })
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
@import '@/assets/styles/mixin.scss';
.article-detail-container {
  height: 100%;

  .article-content {
    min-height: 40rem;
    color: black;
    background: white; // $color-bg-darker-primary
    line-height: 2rem;
    margin: 0 10rem;
    padding: 1rem 5rem;
  }
}
</style>
