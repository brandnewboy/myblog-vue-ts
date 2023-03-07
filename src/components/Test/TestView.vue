<template>
  <div>testValue: {{ testProp }}</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  testProp: string
}>()
</script>

<style></style>
