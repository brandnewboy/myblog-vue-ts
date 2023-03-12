<template>
  <div>
    <h1>
      创建文章
      <el-button @click="$router.back()" type="warning">
        <svg-icon icon="back" className="back-icon" />
        <span>返回</span>
      </el-button>
    </h1>

    <div class="create-article-title">
      <el-input v-model="article.title" placeholder="标题" />
    </div>

    <div class="create-article-title">
      <el-input v-model="article.desc" placeholder="描述" />
    </div>

    <div class="editor-container">
      <el-tabs v-model="editorMode" type="border-card" class="demo-tabs">
        <el-tab-pane label="markdown" name="markdown">
          <Markdown @submit="onSubmit" />
        </el-tab-pane>
        <el-tab-pane label="富文本" name="futext">
          <FuEditor @submit="onSubmit" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import FuEditor from './components/fuEditor'
import Markdown from './components/markdown'
import { useAddBlog } from '@/api/article'
import { Blog } from '@/types/base'

const editorMode = ref<'markdown' | 'futext'>('markdown')

const article = reactive<Blog>({
  id: '',
  title: '',
  createtime: 0,
  content: '',
  author: '',
  desc: '随手记录的一片笔记'
})

const onSubmit = (content: string) => {
  article.content = content
  useAddBlog(article).then(() => window.$message('提交成功', 'success'))
}
</script>

<style lang="scss" scoped>
.back-icon {
  width: 1.5em;
  height: 1.5em;
  margin-right: 1px;
}
.editor-container {
  margin-top: 1rem;
  color: black;
}
.create-article-title {
  margin-top: 1rem;
}
</style>
