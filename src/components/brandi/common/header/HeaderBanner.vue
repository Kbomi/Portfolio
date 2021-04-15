<template>
  <div class="header-banner">
    <a href="#">
      <img
        :src="loadIamgeUrl"
        alt="패션뷰터 뷰티,리빙까지 한 곳에! 라이브 쇼핑앱 브랜디"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "HeaderBanner",
  props: {
    isMobile: Boolean
  },
  computed: {
    loadIamgeUrl: function() {
      if(this.isMobile) {
        return '/static/images/header/banner/bannerImage_mo.jpeg'
      } else {
        return '/static/images/header/banner/bannerImage.jpeg'
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.header-banner img {
  width: 100%;
  margin: auto;
  vertical-align: middle;
  @media screen and (min-width: $screen-sm-min) {
    max-width: 100%;
  }
}
</style>
