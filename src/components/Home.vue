<template>
<el-row>
    <div>
     <top></top>
     <LeftSideNav></LeftSideNav>
    </div>
</el-row>

</template>

<script>

import Top from '@/components/common/Top'
import LeftSideNav from '@/components/common/LeftSideNav';
export default {
  name: 'Home',
  components: {
    Top,
    LeftSideNav
  }
}
</script>

<style scoped>
  
    
</style>
