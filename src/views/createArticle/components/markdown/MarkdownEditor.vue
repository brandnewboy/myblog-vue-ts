<template>
  <div>
    <h1>markdown</h1>
    <div class="markdown-editor-box"></div>
    <section class="editor-footer">
      <el-button @click="submit">提交</el-button>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import { useMarkdown } from '@/utils/hooks/use-markdown'

const emits = defineEmits<{
  (e: 'submit', content: string): void
}>()

const markdown = useMarkdown({
  element: 'markdown-editor-box',
  height: '28rem'
})

const submit = () => {
  console.log(markdown.value?.getHTML())
  emits('submit', markdown.value?.getHTML() || '')
}
</script>

<style lang="scss">
.editor-footer {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
