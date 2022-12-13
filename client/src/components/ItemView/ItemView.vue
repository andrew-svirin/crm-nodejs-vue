<template>
  <v-table>
    <tr v-for="(column, key) in header.columns">
      <th class="text-left pr-1 text-subtitle-2 w-25"> {{ column }} :</th>
      <td>{{ data.rows[key] ?? undefined }}</td>
    </tr>
  </v-table>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type ItemView from '@/components/ItemView/ItemView.d';

defineProps({
  header: {type: Object as PropType<ItemView.Header>, required: true},
  data: {type: Object as PropType<ItemView.Data>, required: false, default: {}},
});
</script>
