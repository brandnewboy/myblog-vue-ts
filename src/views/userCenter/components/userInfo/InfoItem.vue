<template>
  <div class="info-item-container">
    <svg-icon :icon="icon" className="icon"></svg-icon>
    <a v-if="link" :href="content" target="_blank">{{ content }}</a>
    <span v-else>{{ content }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
  content: string
  link?: boolean
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
