<template>
  <div class="errorPage-401">
    401
  </div>
</template>
<script>
import errGif from '@/assets/401_images/401.gif';
export default {
  name: 'Page401',
  data () {
    return {
      errGif: errGif + '?' + new Date()
    };
  }
};
</script>
<style lang="scss" scoped>
  .errorPage-401 {
    width: 800px;
    max-width: 100%;
    margin: 100px auto;
  }
</style>
