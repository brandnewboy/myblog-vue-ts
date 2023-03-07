<template>
  <el-scrollbar class="aside-container">
    <AsideInfoBox></AsideInfoBox>
    <el-menu
      class="aside-menu"
      :router="true"
      :collapse="collapse"
      :collapse-transition="false"
      :default-active="currentRoute"
    >
      <SidebarMenu
        v-for="item in menuData"
        :key="item.path"
        :route="item"
      ></SidebarMenu>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { RouteRecordNormalized, useRoute } from 'vue-router'
import SidebarMenu from './components/sidebarMenu'
import AsideInfoBox from '../asideInfoBox/AsideInfoBox.vue'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    },
    menuInfo: {
      type: Array,
      required: true
    }
  },
  components: {
    AsideInfoBox,
    SidebarMenu
  },
  setup(props) {
    const route = useRoute()

    const menuData = computed(() => props.menuInfo as RouteRecordNormalized[])
    const currentRoute = computed(() => route.path.replace('/', ''))

    return {
      menuData,
      currentRoute
    }
  }
})
</script>
<style lang="scss" scoped>
.aside-container {
  height: 100%;
}
</style>
