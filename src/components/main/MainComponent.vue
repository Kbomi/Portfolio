<template>
  <div id="main">
    <div class="container">
      <h1>Bomi</h1>
      <h2>연습</h2>
      <ul>
        <li>
          <!-- <a href="/brandi">브랜디 메인</a> -->
          <router-link to="/brandi">브랜디 메인</router-link>
        </li>
      </ul>
      <h2>Vue 공식문서</h2>
      <ul>
        <li>
          <a
            href="https://vuejs.org"
            target="_blank"
          >
            Core Docs
          </a>
        </li>
        <li>
          <a
            href="https://forum.vuejs.org"
            target="_blank"
          >
            Forum
          </a>
        </li>
        <li>
          <a
            href="https://chat.vuejs.org"
            target="_blank"
          >
            Community Chat
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/vuejs"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="http://vuejs-templates.github.io/webpack/"
            target="_blank"
          >
            Docs for This Template
          </a>
        </li>
        <li>
          <a
            href="http://router.vuejs.org/"
            target="_blank"
          >
            vue-router
          </a>
        </li>
        <li>
          <a
            href="http://vuex.vuejs.org/"
            target="_blank"
          >
            vuex
          </a>
        </li>
        <li>
          <a
            href="http://vue-loader.vuejs.org/"
            target="_blank"
          >
            vue-loader
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/awesome-vue"
            target="_blank"
          >
            awesome-vue
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
#main {
  position: relative;
  min-height: 100vh;
  padding: 20px 0;

  &::before {
    position: absolute;
    top: -40px;
    left: 0;
    content: '';
    width: 100vw;
    height: 60vh;
    border-radius: 50%;
    background: rgba(149, 225, 211, .8);
    transform: translateX(-50%);
    z-index: -1;
  }

  &::after {
    position: absolute;
    bottom: -40px;
    right: 0;
    content: '';
    width: 90vw;
    height: 40vh;
    background: rgba(252, 227, 138, .7);
    transform: translateX(20%);
    z-index: -1;
  }
}
.container {
  text-align: center;
}
h1 {
  margin: 0 0 30px;
  font-family: 'Kirang Haerang';
  font-size: 45px;
}
h2 {
  margin: 0;
  font-size: 20px;
}
ul {
  margin: 10px 0 20px;
}
</style>
