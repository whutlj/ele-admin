<template>
  <div class="dashboard-wrapper">
    DashBoard for index
    <div>
      <count-to class="count-num" :startVal="startVal" :endVal="endVal" :duration="duration"></count-to>
    </div>
  </div>
</template>

<script>

import CountTo from 'vue-count-to';
export default {
  name: 'dashboard',
  data () {
    return {
      startVal: 0,
      endVal: 20000,
      duration: 2000
    };
  },
  components: {
    CountTo
  }
};
</script>

<style lang="scss" scoped>
.dashboard-wrapper {
  .count-num {
    font-size: 24px;
    color: #ff7800;
    font-weight: bold;
  }
}
</style>
