<template>
  <div v-for="item in props.node" :key="item.name">
    <router-link
      :to="item.link"
      class="nav_item_wrapper"
      :id="route.path===`/${item.link}`?'nav_item_active':'nav_item_unactive'"
    >

    <archive
        :fill="route.path===`/${item.link}`?'white':'#999999'"
        v-if="item.name === 'Архив'"
       />

      <calendar-blank
        :fill="route.path===`/${item.link}`?'white':'#999999'"
        v-if="item.name === 'Расписание'"
       />

      <door
        :fill="route.path===`/${item.link}`?'white':'#999999'"
        v-if="item.name === 'Список комнат'"
       />

      <graduation-cap
        :fill="route.path===`/${item.link}`?'white':'#999999'"
        v-if="item.name === 'Учебные сессии'"
       />

      <video-camera
        :fill="route.path===`/${item.link}`?'white':'#999999'"
        v-if="item.name === 'Список устройств'"
       />

      <settings
        :fill="route.path===`/${item.link}`?'white':'#999999'"
        v-if="item.name === 'Настройки системы'"
       />

      <student
        :fill="route.path===`/${item.link}`?'white':'#999999'"
        v-if="item.name === 'Пользователи'"
       />

      <user-list
        :fill="route.path===`/${item.link}`?'white':'#999999'"
        v-if="item.name === 'Учебные группы'"
       />

      <span>
        {{ item.name }}
      </span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Archive from '../icons/Archive.vue';
import CalendarBlank from '../icons/CalendarBlank.vue';
import Door from '../icons/Door.vue';
import GraduationCap from '../icons/GraduationCap.vue';
import Settings from '../icons/Settings.vue';
import Student from '../icons/Student.vue';
import UserList from '../icons/UserList.vue';
import VideoCamera from '../icons/VideoCamera.vue';
import type { INode } from './models/node';

const route = useRoute()

const props = defineProps({
  node: {
    type: Array<INode>,
    default: () => {
      return {}
    }
  }
})
</script>

<style scoped>
.nav_item_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 800;
  padding: 5% 5%;
  margin: 0 4%;
  gap: 4%;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
}

#nav_item_unactive:hover {
  background-color: #F4F4F4;
  cursor: pointer;
}

#nav_item_unactive {
  color: inherit;
}

#nav_item_active {
  background-color: #3761F3;
  color: #FFFFFF;
}
</style>