<template>
  <el-container class="home-container">
    <el-aside class="aside" :style="{ width: collapse ? '64px' : '' }">
      <Aside :collapse="collapse" :menu-info="menuInfo"></Aside>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main class="main-content">
        <MainView> </MainView>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Utils from '@/utils/index'
import Header from './components/header'
import Aside from './components/aside'
import MainView from './components/main'
export default defineComponent({
  components: {
    Header,
    Aside,
    MainView
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const collapse = computed(() => store.getters.asideBarCollapseState)
    const routes = router.getRoutes()
    const menuInfo = Utils.generateMenuInfo(routes)
    return {
      collapse,
      menuInfo
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/variable.scss';
.home-container {
  @include position-center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* border-radius: 10px; */
  color: $color-font-primary;
  /* background: $color-homebg-primary; */
  box-shadow: 3px 3px 10px 5px rgba($color: $color-homebg-primary, $alpha: 0.6);
  .main-content {
    /* width: 70%; */
    height: 93vh;
  }

  .header {
    @include layout(bottom);
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .aside {
    height: 100vh;
    @include layout(right);
    transition: width 0.3s;
  }
}
</style>
