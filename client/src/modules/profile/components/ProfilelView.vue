<template>
  <item-view :header="viewHeader" :data="viewData" />
</template>

<script setup lang="ts">
import ItemView from '@/components/ItemView/ItemView.vue';
import type ItemViewTypes from '@/components/ItemView/ItemView.d';
import type { PropType } from 'vue';
import { computed } from 'vue';
import type Profile from '@/modules/profile/types/Profile';

const props = defineProps({
  profile: {type: Object as PropType<Profile>, required: true},
});

const viewHeader: ItemViewTypes.Header = {
  columns: {
    firstName: 'First Name',
    lastName: 'Last Name',
    birthday: 'Birthday',
  },
};

let viewData = computed((): ItemViewTypes.Data => {
  return {
    rows: {...props.profile},
  };
});
</script>
