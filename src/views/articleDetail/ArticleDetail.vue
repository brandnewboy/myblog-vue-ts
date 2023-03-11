<template>
  <div class="article-detail-container">
    <!-- <PageHeader class="header" :title="data?.data[0].title" time="2022-11-26" /> -->

    <article ref="articleContent" class="article-content"></article>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from './PageHeader.vue'
import { useMarkdownViewer } from '@/utils/hooks/use-markdown-viewer'
import { useArticleList } from '@/api/article'
import { useRoute } from 'vue-router'

const route = useRoute()

const { data } = useArticleList({ id: Number(route.params.id) })
console.log(data)
const viewer = useMarkdownViewer({
  className: 'article-content',
  data: ''
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
