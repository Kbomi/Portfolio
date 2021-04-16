<template>
  <div id="header">
    <header>
      <a href="/" class="main-banner">
        <img
          src="https://image.brandi.me/home/banner/bannerImage_342358_1617257496.jpg"
          alt="우정쿠폰받아 grils"
        />
      </a>
      <div
        ref="fixHeader"
        v-if="!showSearchArea"
        :class="{ fixed: !isMobile && isNavFix }"
        class="Artc_header"
      >
        <div class="Artc_header_wrap">
          <h1 class="logo_top">
            <a href="/"
              ><img src="/static/images/logo@3x.png" alt="BRANDI"
            /></a>
          </h1>
          <div class="btn-wrap">
            <div v-if="!isMobile" class="web-search-area">
              <input type="text" />
              <button class="btn btn-search hidden_txt">검색</button>
            </div>
            <button
              v-else
              class="btn btn-search hidden_txt"
              @click="setSearchArea"
            >
              검색
            </button>
            <a href="/cart" class="btn btn-cart hidden_txt">장바구니</a>
            <a v-if="!isMobile" href="/favor" class="btn btn-favor hidden_txt"
              >찜</a
            >
            <a v-if="!isMobile" href="/mypage" class="btn btn-mypage hidden_txt"
              >마이페이지</a
            >
          </div>
        </div>
      </div>
      <div v-else>
        <div class="Artc_header search-area">
          <input type="text" />
          <button class="btn btn-search hidden_txt">검색</button>
        </div>
        <div class="dim" @click="setSearchArea" />
      </div>
      <nav
        ref="fixNav"
        class="header-tab"
        :class="{ fixed: isMobile && isNavFix }"
      >
        <ul>
          <li><a href="/" class="active">홈</a></li>
          <li><a href="/">혜택존</a></li>
          <li><a href="/">베스트</a></li>
          <li><a href="/">신상</a></li>
          <li><a href="/">특가</a></li>
          <li><a href="/" class="c-trend">트렌드</a></li>
          <li><a href="/" class="c-brand">브랜드</a></li>
          <li><a href="/" class="c-beauty">뷰티</a></li>
          <li><a href="/">스토어</a></li>
        </ul>
      </nav>
    </header>
    <div class="TabBar_nav">
      <ul>
        <li><a href="/" class="hidden_txt tab-home">홈</a></li>
        <li><a href="/" class="hidden_txt tab-oneday">하루배송</a></li>
        <li><a href="/" class="hidden_txt tab-category">카테고리</a></li>
        <li><a href="/" class="hidden_txt tab-favor">찜</a></li>
        <li><a href="/" class="hidden_txt tab-my">MY</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showSearchArea: false,
      fixNavPosition: 0,
      isNavFix: false,
      isMobile: false,
    };
  },
  methods: {
    setSearchArea: function () {
      this.showSearchArea = !this.showSearchArea;
    },
    handleScroll: function () {
      if (window.scrollY >= this.fixNavPosition) {
        this.isNavFix = true;
      } else {
        this.isNavFix = false;
      }
    },
    checkViewPort(event) {
      const viewPort = event.currentTarget.innerWidth;
      if (viewPort > 768) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.checkViewPort);
  },
  mounted() {
    if (this.isMobile) {
      this.fixNavPosition = this.$refs.fixNav.offsetTop;
    } else {
      this.fixNavPosition = this.$refs.fixHeader.offsetTop;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkViewPort);
  },
};
</script>

