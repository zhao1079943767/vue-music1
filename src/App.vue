<template>
  <div id="app">
    <m-header></m-header>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tabbar from "components/tab/tab"
export default {
  name: 'APP',
  data () {
    return {

    }
  },
  components: { MHeader, Tabbar }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~common/stylus/variable'
</style>
