<template>
  <v-app>

    <top-bar-menu />

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>
<script setup lang="ts">
import TopBarMenu from '@/components/TopBarMenu/TopBarMenu.vue';
</script>
