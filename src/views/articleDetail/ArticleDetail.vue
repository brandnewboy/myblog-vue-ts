<template>
  <div class="article-detail-container">
    <PageHeader
      class="header"
      :title="data ? data.title : ''"
      :time="dayjs(data?.createtime).format('YYYY-MM-DD HH:mm')"
    />

    <article ref="articleContent" class="article-content">
      <v-md-preview :text="data?.content"></v-md-preview>
    </article>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from './PageHeader.vue'
import { useArticleDetail } from '@/api/article'
import { useRoute } from 'vue-router'
import dayjs from 'dayjs'
const route = useRoute()
const { data } = useArticleDetail(String(route.params.id))
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
