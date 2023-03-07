<template>
  <ElConfigProvider :locale="locale">
    <AuthProvider>
      <router-view></router-view>
    </AuthProvider>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useStore } from 'vuex'
import AuthProvider from '@/components/AuthProvider'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
const store = useStore()
const locale = computed(() => (store.getters.locale === 'zhCn' ? zhCn : en))
</script>
