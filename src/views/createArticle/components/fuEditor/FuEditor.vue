<template>
  <div>
    <h1>富文本编辑器</h1>
    <div class="fu-editor-box"></div>
    <section class="editor-footer">
      <el-button @click="submit">提交</el-button>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import { useFuTextEditor } from '@/utils/hooks/use-fu-text-editor'

const emits = defineEmits<{
  (e: 'submit', content: string): void
}>()

const editor = useFuTextEditor('fu-editor-box', { height: 350 })

const submit = () => {
  emits('submit', editor.value?.txt.html() || '')
}
</script>

<style lang="scss">
.editor-footer {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
