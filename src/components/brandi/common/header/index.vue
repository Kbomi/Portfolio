<template>
  <header id="header">
    <div class="header-banner">
      <img
        src="https://image.brandi.me/home/bannerTest/bannerImage_333521_1617944060.jpg"
        alt="패션뷰터 뷰티,리빙까지 한 곳에! 라이브 쇼핑앱 브랜디"
      />
    </div>
    <div class="header-top-area">
      <h1>BRANDI</h1>
      <div class="top-area-right">
        <button v-if="isMobile" class="btn-search" @click="setShowSearchArea">
          검색영역열기
        </button>
        <div :class="{ show: showSearchArea }" class="search-form">
          <div class="search-form-inner">
            <input type="text" />
            <button class="btn-search">검색</button>
          </div>
        </div>
        <div class="btn-wrap">
          <a href="#" class="btn-cart">장바구니</a>
          <a href="#" class="btn-favor">찜</a>
          <a href="#" class="btn-mypage">마이페이지</a>
        </div>
      </div>
    </div>
    <nav
      ref="fixNav"
      class="swiper-container"
      :class="{ fixed: isMobile && isNavFix }"
    >
      <ul class="swiper-wrapper">
        <li class="swiper-slide"><a href="#">홈</a></li>
        <li class="swiper-slide"><a href="#">하루배송</a></li>
        <li class="swiper-slide"><a href="#">베스트</a></li>
        <li class="swiper-slide"><a href="#">신상</a></li>
        <li class="swiper-slide"><a href="#">특가</a></li>
        <li class="swiper-slide"><a href="#">쇼핑몰마켓</a></li>
        <li
          class="swiper-slide"
          @mouseover="setShowSubMenu(true)"
          @mouseleave="setShowSubMenu(false)"
        >
          <a href="#">트렌드</a>
          <div
            v-if="!isMobile"
            :class="{ show: isShowSubMenu }"
            class="sub-menu-wrap"
          >
            <div class="menu-item">
              <ul>
                <li><a href="#" class="item-title">아우터</a></li>
                <li><a href="#">자켓</a></li>
              </ul>
              <ul>
                <li><a href="#" class="item-title">상의</a></li>
                <li><a href="#">티셔츠</a></li>
              </ul>
              <ul>
                <li><a href="#" class="item-title">바지</a></li>
                <li><a href="#">청바지</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li class="swiper-slide"><a href="#">브랜드</a></li>
        <li class="swiper-slide"><a href="#">뷰티</a></li>
        <li class="swiper-slide"><a href="#">기획전</a></li>
        <li class="swiper-slide"><a href="#">스토어</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderBanner",
  data() {
    return {
      showBtnTop: false,
      isMobile: true,
      showSearchArea: false,
      isShowSubMenu: false,
      isNavFix: false,
    };
  },
  methods: {
    checkViewPort() {
      const viewPort = window.innerWidth;
      if (viewPort > 768) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    },
    setShowSearchArea() {
      this.showSearchArea = !this.showSearchArea;
    },
    initNavSlide() {
      if (this.isMobile) {
        this.swiperGnb = new Swiper(".swiper-container", {
          paginationClickable: false,
          spaceBetween: 0,
          initialSlide: 0,
          freeMode: false,
          pagination: false,
          breakpoints: {
            768: {
              slidesPerView: "auto",
              spaceBetween: 20,
              freeMode: true,
            },
          },
        });
      } else {
        if (this.swiperGnb) {
          this.swiperGnb.destroy();
        }
      }
    },
    setShowSubMenu(value) {
      this.isShowSubMenu = value;
    },
    handleScroll: function () {
      if (window.scrollY >= this.fixNavPosition) {
        this.isNavFix = true;
      } else {
        this.isNavFix = false;
      }
    },
    saveFixNavPosition() {
      if (this.isMobile) {
        this.fixNavPosition = this.$refs.fixNav.offsetTop;
      } else {
        this.fixNavPosition = this.$refs.fixHeader.offsetTop;
      }
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.checkViewPort);
  },
  mounted() {
    this.checkViewPort();
    this.initNavSlide();
    this.saveFixNavPosition();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkViewPort);
  },
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
.header-top-area {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  @media screen and (min-width: $screen-sm-min) {
    padding: 32px 20px;
  }
  @media screen and(min-width: $screen-lg-min) {
    max-width: 1200px;
    margin: auto;
  }
}
h1 {
  width: 116px;
  height: 27px;
  margin: 0;
  background: url("/static/images/header/ic-brandi-symbolrogo-xl.svg") no-repeat;
  background-size: cover;
  text-indent: -999px;
  overflow: hidden;

  @media screen and (min-width: $screen-sm-min) {
    width: 182px;
    height: 42px;
  }
}
.top-area-right {
  display: flex;
  margin: -10px 0;

  @media screen and (min-width: $screen-sm-min) {
    margin: 0;
  }
}
.btn-search {
  width: 48px;
  height: 48px;
  padding: 0;
  background: transparent url("/static/images/header/ic-search-s.svg") no-repeat
    center;
  border: none;
  text-indent: -999px;
  overflow: hidden;

  @media screen and (min-width: $screen-sm-min) {
    width: 40px;
    height: 40px;
  }
}
.search-form {
  display: none;

  @media screen and (min-width: $screen-sm-min) {
    display: block;
    width: 304px;
  }

  &.show {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    padding: 14px 16px;
    background: #fff;

    @media screen and (min-width: $screen-sm-min) {
      padding: 0;
    }
  }

  &-inner {
    display: flex;
    border-bottom: 2px solid #000;
  }

  input {
    width: calc(100% - 50px);
    border: none;
  }
  button {
    margin: -10px 0;
    background-position: right center;

    @media screen and (min-width: $screen-sm-min) {
      margin: 0;
    }
  }
}
.btn-wrap {
  display: flex;
  align-items: center;

  a {
    display: block;
    width: 48px;
    height: 48px;
    background-repeat: no-repeat;
    background-size: 28px;
    background-position: center;
    text-indent: -999px;
    overflow: hidden;

    @media screen and (min-width: $screen-sm-min) {
      width: 40px;
      height: 40px;
      margin-left: 20px;
    }
  }
  .btn-cart {
    margin-left: 60px;
    background-image: url("/static/images/header/ic-cart.svg");
  }
  .btn-favor {
    display: none;
    background-image: url("/static/images/header/ic-favorite.svg");
    @media screen and (min-width: $screen-sm-min) {
      display: block;
    }
  }
  .btn-mypage {
    display: none;
    background-image: url("/static/images/header/ic-my.svg");
    @media screen and (min-width: $screen-sm-min) {
      display: block;
    }
  }
}
nav {
  border-top: 1px solid #ebeef2;
  @media screen and (min-width: $screen-sm-min) {
    overflow: visible;
  }

  ul {
    padding: 14px 16px;
    @media screen and (min-width: $screen-sm-min) {
      position: static;
      max-width: 1200px;
      margin: auto;
      padding: 18px 20px;
    }
  }
  li {
    width: auto;
    text-align: center;
    @media screen and (min-width: $screen-sm-min) {
      position: static;
      margin-left: 80px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
  a {
    font-size: 15px;
    font-weight: bold;
    line-height: normal;
    letter-spacing: normal;
    color: #202429;
  }
  .swiper-slide-active a {
    font-weight: bold;
    color: #ff204b;
  }
}
.sub-menu-wrap {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  border-top: 1px solid #e1e1e1;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.26s ease;
  z-index: 998;

  &.show {
    transform: scaleY(1);

    .menu-item {
      display: flex;
    }
  }

  .menu-item {
    display: none;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;

    ul {
      width: calc(100% / 6);
      margin: 0;
      padding: 32px 20px;
      border-right: 1px solid #e1e1e1;
      &:first-child {
        border-left: 1px solid #e1e1e1;
      }
    }

    li {
      margin-left: 0;
      text-align: left;
    }

    a {
      display: block;
      margin-top: 8px;
      color: #737373;
      font-size: 16px;
      line-height: 1.4em;

      &.item-title {
        margin-bottom: 12px;
        color: #202429;
        font-weight: bold;
      }
    }
  }
}
</style>
