<template>
  <div class="info-item-container">
    <svg-icon :icon="icon" className="icon"></svg-icon>
    <span>{{ content }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  icon: string
  content: string
}>()
</script>

<style lang="scss" scoped>
.info-item-container {
  margin: 5px 0;
}
.icon {
  margin-right: 5px;
  color: aliceblue;
}
</style>
