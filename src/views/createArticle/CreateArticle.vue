<template>
  <div>
    <header class="header">
      <h1>创建文章</h1>
      <section>
        <el-button @click="$router.back()" type="warning">
          <svg-icon icon="back" className="icon" />
          <span>返回</span>
        </el-button>
        <el-button @click="onSubmit" type="warning">
          <svg-icon icon="post" className="icon" />
          <span>提交</span>
        </el-button>
      </section>
    </header>

    <div class="create-article-title">
      <el-input v-model="article.title" placeholder="标题" />
    </div>

    <div class="create-article-title">
      <el-input v-model="article.desc" placeholder="描述" />
    </div>

    <div class="editor-container">
      <v-md-editor v-model="article.content" height="400px"></v-md-editor>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAddBlog } from '@/api/article'
import { Blog } from '@/types/base'

const router = useRouter()

const article = reactive<Blog>({
  id: '',
  title: '',
  createtime: 0,
  content: '',
  author: '',
  desc: '随手记录的一片笔记'
})

const onSubmit = () => {
  useAddBlog(article)
    .then(() => window.$message('提交成功', 'success'))
    .finally(router.back)
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1.2em;
  height: 1.2em;
  margin-right: 1px;
}

.header {
  display: flex;
  justify-content: space-between;
}
.editor-container {
  margin-top: 1rem;
  color: black;
}
.create-article-title {
  margin-top: 1rem;
}
</style>
