<template>
  <header id="header">
    <HeaderBanner :isMobile="this.isMobile" />
    <div ref="fixHeaderTopArea" 
      :class="{ fixed: !isMobile && isNavFix }"
      class="header-top-area">
      <div class="header-top-area-inner">
        <h1>BRANDI</h1>
        <div class="top-area-right">
          <button v-if="isMobile" class="btn-search" @click="setShowSearchArea">
            검색영역열기
          </button>
          <div :class="{ show: showSearchArea }" class="search-form">
            <div class="search-form-inner">
              <input ref="searchInput" type="text" v-model="keyword" @blur="searchInputBlur" />
              <button ref="searchButton" class="btn-search" @click="submitSearch">검색</button>
            </div>
          </div>
          <div class="btn-wrap">
            <a href="#" class="btn-cart">장바구니</a>
            <a href="#" class="btn-favor">찜</a>
            <a href="#" class="btn-mypage">마이페이지</a>
          </div>
        </div>
      </div>
    </div>
    <nav
      ref="fixNav"
      :class="{ fixed: isMobile && isNavFix }"
      class="swiper-container"
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
    <!-- fixed tab nav -->
    <div class="TabBar_nav">
      <ul>
        <li><a href="/" class="tab-home">홈</a></li>
        <li><a href="/" class="tab-oneday">하루배송</a></li>
        <li><a href="/" class="tab-category">카테고리</a></li>
        <li><a href="/" class="tab-favor">찜</a></li>
        <li><a href="/" class="tab-my">MY</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
