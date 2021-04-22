<template>
  <div ref="main" id="main">
    <div ref="particle1" id="particle1" :style="particle1Position" />
    <div ref="particle2" id="particle2" :style="particle2Position" />
    <div class="container">
      <h1>Bomi</h1>
      <p>{{eventData.alpha}}</p>
      <p>{{eventData.beta}}</p>
      <p>{{eventData.gamma}}</p>
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
      isMobile: true,
      particle1Position: {left: '-200px', top: '-40px'},
      particle2Position: {right: '-200px', bottom: '-40px'},
      eventData: {}
    }
  },
  methods: {
    mouseMoveParticlePosition(event) {
      const particle1Ref = this.$refs.particle1.getBoundingClientRect()
      const moveX = (event.x - particle1Ref.width / 3) / particle1Ref.width * -30
      const moveY = (event.y - particle1Ref.height / 3) / particle1Ref.height * -30
      this.particle1Position = {
        left: -200 + parseInt(moveX) + 'px',
        top: -40 + parseInt(moveY) + 'px'
      }
      this.particle2Position = {
        right: -200 + parseInt(moveX) + 'px',
        bottom: -40 + parseInt(moveY) + 'px'
      }
    },
    handleDeviceParticlePosition(event) {
      this.eventData = event
      const moveX = (event.beta - particle1Ref.width / 3) / particle1Ref.width * -30
      const moveY = (event.gamma - particle1Ref.height / 3) / particle1Ref.height * -30
      this.particle1Position = {
        left: -200 + parseInt(moveX) + 'px',
        top: -40 + parseInt(moveY) + 'px'
      }
      this.particle2Position = {
        right: -200 + parseInt(moveX) + 'px',
        bottom: -40 + parseInt(moveY) + 'px'
      }
    },
    requestOrientationPermission() {
      DeviceOrientationEvent.requestPermission()
      .then(response => {
          if (response == 'granted') {
            window.addEventListener('deviceorientation', this.handleDeviceParticlePosition)
          }
      }).catch(error => {
        console.log('error:', error)
        window.alert('error:', error)
      })
    }
  },
  mounted() {
    const isMobile = window.innerWidth < 769 ? true : false
    if(isMobile) {
      this.requestOrientationPermission
    } else {
      this.$refs.main.addEventListener('mousemove', this.mouseMoveParticlePosition)
    }
  },
  destroyed() {
    const isMobile = window.innerWidth < 769 ? true : false
    if(isMobile) {
      window.removeEventListener('deviceorientation', this.handleDeviceParticlePosition)
    } else {
      this.$refs.main.removeEventListener('mousemove', this.mouseMoveParticlePosition)
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
  overflow: hidden;
}
#particle1 {
  position: absolute;
  width: 100vw;
  height: calc(60vh - 40px);
  border-radius: 50%;
  background: rgba(110, 191, 188, .8);
  transform-origin: left;
  z-index: -1;
}
#particle2 {
  position: absolute;
  width: 95vw;
  height: calc(55vh - 50px);
  border-radius: 50%;
  background: rgba(130, 224, 99, .6);
  z-index: -1;
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
  #particle1,
  #particle2 {
    width: 84vw;
    width: 84vw;
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
