<template>
  <div class="user-info-container">
    <h1>个人简介</h1>
    <InfoItem
      v-for="item in info.basic"
      :key="item"
      :icon="icons[item]"
      :content="item"
    />

    <el-divider />

    <h1>标签</h1>
    <el-tag
      class="user-info-tags"
      v-for="item in info.tags"
      :key="item"
      type="warning"
      effect="light"
      round
      >{{ item }}
    </el-tag>

    <el-divider />

    <p>{{ info.desc }}</p>

    <el-divider />

    <div style="font-size: 1rem">
      <el-steps space="1.5rem" direction="vertical" :active="1">
        <el-step
          v-for="item in learningSteps"
          :key="item.time"
          status="finish"
          :title="item.time + '---' + item.content"
        />
      </el-steps>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import InfoItem from './InfoItem.vue'
import { useWebmasterInfo } from '@/utils/hooks'
const [info, icons] = useWebmasterInfo()

const learningSteps = reactive([
  {
    time: '2022-01-07',
    content: 'html+css+js三剑客'
  },
  {
    time: '2022-02-15',
    content: '微信原生小程序'
  },
  {
    time: '2022-03-20',
    content: 'vue学习'
  },
  {
    time: '2022-04-25',
    content: 'TypeScritp和ES6+语法学习补漏'
  },
  {
    time: '2022-05-01',
    content: '第一个Vue3+TS项目'
  },
  {
    time: '2022-07-25',
    content: '项目使用uniApp制作移动端'
  },
  {
    time: '2022-09-05',
    content: 'Typescript与vue进一步练习'
  },
  {
    time: '2022-11-06',
    content: '接触了React'
  }
])
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
.user-info-container {
  width: 30rem;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  border: solid 2px $color-border-primary;
}
.user-info-tags {
  margin: 5px 5px 5px 0;
}
</style>
