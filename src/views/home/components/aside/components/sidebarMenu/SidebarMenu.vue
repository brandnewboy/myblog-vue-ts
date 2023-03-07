<template>
  <template v-if="!menuData.meta.notMenu">
    <el-sub-menu
      v-if="menuData.children && menuData.children.length > 0"
      :index="menuData.path"
    >
      <template #title>
        <MenuItem
          :not-menu="menuData.meta.notMenu"
          :icon="menuData.meta.icon"
          :title="menuData.meta.title"
        ></MenuItem>
      </template>
      <sidebar-menu
        v-for="menuItem in menuData.children"
        :key="menuItem.path"
        :route="menuItem"
      ></sidebar-menu>
    </el-sub-menu>

    <el-menu-item v-else :index="menuData.path" :route="menuData">
      <MenuItem
        :not-menu="menuData.meta.notMenu"
        :icon="menuData.meta.icon"
        :title="menuData.meta.title"
      ></MenuItem>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { RouteRecordNormalized } from 'vue-router'
import MenuItem from '../menuItem'
export default defineComponent({
  components: {
    MenuItem
  },
  props: {
    route: Object
  },
  setup(props) {
    const menuData = computed(() => props.route as RouteRecordNormalized)
    return {
      menuData
    }
  }
})
</script>
<style lang="scss" scoped>
.sub-menu-icon {
  width: 1.5em;
  height: 1.5em;
}
</style>
