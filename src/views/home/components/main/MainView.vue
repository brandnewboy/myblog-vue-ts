<template>
  <el-scrollbar>
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in" name="main">
        <keep-alive :include="cacheList">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const cacheList = computed(() => store.getters.componentCacheList)
</script>
