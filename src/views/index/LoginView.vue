<template>
  <div class="login-container">
    <el-form
      ref="formRef"
      class="login-form"
      :model="loginForm"
      :rules="formRules"
    >
      <div class="avatar">
        <img src="@/assets/images/temp_avatar.jpg" />
      </div>
      <el-form-item prop="username">
        <el-input
          class="login-input"
          @focus="containerBgFilter"
          @blur="cancelContainerBgFilter"
          v-model="loginForm.username"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="login-input"
          @focus="containerBgFilter"
          @blur="cancelContainerBgFilter"
          v-model="loginForm.password"
          type="password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-button
        :loading="isSubmitLoading"
        class="login-button"
        type="primary"
        @click="loginAction"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script lang="ts">
import Utils from '@/utils'
import { LoginFormProps } from '@/types/base'
import { ContainerBgController } from '@/utils/style/login'
import { MutActKey } from '@/constants'
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()
    const toggleLocale = () => store.commit(MutActKey.TOGGLE_LOCALE)

    let bgController: ContainerBgController
    // 背景模糊控制
    onMounted(() => {
      bgController = new ContainerBgController()
    })
    const containerBgFilter = () => bgController.toggleControl('focus')
    const cancelContainerBgFilter = () => bgController.toggleControl('blur')

    const loginForm = reactive<LoginFormProps>({
      username: '混吃等死的咸鱼仔',
      password: '123456'
    })
    const formRules = reactive({
      username: [
        {
          required: true,
          trigger: 'blur',
          validator: Utils.Validator.validateUsername
        }
      ],
      password: [
        {
          required: true,
          trigger: 'change',
          validator: Utils.Validator.validatePassword
        }
      ]
    })
    const formRef = ref()
    let isSubmitLoading = ref<boolean>(false)

    const loginAction = () => {
      formRef.value.validate((isValid: boolean) => {
        if (isValid) {
          isSubmitLoading.value = true
          store
            .dispatch(MutActKey.LOGIN, loginForm)
            .catch(() => console.error('login error'))
            .finally(() => (isSubmitLoading.value = false))
            .then(res => {
              if (res) router.push({ name: 'Home' })
            })
        }
      })
    }

    return {
      toggleLocale,
      containerBgFilter,
      cancelContainerBgFilter,
      loginForm,
      loginAction,
      formRules,
      formRef,
      isSubmitLoading
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/animation.scss';
$filter: blur(4px);
.login-container {
  position: relative;
  min-height: 100vh;
  height: 100%;
  // background-image: url(@/assets/images/login_bgimg.png);
  background-position: top center;
  background-size: 100% 100%;
}
.mask::after {
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  // background-image: url(@/assets/images/login_bgimg.png);
  background-position: top center;
  background-size: 100% 100%;
  filter: blur(10px);
}
.login-form {
  @include position-center;
  z-index: 999;
  width: 400px;
  height: 300px;
  border-radius: 15px;
  background: rgba($color: #000000, $alpha: 0.3);
  @include flex(column);
  transition: all 0.3s;
  .login-button {
    width: 200px;
    height: 33px;
  }
  .login-input {
    transition: all 0.3s;
  }
}
.el-input__inner {
  color: aliceblue;
}
.el-input__wrapper {
  background: rgba($color: #000000, $alpha: 0.4);
  box-shadow: none;
}
.avatar {
  position: absolute;
  z-index: 999;
  top: -2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
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
</style>
