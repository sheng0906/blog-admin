<template>
  <div class="w-80 bg-white relative top-1/4 mx-auto shadow-2xl">
    <div class="login-form transition-transform p-6 duration-150">
      <h1 class="text-center text-3xl font-bold mb-4">登录</h1>
      <n-form ref="formRef" label-placement="left">
        <n-form-item path="user.name">
          <n-input v-model:value="user.username" placeholder="输入账号">
            <template #prefix>
              <n-icon :component="PersonOutline" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="user.age">
          <n-input
            v-model:value="user.password"
            show-password-on="click"
            type="password"
            placeholder="输入密码"
          >
            <template #prefix>
              <n-icon :component="LockClosedOutline" />
            </template>
          </n-input>
        </n-form-item>
      </n-form>
      <div class="text-center flex">
        <n-button class="flex-grow" size="large" @click="login" type="info">登录</n-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { login } from '../../../utils/api';
import { NInput, NForm, NFormItem, NButton, NIcon } from 'naive-ui';
import { PersonOutline, LockClosedOutline } from '@vicons/ionicons5';
export default {
  components: {
    NInput,
    NForm,
    NFormItem,
    NButton,
    NIcon,
  },
  setup() {
    const user = reactive({
      username: '',
      password: '',
    });
    const methods = {
      async login() {
        console.log(user.password);
        await login({
          username: user.username,
          password: user.password,
        });
      },
    };

    return {
      user,
      ...methods,
      PersonOutline,
      LockClosedOutline,
    };
  },
};
</script>

<style lang="scss" scoped></style>
