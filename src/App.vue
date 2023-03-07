<template>
  <ElConfigProvider :locale="locale">
    <router-view></router-view>
    <!-- <test-view></test-view> -->
  </ElConfigProvider>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useStore } from 'vuex'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup() {
    // element全局语言环境注入
    const store = useStore()
    const locale = computed(() => (store.getters.locale === 'zhCn' ? zhCn : en))
    return {
      locale
    }
  }
})
</script>
