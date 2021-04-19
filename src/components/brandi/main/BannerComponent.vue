<template>
  <div class="banner swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="/static/images/main/banner/mainBanner1.jpeg"
          alt="집콕 아이템 특가"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="/static/images/main/banner/mainBanner2.jpeg"
          alt="바닐라슈 단독 초특가"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="/static/images/main/banner/mainBanner3.jpeg"
          alt="4월 할인 챙기세요"
        />
      </div>
    </div>
    <div class="swiper-pagination">
      <button
        :class="{ play: !isAutoPlay }"
        class="ic-pause"
        @click="setSwiperPlay"
      >
        멈춤
      </button>
      <div />
    </div>
    <button class="swiper-button swiper-button-prev">이전</button>
    <button class="swiper-button swiper-button-next">다음</button>
  </div>
</template>

<script>
const swiperOptions = {
  slidesPerView: 'auto',
  autoHeight : true,
  loop : true,
  centeredSlides : true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    el: 'ic-pause',
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination > div",
    type: "fraction",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      navigation: false,
    },
  }
}
export default {
  name: "MainBanner",
  data() {
    return {
      bannerSlide: null,
      isAutoPlay: true,
    };
  },
  methods: {
    setSwiperPlay() {
      this.isAutoPlay = !this.isAutoPlay;
    },
  },
  mounted() {
    this.bannerSlide = new Swiper(".banner.swiper-container", swiperOptions);
  }
};
</script>

<style lang='scss' scoped>
.swiper-container {
  position: relative;
  margin-bottom: 50px;
  font-size: 20px;

  @media screen and (min-width: $screen-md-min) {
    width: 83.333%;
    margin-bottom: 80px;
    overflow: visible;
  }

  @media screen and (min-width: $screen-lg-min) {
    width: 1000px;
  }
}
.swiper-slide {
  @media screen and (min-width: $screen-md-min) {
    position: relative;
    width: 100% !important;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &.swiper-slide-active::before {
      display: none;
    }
  }

  img {
    width: 100%;
    vertical-align: middle;
  }
}
.swiper-pagination {
  position: absolute;
  right: 16px;
  bottom: 12px;
  display: flex;
  button {
    min-width: 24px;
    height: 24px;
    margin-right: 4px;
    @include backgroundImage(
      $image: "/static/images/ic-stop-m@3x.png",
      $size: 12px
    );
    border: none;
    border-radius: 50%;
    background-color: rgba(32, 36, 41, 0.8);
    overflow: hidden;
    text-indent: -9999px;

    @media screen and (min-width: $screen-md-min) {
      min-width: 38px;
      height: 38px;
      margin-right: 8px;
    }

    &.play {
      background-image: url("/static/images/ic-play-m@3x.png");
    }
  }
}
.swiper-pagination-fraction {
  padding: 5px 10px;
  border-radius: 28.5px;
  background-color: rgba(32, 36, 41, 0.8);
  font-size: 11px;
  text-align: center;
  color: #fff;

  @media screen and (min-width: $screen-md-min) {
    min-width: 80px;
    padding: 10px 18px;
    font-size: 14px;
  }
}
.swiper-button {
  display: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  text-indent: -999px;
  overflow: hidden;

  @media screen and (min-width: $screen-md-min) {
    display: block;
  }
}
.swiper-button-prev {
  left: -24px;
  background: url("/static/images/ic-arrow-l@3x.png") no-repeat center/180%;
}
.swiper-button-next {
  right: -24px;
  background: url("/static/images/ic-arrow-r@3x.png") no-repeat center/180%;
}
</style>
