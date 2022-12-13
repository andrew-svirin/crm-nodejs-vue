<template>
  <v-card class="mt-4 mb-4">
    <v-card-title>
      <div>
        <span>Profile Information</span>
      </div>
    </v-card-title>
    <v-card-text>
      <profile-view :profile="profile" v-if="profile?._id" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { onMounted, ref, type Ref } from 'vue';
import ProfileView from '@/modules/profile/components/ProfilelView.vue';
import type Profile from '@/modules/profile/types/Profile';

const store = useStore();

let profile: Ref<Profile> = ref({});

onMounted(() => {
  loadProfile();
});

const loadProfile = async () => {
  await store.dispatch('profile/ProfilePage/getProfile');

  Object.assign(profile.value, store.state.profile.ProfilePage.profile);
};

</script>
