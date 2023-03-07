<template>
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
      <el-collapse-item v-for="item in listData" :key="item" :name="item.title">
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
</template>

<script setup></script>

<style></style>
