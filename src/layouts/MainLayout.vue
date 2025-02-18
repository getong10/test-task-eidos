<template>
  <div id="app">
    <sidebar v-if="drawerStore.drawer" />
    <div id="page-content">
      <arrow 
        @click="drawerStore.changeDrawerState()"
        :fill="'white'"
        :class="`${drawerStore.drawer?'drawer_action':'drawer_action_closed'}`"
      />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Arrow from '@/components/icons/Arrow.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import { useDrawerStore } from '@/stores/useDrawerStore';

const drawerStore = useDrawerStore();
</script>

<style scoped>
#app {
  display: flex;
}

#page-content {
  flex: 1;
  background: #FFFFFF;
  margin: 0.8%;
  padding: 1.2%;
  border-radius: 16px;
}

.drawer_action {
  position: absolute;
  transform: rotate(90deg);
  background-color: #2F3144;
  top: 4%;
  left: 19%;
  padding: 10px 7px;
  border-radius: 20px;
  cursor: pointer;
}

.drawer_action_closed {
  position: absolute;
  background-color: #2F3144;
  padding: 10px 7px;
  border-radius: 20px;
  cursor: pointer;
  top: 4%;
  left: -1%;
  transform: rotate(-90deg);
}
</style>