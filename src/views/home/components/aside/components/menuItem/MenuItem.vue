<template>
  <template v-if="!notMenu">
    <svg-icon :icon="icon" className="menu-icon" />
    <span class="title">{{ title }}</span>
  </template>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  notMenu?: boolean
  icon?: string
  title: string
}>()
</script>

<style lang="scss" scoped>
.menu-icon {
  width: 1.5em;
  height: 1.5em;
  color: rgb(255, 0, 98);
}

.title {
  margin: 0 5px;
  font-size: 16px;
}
</style>