import HeaderBanner from './HeaderBanner'
export default {
  name: "Header",
  components: {
    HeaderBanner
  },
  data() {
    return {
      showBtnTop: false,
      isMobile: true,
      showSearchArea: false,
      isShowSubMenu: false,
      isNavFix: false,
      keyword: ''
    };
  },
  methods: {
    checkViewPort() { //모바일, pc 구분
      const viewPort = window.innerWidth;
      if (viewPort > 768) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    },
    setShowSearchArea() { // 모바일 검색영역 열고 닫음
      this.showSearchArea = !this.showSearchArea;
      if(this.showSearchArea) {
        setTimeout(() => {
          this.$refs.searchInput.focus()
        }, 0);
      }
    },
    setShowSubMenu(value) { // nav 하위메뉴
      this.isShowSubMenu = value;
    },
    handleScroll: function () { // 모바일 nav fixed
      if (window.scrollY >= this.fixNavPosition) {
        this.isNavFix = true;
      } else {
        this.isNavFix = false;
      }
    },
    saveFixNavPosition() { // fixed 여부를 위한 원래 nav위치 저장
      if (this.isMobile) {
        this.fixNavPosition = this.$refs.fixNav.offsetTop;
      } else {
        this.fixNavPosition = this.$refs.fixHeaderTopArea.offsetTop;
      }
    },
    submitSearch() { // 검색 submit
      if(!this.keyword) {
        alert('검색어를 입력해주세요.')
        return false
      }
      alert('검색어:', this.keyword)
    },
    searchInputBlur() { // 개선필요
      if(this.isMobile) {
        if(!this.keyword) {
          this.setShowSearchArea()
        }
      }
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.checkViewPort);
  },
  mounted() {
    this.checkViewPort();
    this.saveFixNavPosition();

    // load nav swiper
    this.swiperGnb = new Swiper("nav.swiper-container", {
      slidesPerView: 'auto',
      freeMode: true,
      watchOverflow: true,
    });
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
  @media screen and (min-width: $screen-md-min) {
    max-width: 100%;
  }
}
.header-top-area {
  position: relative;
  padding: 16px 6px 16px 16px;

  &-inner {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and(min-width: $screen-lg-min) {
      max-width: 1200px;
      margin: auto;
    }
  }

  @media screen and (min-width: $screen-md-min) {
    padding: 32px 20px;

    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      padding: 16px 20px;
      background: #fff;
    }
  }
}
h1 {
  width: 116px;
  height: 27px;
  margin: 0;
  background: url("/static/images/brandi/header/ic-brandi-symbolrogo-xl.svg") no-repeat;
  background-size: cover;
  text-indent: -999px;
  overflow: hidden;

  @media screen and (min-width: $screen-md-min) {
    width: 182px;
    height: 42px;
  }
}
.top-area-right {
  display: flex;
  margin: -10px 0;

  @media screen and (min-width: $screen-md-min) {
    margin: 0;
  }
}
.btn-search {
  width: 48px;
  height: 48px;
  padding: 0;
  background: transparent url("/static/images/brandi/header/ic-search-s.svg") no-repeat
    center;
  border: none;
  text-indent: -999px;
  overflow: hidden;
  cursor: pointer;

  @media screen and (min-width: $screen-md-min) {
    width: 40px;
    height: 40px;
  }
}
.search-form {
  display: none;

  @media screen and (min-width: $screen-md-min) {
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

    @media screen and (min-width: $screen-md-min) {
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

    @media screen and (min-width: $screen-md-min) {
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

    @media screen and (min-width: $screen-md-min) {
      width: 40px;
      height: 40px;
      margin-left: 20px;
    }
  }
  .btn-cart {
    margin-left: -8px;
    background-image: url("/static/images/brandi/header/ic-cart.svg");

    @media screen and (min-width: $screen-md-min) {
      margin-left: 60px;
    }
  }
  .btn-favor {
    display: none;
    background-image: url("/static/images/brandi/header/ic-favorite.svg");
    @media screen and (min-width: $screen-md-min) {
      display: block;
    }
  }
  .btn-mypage {
    display: none;
    background-image: url("/static/images/brandi/header/ic-my.svg");
    @media screen and (min-width: $screen-md-min) {
      display: block;
    }
  }
}
nav {
  border-top: 1px solid #ebeef2;

  @media screen and (min-width: $screen-md-min) {
    position: relative;
    overflow: visible;
  }

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }

ul {  
    padding: 14px 6px;
    @media screen and (min-width: $screen-md-min) {
      position: static;
      padding: 18px 20px;
      overflow: visible;
      transform: none !important;
    }
    @media screen and (min-width: $screen-lg-min) {
      max-width: 1200px;
      margin: auto;
    }
  }
  li {
    width: auto;
    text-align: center;
    @media screen and (min-width: $screen-md-min) {
      position: static;
      margin-left: 80px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
  a {
    padding: 18px 10px;
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
    // display: none;
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
      padding-top: 0;
      padding-bottom: 0;
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
.TabBar_nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: constant(safe-area-inset-bottom); /* iOS 11.0 */
  padding-bottom: env(safe-area-inset-bottom); /* iOS 11.2 */ 
  border-top: 1px solid #bcbcbd;
  background: #fff;
  z-index: 999;

  @media screen and (min-width: $screen-md-min) {    
    display: none;
  }

  ul {
    display: flex;
  }
  li {
    width: 20%;
    padding: 14px 3px;
  }
  a {
    display: block;
    background-repeat: no-repeat;
    background-size: 28px;
    background-position: center;
    min-height: 28px;
    text-indent: -999px;
    overflow: hidden;
  }
  .tab-home {
    background-image: url("/static/images/brandi/ic-gnb-aos-home-brandi-s@2x.png");
  }
  .tab-oneday {
    background-image: url("/static/images/brandi/ic-gnb-aos-haru-n@2x.png");
  }
  .tab-category {
    background-image: url("/static/images/brandi/ic-gnb-aos-categoryline-n@2x.png");
  }
  .tab-favor {
    background-image: url("/static/images/brandi/ic-gnb-aos-heart-n@2x.png");
  }
  .tab-my {
    background-image: url("/static/images/brandi/ic-gnb-aos-my-n@2x.png");
  }
}
</style>
