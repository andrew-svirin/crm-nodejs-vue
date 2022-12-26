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
      v-model="form.username"
      label="Username"
      required
    ></v-text-field>

    <v-text-field
      v-model="form.password"
      label="Password"
      required
    ></v-text-field>
  </v-form>
</template>

<script setup lang="ts">
import { type PropType, type Ref, ref } from 'vue';
import type { VForm } from 'vuetify/components';
import type { Form } from '@/components/Form/Form.d';
import type UserForm from '@/modules/user/components/UserForm/UserForm.d';

defineProps({
  form: {type: Object as PropType<UserForm>, required: true},
});

const formRef: Ref<VForm | undefined> = ref(undefined);

defineExpose({
  validate: async () => formRef.value?.validate(),
  reset: () => formRef.value?.reset(),
} as Form);
</script>
