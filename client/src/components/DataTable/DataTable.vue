<template>
  <v-table>
    <thead>
    <tr>
      <th v-for="column in header.columns">
        {{ column.label }}
      </th>
      <th v-if="$slots.actions">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in body.rows">
      <td v-for="value in row"> {{ value }}</td>
      <td v-if="$slots.actions">
        <slot name="actions" :row="row"></slot>
      </td>
    </tr>
    </tbody>
  </v-table>
  <v-pagination
    v-model="paginatorPage"
    :length="paginatorLength"
  ></v-pagination>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
import type DataTable from '@/components/DataTable/DataTable.d';

const props = defineProps({
  header: {type: Object as PropType<DataTable.Header>, required: true},
  body: {type: Object as PropType<DataTable.Body>, required: false, default: {}},
  page: {type: Number, required: true},
});

const emit = defineEmits(['update:page']);

const paginatorLength = computed((): number =>
  Math.ceil((props.body?.totalRows ?? 1) / props.body?.perPageRows) || 1);

const paginatorPage = computed({
  get: (): number | undefined => props.page,
  set: (value: number) => emit('update:page', value),
});
</script>
