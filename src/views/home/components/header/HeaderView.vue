<template>
  <section class="header-left">
    <div class="collapse-icon header-left-item" @click="collapseAsideBar">
      <svg-icon :icon="collapseIcon" />
    </div>
    <div @click="gotoCreateArticle" class="header-left-item">
      <el-button type="warning">
        <svg-icon icon="write" />
        <span>写文章</span>
      </el-button>
    </div>
  </section>
  <section class="header-right">right</section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { MutActKey } from '@/constants'

const router = useRouter()
const store = useStore()
const gotoCreateArticle = () => router.push({ name: 'CreateArticle' })
const collapseAsideBar = () => store.dispatch(MutActKey.COLLAPSE_ASIDE_BAR)
const collapseIcon = computed(() =>
  store.getters.asideBarCollapseState ? 'expand' : 'fold'
)
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';

.header-left,
.header-right {
  height: 100%;
  display: flex;
  align-items: center;

  .header-left-item {
    cursor: pointer;
    margin-right: 1rem;
  }
}

.header-left {
  .collapse-icon {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    @include flex();

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }

    > * {
      width: 1.5em;
      height: 1.5em;
    }

    transition: all 0.5s;
  }
}
</style>
