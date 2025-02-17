<template>
  <div id="sidebar_wrapper">
    <div id="sidebar_header">
      <div id="sidebar_logo">
        <logo />
        <span>{{ 'Сим Центр' }}</span>
      </div>

      <div id="sidebar_nav">
        <navigation :node="navigation" />
      </div>
    </div>

    <div id="sidebar_footer">
      <div id="sidebar_user">
        <div id="sidebar_user_info">
          <div id="sidebar_username">
            {{ `${user.firstName} ${user.lastName}` }}
          </div>

          <div id="sidebar_user_role">
            {{ `${user.role}` }}
          </div>
        </div>

        <div id="sidebar_user_avatar">
          {{ `${user.firstName.slice(0, 1)}${user.lastName.slice(0, 1)}` }}
        </div>
      </div>

      <div id="sidebar_footer_actions">
        <div id="logout">
          <logout />
          <span>
            {{ 'Выйти' }}
          </span>
        </div>

        <div id="sidebar_lang">
          <div id="flag_and_language">
            <FlagRU />
            <span>
              {{ 'Русский' }}
            </span>
          </div>
          <arrow />
        </div>
      </div>

      <div id="sidebar_version">
        {{ `Версия: ${version}` }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navigation from './Navigation.vue';
import { version } from '../../../package.json';
import type { INode } from './models/node';
import Logo from '../icons/Logo.vue';
import Logout from '../icons/Logout.vue';
import FlagRU from '../icons/FlagRU.vue';
import Arrow from '../icons/Arrow.vue';
import { useAuthStore } from '@/stores/useAuthStore';

const user = useAuthStore().getUserInfo

const navigation = ref<INode[]>([
  {name: 'Расписание', link: 'shedule'},
  {name: 'Учебные сессии', link: 'training_sessions'},
  {name: 'Список комнат', link: 'rooms_list'},
  {name: 'Пользователи', link: 'users_list'},
  {name: 'Учебные группы', link: 'study_groups'},
  {name: 'Список устройств', link: 'devices_list'},
  {name: 'Настройки системы', link: 'settings'},
  {name: 'Архив', link: 'archive'},
])
</script>

<style scoped>
#sidebar_wrapper {
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100vh;
  background: #FFF;
  justify-content: space-between;
}

#sidebar_logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 1vw;
  margin-bottom: 3vw;
  gap: 0.8rem;
  font-size: 1.5rem;
  font-weight: 800;
}

#sidebar_nav {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#sidebar_footer {
  display: flex;
  flex-direction: column;
  gap: 20px;

}

#sidebar_user {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5% 5%;
  margin: 0 4%;
  gap: 4%;
  border-radius: 16px;
  color: inherit;
  box-shadow: 0 0 20px rgba(0, 0, 0, 15%);
}

#sidebar_user_info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

#sidebar_username {
  font-weight: 800;
}

#sidebar_user_role {
  font-weight: 500;
  font-size: 0.9rem;
}

#sidebar_user_avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2B4EC5;
  font-weight: 800;
  color: #FFFFFF;
  border-radius: 30px;
  padding: 15px;
}

#sidebar_footer_actions {
  display: flex;
  flex-direction: column;
}

#logout {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 800;
  padding: 5% 5%;
  margin: 0 4%;
  gap: 4%;
  border-radius: 16px;
  color: inherit;
}

#logout:hover {
  background-color: #F4F4F4;
  cursor: pointer;
}

#sidebar_lang {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  padding: 5% 5%;
  margin: 0 4%;
  border-radius: 16px;
  color: inherit;
  border: 2px solid #E0E0E0;
}

#sidebar_lang:hover {
  background-color: #F4F4F4;
  cursor: pointer;
}

#flag_and_language {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

#sidebar_version {
  margin: 5%;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>