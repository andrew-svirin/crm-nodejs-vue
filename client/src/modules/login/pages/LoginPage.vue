<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2>Authorization</h2>
        <login-form ref="loginFormRef" v-model:form="loginForm" />

        <v-btn
          @click="onSubmit"
          color="primary"
          class="mr-4"
        >
          Login
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>
<script setup lang="ts">
import LoginForm from '@/modules/login/components/LoginForm.vue';
import type { LoginForm as LoginFormType } from '@/modules/login/components/LoginForm.types';
import { useStore } from 'vuex';
import type { Ref } from 'vue';
import { ref } from 'vue';
import type { Form } from '@/components/Form/Form.types';

const store = useStore();

const loginFormRef: Ref<Form | undefined> = ref(undefined);
const loginForm: Ref<LoginFormType> = ref({
  email: 'test@email.com',
  password: '123456',
});

const onSubmit = async () => {
  const {valid = false} = await loginFormRef.value?.validate() || {};

  if (!valid) {
    console.log('Login validation error');
    return;
  }

  await store.dispatch('login/LoginPage/authorizeUser', loginForm.value)
    .then(async (authorization: {}) => {

        console.log('authorization', authorization);
      }
    );
};
</script>
