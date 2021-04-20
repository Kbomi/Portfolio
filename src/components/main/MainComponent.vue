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
            href="http://router.vuejs.org/"
            target="_blank"
          >
            vue-router
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
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
li {
  margin: 5px 0;
}
a {
  padding: 5px 0;
  color: $PRIMARY_COLOR;
}

@media screen and (min-width:$screen-md-min) {
  #main {
    &::before{
      width: 50vw;
      height: 60vh;
    }
  }
  .container {
    padding: 0 30px;
  }
  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  li {
    width: 50%;
  }
}
</style>
