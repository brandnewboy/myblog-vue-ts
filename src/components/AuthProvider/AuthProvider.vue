<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { provide, watchEffect, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const userAuth = ref('')
watchEffect(() => {
  userAuth.value = store.getters.token
})
provide<string>('auth', userAuth.value)
</script>
