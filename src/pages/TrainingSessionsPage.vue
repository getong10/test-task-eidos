<template>
  <router-view>
    <div id="training_sessions_content">
      <div id="page_header">
        <span id="training_sessions_header">
          {{ 'Учебные сессии' }}
        </span>

        <div id="training_sessions_search">

        </div>

        <div>
          
        </div>
      </div>

      <table-component :columns="columns" :rows="trainingSessions" />
    </div>
  </router-view>
</template>

<script setup lang="ts">
import type { IColumn } from '@/components/table/table';
import TableComponent from '@/components/table/TableComponent.vue';
import trainingSessions from './models/trainingSessions';

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
]
</script>

<style scoped>
#training_sessions_content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
}
</style>