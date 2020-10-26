<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import './assets/stylesheets/application.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-color: #F8F8F8;
}
</style>
