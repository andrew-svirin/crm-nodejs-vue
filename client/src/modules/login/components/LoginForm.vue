<template>
  <v-form
    ref="formRef"
  >
    <v-text-field
      v-model="form.email"
      label="Email"
      :rules="[v => !!v || 'Email is required']"
      required
    ></v-text-field>

    <v-text-field
      v-model="form.password"
      label="Password"
      :rules="[v => !!v || 'Password is required']"
      required
      type="password"
    ></v-text-field>
  </v-form>
</template>

<script setup lang="ts">
import type { PropType, Ref } from 'vue';
import { ref } from 'vue';
import type { VForm } from 'vuetify/components';
import type { LoginForm } from '@/modules/login/components/LoginForm.types';
import type { Form } from '@/components/Form/Form.types';

defineProps({
  form: {type: Object as PropType<LoginForm>, required: true},
});
const formRef: Ref<VForm | undefined> = ref(undefined);
defineExpose({
  validate: async () => formRef.value?.validate(),
} as Form);
</script>
