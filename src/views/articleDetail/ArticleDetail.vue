<template>
  <div class="article-detail-container">
    <PageHeader class="header" :title="data.title" time="2022-11-26" />

    <article ref="articleContent" class="article-content"></article>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PageHeader from './PageHeader.vue'
import { ArticleProps } from '@/types/base'
import { useMarkdownViewer } from '@/utils/hooks/use-markdown-viewer'

const store = useStore()

const data = computed<ArticleProps>(
  () =>
    store.state.AppModule.articleList[0] || {
      title: '',
      content: ''
    }
)

const viewer = useMarkdownViewer({
  className: 'article-content',
  data: data.value.content
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
