<template>
  Profile page
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { onMounted } from 'vue';

const store = useStore();

onMounted(() => {
  loadProfile();
});

const loadProfile = async () => {
  await store.dispatch('profile/ProfilePage/getProfile');
};

</script>
