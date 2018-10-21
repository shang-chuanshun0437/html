<template>
<div id = "app">
  <router-view></router-view>
</div>
   
</template>

<script>

import Top from './components/common/Top'

export default {
  name: 'App',
  components: {
    Top
  }
}
</script>

<style>

</style>
