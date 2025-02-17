<template>
  <div id="app">
    <sidebar />
    <div id="page-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/sidebar/Sidebar.vue';

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
</style>