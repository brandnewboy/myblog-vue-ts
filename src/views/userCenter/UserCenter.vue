<template>
  <div class="user-center-container">
    <section class="left">
      <UserInfo />
    </section>
    <section class="right">
      <h1 class="title">
        随手记<el-button
          @click="startEdit"
          style="margin-left: 0.5rem"
          type="warning"
          :icon="Edit"
          size="small"
          circle
        />
      </h1>

      <el-collapse v-model="activeName" accordion>
        <TransitionGroup name="notes">
          <el-collapse-item
            v-for="item in listData"
            :key="item"
            :name="item.title"
          >
            <template #title>
              <h1 style="font-size: 1rem">
                {{ item.title }}
              </h1>
            </template>
            <p style="font-size: 0.9rem; font-weight: bold">
              {{ item.content }}
            </p>
          </el-collapse-item>

          <el-collapse-item v-if="activeName === 'edit'" name="edit">
            <template #title>
              <h1 style="font-size: 1rem">记录点什么</h1>
            </template>
            <el-form ref="formRef" :model="formData" :rules="rules">
              <el-form-item label="标题" prop="title">
                <el-input
                  @keydown="onSubmit"
                  v-model="formData.title"
                  placeholder="标题"
                />
              </el-form-item>
              <el-form-item label="内容" prop="content">
                <el-input
                  @keydown="onSubmit"
                  v-model="formData.content"
                  type="textarea"
                  placeholder="记录此刻的想法"
                />
              </el-form-item>
            </el-form>
          </el-collapse-item>
        </TransitionGroup>
      </el-collapse>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, TransitionGroup } from 'vue'
import UserInfo from './components/userInfo'
import { Edit } from '@element-plus/icons-vue'
import { FormInstance } from 'element-plus/es/components/form'

const listData = reactive([
  {
    title: '随便说点什么',
    content: '巴拉巴拉'
  }
])

let activeName = ref('1')
let formRef = ref<FormInstance>()
const startEdit = () => (activeName.value = 'edit')

const onSubmit = (e: KeyboardEvent) => {
  if (e.code === 'Enter') {
    formRef.value?.validate((isValid: boolean) => {
      if (isValid) {
        listData.unshift({ ...formData })
        activeName.value = formData.title
        formRef.value?.resetFields()
      }
    })
  }
}
const formData = reactive({
  title: '',
  content: ''
})
const rules = reactive({
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
  content: [{ required: true, message: '内容不能为空', trigger: 'blur' }]
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
.user-center-container {
  height: 100%;
  @include flex(row, none, none);

  .title {
    margin-bottom: 0.5rem;
  }
  .right {
    margin-left: 5rem;
    width: 60%;

    > * {
      width: 100%;
    }
  }
}
</style>
