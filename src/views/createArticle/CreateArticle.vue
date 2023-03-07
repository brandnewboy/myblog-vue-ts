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
import { MutActKey } from '@/constants'
import { ArticleProps } from '@/types/base'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import FuEditor from './components/fuEditor'
import Markdown from './components/markdown'
import { useLoading } from '@/utils/hooks'

const editorMode = ref<'markdown' | 'futext'>('markdown')
const router = useRouter()
const store = useStore()
const [loadingInstance, startLoading] = useLoading({ text: '提交中' })

const article = reactive<ArticleProps>({
  id: '1',
  title: '',
  desc: '',
  content: ''
})

const onSubmit = (content: string) => {
  article.content = content
  store
    .dispatch(MutActKey.ADD_ARTICLE, {
      title: article.title,
      content: article.content
    })
    .then(() => {
      router.back()
      startLoading()
    })
    .finally(() => loadingInstance.value?.close())
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
