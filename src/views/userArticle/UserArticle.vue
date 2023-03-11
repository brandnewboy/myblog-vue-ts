<template>
  <div class="user-article-container">
    <div
      class="data-card"
      @click="gotoArticleDetail(item.id)"
      v-for="item in list?.data"
      :key="item.id"
    >
      <section class="data-content">
        <div>
          <svg-icon className="content-img" icon="default_article" />
        </div>
        <div>
          <h4>{{ item.title }}</h4>
          {{ item.desc ?? '随便记录一下' }}
        </div>
      </section>
      <section>
        <el-tag type="warning" effect="light" round>精选</el-tag>
        <span class="create-time">{{
          dayjs(item.createtime).format('YYYY-MM-DD HH:mm')
        }}</span>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useArticleList } from '@/api/article'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
const router = useRouter()

const gotoCreateArticle = () => router.push({ name: 'CreateArticle' })
const gotoArticleDetail = (id: number) =>
  router.push({ path: 'article-detail/' + id })
const { data: list } = useArticleList()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
@import '@/assets/styles/mixin.scss';
.user-article-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.data-card {
  width: 18rem;
  height: 10rem;
  background-color: rgba(207, 225, 229, 0.71);
  color: black;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  @include flex(column, space-between, none);

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px 3px rgba(35, 35, 35, $alpha: 0.6);
    transform: translateY(-0.1rem);
  }

  .create-time {
    margin-left: 2rem;
    font-size: small;
    font-style: italic;
  }

  .data-content {
    display: flex;

    > div {
      margin-right: 0.8rem;
    }

    .content-img {
      width: 4.5em;
      height: 4.5em;
    }
  }
}
</style>
