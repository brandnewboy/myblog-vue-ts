<template>
  <el-card class="container">
    <div class="avatar">
      <img src="@/assets/images/temp_avatar.jpg" />
    </div>
    <h1 v-show="!isAsidebarCollapse">混吃等死的咸鱼仔</h1>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { MutActKey } from '@/constants'
export default defineComponent({
  setup() {
    const store = useStore()
    const collapseAsideBar = () => store.dispatch(MutActKey.COLLAPSE_ASIDE_BAR)
    const isAsidebarCollapse = computed(
      () => store.getters.asideBarCollapseState
    )
    return {
      collapseAsideBar,
      isAsidebarCollapse
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
.avatar {
  text-align: center;
}
.avatar img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    /* 简写 
      animation: name 持续时间 运动曲线 何时开始 播放次数 是否反方向 是否保持结束状态
      简写属性不包含animation-play-state(暂停动画)
    */
    cursor: pointer;
    animation: shake 0.2s linear 1 alternate-reverse;
  }
}

.container {
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
