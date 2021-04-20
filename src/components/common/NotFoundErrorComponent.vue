<template>
  <div id="error" class="error-404">
    <p>죄송합니다.<br />페이지를 찾을 수 없습니다.</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .error-404 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
</style>
