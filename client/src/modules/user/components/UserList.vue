<template>
  <data-table
    :header="tableHeader"
    :body="tableBody"
    v-model:page="dataTablePage"
  >
    <template #actions="{ row }">
      <div class="float-right">
        <v-btn
          variant="plain"
          icon="mdi-pencil-outline"
          :to="{ name: 'user_edit', params: { id: row._id }}"
        />
        <v-btn
          variant="plain"
          icon="mdi-trash-can-outline"
          :to="{ name: 'user_delete', params: { id: row._id }, query: { username: row.username }}"
        />
      </div>
    </template>
  </data-table>
</template>

<script setup lang="ts">
import { computed, shallowReactive } from 'vue';
import DataTable from '@/components/DataTable/DataTable.vue';
import type DataTableTypes from '@/components/DataTable/DataTable.d';
import type { ItemList, ItemsPage } from '@/components/ItemList/ItemList.d';
import DataTableUtils from '@/components/DataTable/DataTableUtils';

const props = defineProps({
  page: {type: Number, required: true},
});

const emit = defineEmits(['update:page']);

const dataTablePage = computed({
  get: (): number | undefined => props.page,
  set: (value: number) => emit('update:page', value),
});

const tableHeader: DataTableTypes.Header = {
  columns: [
    {
      name: '_id',
      label: 'ID',
    },
    {
      name: 'username',
      label: 'Username',
    },
    {
      name: 'email',
      label: 'Email',
    },
  ]
};

let tableBody: DataTableTypes.Body = shallowReactive({
  rows: [],
  totalRows: 0,
  perPageRows: 10,
  page: 0,
});

const updateItemsPage = (newItemsPage: ItemsPage) => Object.assign(
  tableBody,
  DataTableUtils.itemsPageToTableBody(newItemsPage, tableHeader)
);

defineExpose({
  updateItemsPage: updateItemsPage,
} as ItemList);
</script>
