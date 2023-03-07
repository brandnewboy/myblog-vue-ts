<template>
  <input v-model="param" placeholder="请输入查询参数" />
  <p>请求的数据结果：{{ data }}</p>
</template>
<script setup lang="ts">
import { useUserList } from '@/api'

const { data, refValue: param } = useUserList()
</script>
