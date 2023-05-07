<template>
  <div class="container">
    <aside>aside</aside>
    <main>main</main>
  </div>
</template>

<script lang="ts" setup>
import { useBackgroundImage } from '@/utils/hooks/use-background-image'

useBackgroundImage('')
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  aside {
    width: 20rem;
    height: 100vh;
    background-color: blanchedalmond;
  }

  main {
    height: 100vh;
    flex: 1;
    background-color: aquamarine;
  }
}
</style>