<style lang='scss' scoped>
.hidden_txt {
  overflow: hidden;
  text-indent: -9999px;
}
.main-banner img {
  width: 100%;
  vertical-align: middle;
}
h1 {
  display: flex;
  align-items: center;
  max-width: 116px;
  height: 27px;
  margin: 0;
  a,
  img {
    width: 100%;
  }
}
.Artc_header {
  border-bottom: 1px solid #ebeef2;
  padding: 17px 16px 16px;

  @media screen and (min-width: $screen-md-min) {
    padding: 31px 20px;

    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 16px 20px;
      background-color: #fff;
      z-index: 999;
    }
  }

  @media screen and (min-width: $screen-lg-min) {
    padding: 31px 0;
  }

  .Artc_header_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: $screen-md-min) {
      max-width: 1200px;
      margin: auto;
    }
  }

  .btn-wrap {
    display: flex;
    margin: -10px 0;
    @media screen and (min-width: $screen-md-min) {
      margin: 0;
    }
  }
  .btn {
    width: 48px;
    height: 48px;
    border: none;
    background-color: transparent;

    @media screen and (min-width: $screen-md-min) {
      width: 40px;
      height: 40px;

      & + .btn {
        margin-left: 20px;
      }
    }
  }
}
.btn-search {
  padding: 0;
  @include backgroundImage(
    $image: "/static/images/header/ic-search-s.svg",
    $position: right center,
    $size: 28px
  );
}
.btn-cart {
  display: block;
  @include backgroundImage(
    $image: "/static/images/header/ic-cart.svg",
    $size: 28px
  );
}
.btn-favor {
  display: block;
  @include backgroundImage(
    $image: "/static/images/header/ic-favorite.svg",
    $size: 28px
  );
}
.btn-mypage {
  display: block;
  @include backgroundImage(
    $image: "/static/images/header/ic-my.svg",
    $size: 28px
  );
}
.hidden_txt {
  overflow: hidden;
  text-indent: -9999px;
}
.search-area {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 16px;
    left: 16px;
    width: calc(100% - 32px);
    border-top: 2px solid black;
  }

  & + .dim {
    min-height: calc(100vh - 54px - 63px);
    background: transparent;
    position: absolute;
    z-index: -1;
    width: 100%;
  }

  input {
    width: calc(100% - 32px);
    height: 28px;
    border: none;
  }
  .btn-search {
    width: 28px;
    height: 28px;
    margin-bottom: 2px;
  }
}
.web-search-area {
  width: 304px;
  margin-right: 60px;
  border-bottom: 2px solid #202429;

  input {
    width: calc(100% - 40px);
    height: 100%;
    border: none;
  }

  .btn-search {
    width: 32px;
    height: 32px;
    background-image: url("/static/images/header/ico-search.svg");
    background-position: center;
  }
}
.header-tab {
  max-width: 100%;
  padding: 0 6px;
  overflow-x: auto;

  @media screen and (min-width: $screen-md-min) {
    max-width: 1200px;
    margin: auto;
  }

  &.fixed {
    position: fixed;
    left: 50%;
    top: 0;
    width: 100%;
    background: #fff;
    transform: translate(-50%, 0);
    z-index: 999;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  a {
    position: relative;
    display: block;
    position: relative;
    padding: 14px 10px;
    color: #202429;
    font-size: 15px;
    font-weight: bold;
    line-height: 21px;

    &.active::after {
      content: "";
      display: block;
      position: absolute;
      left: 7px;
      right: 7px;
      bottom: 0;
      height: 2px;
      background-color: #000;
    }
  }

  .c-trend {
    color: #ff4569;
  }
  .c-brand {
    color: #cea375;
  }
  .c-beauty {
    color: #dea6a6;
  }
}
.TabBar_nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #bcbcbd;
  background: #fff;
  z-index: 999;

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
  }
  .tab-home {
    background-image: url("/static/images/ic-gnb-aos-home-brandi-s@2x.png");
  }
  .tab-oneday {
    background-image: url("/static/images/ic-gnb-aos-haru-n@2x.png");
  }
  .tab-category {
    background-image: url("/static/images/ic-gnb-aos-categoryline-n@2x.png");
  }
  .tab-favor {
    background-image: url("/static/images/ic-gnb-aos-heart-n@2x.png");
  }
  .tab-my {
    background-image: url("/static/images/ic-gnb-aos-my-n@2x.png");
  }
}
</style>
