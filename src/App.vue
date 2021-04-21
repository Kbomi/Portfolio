<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '~@/assets/scss/common';
#app {
  overflow-x: hidden;
}
</style>
