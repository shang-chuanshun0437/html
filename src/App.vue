<template>
<div id = "app">
<el-row>
    <div>
     <top></top>
    </div>
</el-row>
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
