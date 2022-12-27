<template>
  <v-app-bar
    elevation="0"
    clipped-left
    absolute
    app
    height="100"
  >
    <v-container>
      <v-row align="center">
          <span class="d-flex d-sm-none">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </span>

        <v-app-bar-title class="ml-3 logo-text">CRM</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="d-none d-sm-flex">
          <v-btn-toggle>
            <v-btn
              v-for="menuItem in menuItems"
              v-bind:key="menuItem.path"
              :to="menuItem.path"
            >
              {{ menuItem.title }}
            </v-btn>
          </v-btn-toggle>
        </v-toolbar-items>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
    app
  >
    <v-list
      nav
      dense
    >

      <v-list-item
        v-for="menuItem in menuItems"
        :key="menuItem.title"
        :to="menuItem.path"
      >
        <v-list-item-media>
          <v-icon>{{ menuItem.icon }}</v-icon>
        </v-list-item-media>

        <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue';
import type { MenuItem } from '@/components/TopBarMenu/TopBarMenu.d';

const drawer: Ref<boolean> = ref(false);

const menuItems: MenuItem[] = [
  {path: '/', title: 'Home', icon: 'mdi-home'},
  {path: '/profile', title: 'Profile', icon: 'mdi-account'},
  {path: '/users', title: 'Users', icon: 'mdi-account-group'},
];
</script>
