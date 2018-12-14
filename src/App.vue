<template>
  <div id="content" class="routerview">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Top></Top>
  </div>
</template>

<script>

import Top from './components/common/Top'

export default {
  name: 'App',
  components: {
    Top,
  },
  created() {
    let user = JSON.parse(window.localStorage.getItem('access-user'));
    let result = {
      userPhone:user.userPhone,
      token:user.token
    };
    this.$store.dispatch("login/login",result);
  },
}
</script>

<style scoped>
  .routerview{
    position: absolute;
    overflow-x: hidden;
    overflow-y: scroll;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  }
</style>
