<template>
  <div class="sub-banner swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="/static/images/main/subBanner/subBanner1.jpeg"
          alt="#홈데코#팬시#핸드메이드 내 집을 나답게"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="/static/images/main/subBanner/subBanner2.jpeg"
          alt="인기스토어 할인쿠폰 받을사람? 지금 받으러가기"
        />
      </div>
    </div>
  </div>
</template>

<script>
const swiperOption = {
  slidesPerView: "auto",
  spaceBetween: 32,
  breakpoints: {
    768: {
      spaceBetween: 8,
      slidesOffsetBefore : 16,
      slidesOffsetAfter : 16
    }
  }
};

export default {
  name: "SubBanner",
  data() {
    return {
      subBannerSlide: null,
    };
  },
  methods: {
  },
  mounted() {
    this.subBannerSlide = new Swiper(".sub-banner.swiper-container", swiperOption);
  },
};
</script>

<style lang='scss' scoped>
.sub-banner {
  margin-top: 60px;

  @media screen and (min-width: $screen-lg-min) {
    max-width: 1160px;
    margin-right: auto;
    margin-left: auto;
  }
}
.swiper-slide {
  max-width: 87.777%;

  @media screen and (min-width: $screen-md-min) {
    max-width: 50%;
  }

  img {
    width: 100%;
  }
}
</style>
