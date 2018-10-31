<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import Sidebar from './sidebar/index'
import AppMain from './AppMain'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain
  }
};
</script>
