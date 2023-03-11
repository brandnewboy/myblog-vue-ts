<template>
  <div>testValue: {{ testProp }}</div>
</template>

<script lang="ts" setup>
defineProps<{
  testProp: string
}>()
</script>

<style></style>
