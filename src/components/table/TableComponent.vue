<template>
  <div id="table_wrapper">
    <div class="table_col_wrapper" id="table_header">
      <div v-for="column in columns" :key="column.name">
        {{ column.name }}
      </div>
    </div>

    <div class="table_col_wrapper" id="table_body">
      <div class="table_row" v-for="row in paginatedRows" :key="row.id">
        <div class="table_cell" v-for="column in columns" :key="column.name">
          <span :class="column.field==='status'?'table_status_field' + ` ${setStylesForStatus(row[column.field])}`:''">
            {{ formatCellValue(row[column.field], column.type) }}
          </span>
        </div>
      </div>
    </div>

    <div id="table_footer">
      <arrow class="table_footer_item" id="table_footer_left_arrow" @click="changePaginationPage('dec')"/>
      <div :class="`table_footer_item ${currentPaginationPage===index?'table_pagination_active':''}`" id="table_pagination" v-for="index in pagination" @click="selectPaginationPage(index)">
        {{ index }}
      </div>
      <arrow class="table_footer_item" id="table_footer_right_arrow" @click="changePaginationPage('inc')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { IColumn } from './table';
import Arrow from '../icons/Arrow.vue';

const columns: Array<IColumn> = [
  {
    name: 'Дата и время',
    type: 'datetime',
    sortable: true,
    field: 'date'
  },
  {
    name: 'Статус',
    type: 'select',
    sortable: true,
    field: 'status'
  },
  {
    name: 'Название учебного модуля',
    type: 'string',
    sortable: true,
    field: 'name_module'
  },
  {
    name: 'Тип сессии',
    type: 'select',
    sortable: true,
    field: 'session_type'
  },
  {
    name: 'Комната',
    type: 'select',
    sortable: true,
    field: 'rooms'
  },
  {
    name: 'Группа',
    type: 'select',
    sortable: true,
    field: 'group'
  }
];

const props = defineProps({
  columns: {
    type: Array<IColumn>,
    default: {}
  },
  rows: {
    type: Array<Object>,
    default: []
  }
});

const formatCellValue = (value: any, type: string) => {
  if (!value) return '';
  
  switch (type) {
    case 'datetime':
      return value;
    case 'select':
      return Array.isArray(value) ? value.join(', ') : value;
    case 'string':
      return value;
    default:
      return value;
  }
};

const setStylesForStatus = (status: string) => {
  if (!status) return '';

  switch (status) {
    case 'Запланировано':
      return 'table_status_field_planned'
    case 'Идет':
      return 'table_status_field_starts'
    case 'Завершено':
      return 'table_status_field_done'
  }
};

const pagination = Math.ceil(props.rows.length / 25)
const currentPaginationPage = ref<number>(1)

const selectPaginationPage = (page: number): void => {
  currentPaginationPage.value = page
}

const changePaginationPage = (operation: string): void => {
  if (operation === 'inc' && currentPaginationPage.value < pagination) {
    currentPaginationPage.value++
  } else if (operation === 'dec' && currentPaginationPage.value > 1) {
    currentPaginationPage.value--
  }
}

const paginatedRows = computed(() => {
  const start = (currentPaginationPage.value - 1) * 25;
  const end = start + 25;
  return props.rows.slice(start, end);
});
</script>

<style scoped>
#table_wrapper {
  flex: 1;
  border-radius: 10px;
  border: 2px solid #E0E0E0;
  display: flex;
  flex-direction: column;
  max-height: 86vh;
  min-height: 86vh;
}

.table_col_wrapper {
  display: grid;
  grid-template-columns: 3fr 2fr 5fr 2fr 3fr 2fr;
}

#table_header {
  position: sticky;
  top: 0;
  padding: 1%;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 10px 10px 0px 0px;
  background: #F5F7F9;
  z-index: 1;
}

#table_body {
  overflow-y: auto;
  flex: 1;
}

#table_body::-webkit-scrollbar {
  width: 5px;
}

#table_body::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0%);
  border-radius: 4px;
}

#table_body::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 24%);
  border-radius: 4px;
}

#table_body::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 34%);
}

.table_row {
  display: contents;
}

.table_cell {
  padding: 2%;
  display: flex;
  align-items: center;
  min-height: 50px;
}

.table_row:nth-child(even) .table_cell {
  background-color: #F4F4F4;
}

.table_status_field {
  padding: 5px 15px;
  margin: 0px 5px;
  border-radius: 20px;
}

.table_status_field_planned {
  background-color: #AFBFF5;
}

.table_status_field_starts {
  background-color: #FFDAA1;
}

.table_status_field_done {
  background-color: #91C893;
}

#table_footer {
  position: sticky;
  bottom: 0;
  padding: 1%;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 0px 0px 10px 10px;
  background: #F5F7F9;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.table_footer_item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 8px;
}

.table_footer_item:hover {
  cursor: pointer;
  background-color: #E0E0E0;
}

#table_pagination {
  width: 30px;
  height: 30px;
  font-weight: 500;
}

#table_footer_left_arrow {
  transform: rotate(90deg);
  padding: 10px 7px;
}

#table_footer_right_arrow {
  transform: rotate(-90deg);
  padding: 10px 7px;
}

.table_pagination_active {
  border: 1px solid #3761F3;
  color: #3761F3;
}
</style>