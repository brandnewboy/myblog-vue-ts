<template>
  <header>
    <div class="article-detail-header-container">
      <h1 class="back-button" @click="$router.back()">返回上一级</h1>
      <h1>{{ title }}</h1>
      <h1>{{ time }}</h1>
    </div>
    <el-divider></el-divider>
  </header>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  title: string
  time: string
}>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/variable.scss';
.article-detail-header-container {
  @include flex(row, space-between, center);
  .back-button:hover {
    transition: all 0.3s;
    cursor: pointer;
    color: $color-bg-darker-primary;
  }
}
</style>
