<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { provide, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const userAuth = computed<string>(() => store.getters.token)
provide<string>('auth', userAuth.value)
</script>
