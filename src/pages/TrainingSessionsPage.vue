<template>
  <router-view>
    <div id="training_sessions_content">
      <div id="page_header">
        <span id="training_sessions_header">
          {{ 'Учебные сессии' }}
        </span>

        <div id="training_sessions_helper">
          <div id="training_sessions_search">
            <search />
            <input type="text" placeholder="Поиск"/>
          </div>

          <div id="training_sessions_actions">
            <div class="training_sessions_sorting">
              <Filter />
            </div>

            <div class="training_sessions_sorting">
              <sort />
            </div>

            <div id="training_sessions_create">
              <span>{{ 'Создать' }}</span>
            </div>
          </div>
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
import Search from '@/components/icons/Search.vue';
import Filter from '@/components/icons/Filter.vue';
import Sort from '@/components/icons/Sort.vue';

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

#page_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#training_sessions_header {
  font-weight: 800;
  font-size: 1.5rem;
}

#training_sessions_helper {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

#training_sessions_search {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  padding: 5px 15px;
}

#training_sessions_create {
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #3761F3;
  font-weight: 800;
  font-size: 0.9rem;
  color: #FFFFFF;
}

#training_sessions_create:hover {
  cursor: pointer;
}

#training_sessions_actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.training_sessions_sorting {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #F4F4F4;
  border-radius: 10px;
}

.training_sessions_sorting:hover {
  cursor: pointer;
}

input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
  width: 200px;
}

input:focus {
  outline: none;
}

input:focus-visible {
  outline: none;
}
</style>