<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  ></div>
  <svg
    v-else
    class="svg-icon"
    :class="[className, { [LOGO]: isLogo }]"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import Utils from '@/utils'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    // icon图标
    icon: {
      type: String,
      required: true
    },
    // 图标类名
    className: {
      type: String,
      default: ''
    },
    // 以 logo 或 头像 形式显示
    isLogo: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    /**
     * 判断是否为外部图标
     */
    const isExternal = computed(() => Utils.isExternal(props.icon))
    /**
     * 外部图标样式
     */
    const styleExternalIcon = computed(() => ({
      mask: `url(${props.icon}) no-repeat 50% 50%`,
      '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
    }))
    /**
     * 项目内图标
     */
    const iconName = computed(() => `#icon-${props.icon}`)
    const LOGO = 'logo'

    return {
      isExternal,
      styleExternalIcon,
      iconName,
      LOGO
    }
  }
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  stroke: currentColor;
  overflow: hidden;
}
.logo {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
