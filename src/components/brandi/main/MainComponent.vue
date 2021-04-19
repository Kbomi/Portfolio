<template>
  <div id="wrap" class="isTabBar">
    <HeaderComponent />
    <div id="container">
      <BannerComponent />
      <div class="main_prd">
        <div class="main-prd-list today_best_prd">
          <div class="list-title">
            <h2>TODAY 베스트</h2>
            <ul class="tab-list">
              <li><button class="active">전체</button></li>
              <li><button>트렌드</button></li>
              <li><button>브랜드</button></li>
              <li><button>뷰티</button></li>
            </ul>
          </div>
          <ul class="prd-list">
            <li v-for="(item, index) in todayPrdList" :key="index">
              <a href="/">
                <div class="thumbnail"
                  :style="{backgroundImage: 'url('+ item.thumbImage +')'}"
                >
                  <span class="index">{{ index + 1 }}</span>
                </div>
                <div class="desc">
                  <p class="info-store">{{ item.store_name }}</p>
                  <p class="info-product">{{ item.product_name }}</p>
                  <div class="info-price">
                    <span>{{ item.sale }}</span
                    >{{ item.price }}
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <a href="/" class="btn btn-link"><span>베스트 </span>더보기 <i /></a>
        </div>
        <div class="main-prd-list new_prd">
          <div class="list-title">
            <h2>신상 모아보기</h2>
            <ul class="tab-list">
              <li><button class="active">트렌드</button></li>
              <li><button>브랜드</button></li>
              <li><button>뷰티</button></li>
            </ul>
          </div>
          <ul class="prd-list slide-prd-list">
            <li v-for="(item, index) in todayPrdList" :key="index">
              <a href="/">
                <div class="thumbnail"
                  :style="{backgroundImage: 'url('+ item.thumbImage +')'}"
                >
                  <span class="index">{{ index + 1 }}</span>
                </div>
                <div class="desc">
                  <p class="info-store">{{ item.store_name }}</p>
                  <p class="info-product">{{ item.product_name }}</p>
                  <div class="info-price">
                    <span>{{ item.sale }}</span
                    >{{ item.price }}
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <a href="/" class="btn btn-link"
            ><span>브랜드 신상 </span>더보기 <i
          /></a>
        </div>
        <SubBanner />
        <div class="main-prd-list for_you_prd">
          <div class="list-title">
            <h2>당신을 위한 추천</h2>
          </div>
          <ul class="prd-list slide-prd-list">
            <li v-for="(item, index) in todayPrdList" :key="index">
              <a href="/">
                <div class="thumbnail"
                  :style="{backgroundImage: 'url('+ item.thumbImage +')'}"
                >
                  <span class="index">{{ index + 1 }}</span>
                </div>
                <div class="desc">
                  <p class="info-store">{{ item.store_name }}</p>
                  <p class="info-product">{{ item.product_name }}</p>
                  <div class="info-price">
                    <span>{{ item.sale }}</span
                    >{{ item.price }}
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="swiper-pagination">
            <div class="swiper-pagination-fraction">
              <span class="swiper-pagination-current">1</span> / <span class="swiper-pagination-total">6</span>
            </div>
            <button class="swiper-button swiper-button-prev">이전</button>
            <button class="swiper-button swiper-button-next">다음</button>
          </div>
        </div>
        <div class="main-prd-list brandi_price">
          <div class="list-title">
            <h2>놓칠 수 없는 브랜디 특가</h2>
          </div>
          <div class="brandi_price-inner">
            <img v-if="!isMobile" src="/static/images/img-specialprice@3x.png" alt="BRANDI TIME PRICE" />
            <div class="swiper-container">
              <ul class="prd-list slide-prd-list time-list swiper-wrapper">
                <li v-for="(item, index) in todayPrdList" :key="index" class="swiper-slide">
                  <a href="#">
                    <div class="thumbnail"
                      :style="{backgroundImage: 'url('+ item.thumbImage +')'}"
                    >
                      <span class="index percent">{{ index + 40 }}%</span>
                    </div>
                    <div class="desc">
                      <p class="time">
                        <span>남은시간</span>
                        123:05:55
                      </p>
                      <p class="info-product">{{ item.product_name }}</p>
                      <div class="info-price">{{ item.price }}</div>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="swiper-pagination">
                <div />
                <button class="swiper-button swiper-button-prev">이전</button>
                <button class="swiper-button swiper-button-next">다음</button>
              </div>
            </div>
          </div>
        </div>
        <div class="main-prd-list today">
          <div class="list-title">
            <h2><img src="/static/images/ic-haru-l.svg" alt="하루배송"/>상품은 내일 도착</h2>
          </div>
          <ul class="prd-list">
            <li v-for="(item, index) in todayPrdList" :key="index">
              <a href="/">
                <div class="thumbnail"
                  :style="{backgroundImage: 'url('+ item.thumbImage +')'}"
                >
                  <span class="index">{{ index + 1 }}</span>
                </div>
                <div class="desc">
                  <p class="info-store">{{ item.store_name }}</p>
                  <p class="info-product">{{ item.product_name }}</p>
                  <div class="info-price">
                    <span>{{ item.sale }}</span
                    >{{ item.price }}
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <a href="/" class="btn btn-link"><span>하루배송 상품 </span>더보기 <i /></a>
        </div>
        <div class="main-prd-list hot">
          <div class="list-title">
            <h2>지금 뜨고 있는 기획전</h2>
          </div>
          <div class="list-contents">
            <div class="contents left-contents">
              <a href="#" class="contents-banner">
                <img src="/static/images/main/eventImage1.jpeg" alt="4시세일 활용도 높은 무지셔츠" />
              </a>
              <ul class="prd-list normal-list">
                <li v-for="(item, index) in eventList" :key="index">
                  <a href="/">
                    <div class="thumbnail"
                      :style="{backgroundImage: 'url('+ item.thumbImage +')'}"
                    >
                      <span class="index">{{ index + 1 }}</span>
                    </div>
                    <div class="desc">
                      <p class="info-store">{{ item.store_name }}</p>
                      <p class="info-product">{{ item.product_name }}</p>
                      <div class="info-price">
                        <span>{{ item.sale }}</span
                        >{{ item.price }}
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="contents right-contents">
              <a href="#" class="contents-banner">
                <img src="/static/images/main/eventImage2.jpeg" alt="셀럽마켓in브랜디" />
              </a>
              <ul class="prd-list normal-list">
                <li v-for="(item, index) in eventList" :key="index">
                  <a href="/">
                    <div class="thumbnail"
                      :style="{backgroundImage: 'url('+ item.thumbImage +')'}"
                    >
                      <span class="index">{{ index + 1 }}</span>
                    </div>
                    <div class="desc">
                      <p class="info-store">{{ item.store_name }}</p>
                      <p class="info-product">{{ item.product_name }}</p>
                      <div class="info-price">
                        <span>{{ item.sale }}</span
                        >{{ item.price }}
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a href="/" class="btn btn-link"><span>더 많은 기획전 </span>보러가기 <i /></a>
          <div class="swiper-pagination">
            <div class="swiper-pagination-fraction">
              <span class="swiper-pagination-current">1</span> / <span class="swiper-pagination-total">6</span>
            </div>
            <button class="swiper-button swiper-button-prev">이전</button>
            <button class="swiper-button swiper-button-next">다음</button>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
    <button v-if="showBtnTop" class="btn-top" @click="goTop">맨 위로</button>
  </div>
</template>

<script>
import HeaderComponent from "../common/header/HeaderComponent";
import BannerComponent from "./BannerComponent";
import SubBanner from './SubBanner'
import FooterComponent from "../common/FooterComponent";
export default {
  name: "Main",
  components: {
    HeaderComponent,
    BannerComponent,
    SubBanner,
    FooterComponent,
  },
  data() {
    return {
      todayPrdList: [],
      showBtnTop: false,
      eventList: [],
      isMobile: true
    };
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0);
    },
    setSowBtnTop() {
      if (window.scrollY > 120) {
        this.showBtnTop = true;
      } else {
        this.showBtnTop = false;
      }
    },
    checkViewPort() { //모바일, pc 구분
      const viewPort = window.innerWidth;
      if (viewPort > 768) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    },
    initPriceSlide() {
      this.brandiPriceSlide = new Swiper('.brandi_price .swiper-container', {
        slidesPerView: 'auto',
        autoplay: true,
        autoHeight : true,
        freeMode : true,
        slidesOffsetBefore : 16,
        slidesOffsetAfter : 16,
        autoHeight: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination > div",
          type: "fraction",
        },
      })
      console.log('brandiPriceSlide:', this.brandiPriceSlide)
    }
  },
  mounted() {
    // 임시 데이터 넣기
    for (let i = 0; i < 8; i++) {
      this.todayPrdList.push({
        thumbImage: '/static/images/main/thumb1.jpeg',
        store_name: `옷가게 ${i}`,
        product_name: `상품명 ${i}`,
        price: `5${i},000`,
        sale: "21%",
      });
      if(i < 3) {
        this.eventList.push({
          thumbImage: '/static/images/main/eventImage3.jpeg',
          store_name: `옷가게 ${i}`,
          product_name: `상품명 ${i}`,
          price: `5${i},000`,
          sale: "21%",
        })
      }
    }
    this.checkViewPort();
  },
  created() {
    window.addEventListener("scroll", this.setSowBtnTop);
    window.addEventListener("resize", this.checkViewPort)
  },
  destroyed() {
    window.removeEventListener("scroll", this.setSowBtnTop);
    window.removeEventListener("resize", this.checkViewPort)
  },
  watch: {
    isMobile: function(value) {
      if(value) {
        this.brandiPriceSlide.destroy()
      } else {
        this.initPriceSlide()
      }
    }
  }
};
</script>

<style lang='scss' scoped>
#wrap {
  overflow-x: hidden;
}
.main_prd {
  h2 {
    margin: 0 0 16px 0;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: normal;
    letter-spacing: normal;
    word-break: break-word;
    color: #202429;

    @media screen and (min-width: $screen-md-min) {
      font-size: 32px;
      margin: 0;
    }
  }
  .tab-list {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;

    @media screen and (min-width: $screen-md-min) {
      margin: 0;
      font-size: 17px;
    }

    li:not(:first-child) {
      margin-left: 5px;

      @media screen and (min-width: $screen-md-min) {
        margin-left: 32px;
      }
    }

    button {
      display: block;
      padding: 0 4px 4px;
      background: transparent;
      border: none;
      font-size: 14px;
      color: #808893;

      &.active {
        border-bottom: 2px solid #ff204b;
        font-weight: 700;
        color: #ff204b;
      }
    }
  }
  .btn-link {
    display: block;
    max-width: 240px;
    margin: 0 auto 20px;
    padding: 10.5px;
    border: solid 1px #d3d7df;
    border-radius: 28px;
    font-size: 13px;
    color: #5f6773;
    text-align: center;

    @media screen and (min-width: $screen-md-min) {
      max-width: 320px;
      margin-bottom: 0;
      font-size: 14px;
    }

    span {
      font-weight: bold;
    }
    i {
      display: inline-block;
      width: 13px;
      height: 13px;
      @include backgroundImage(
        $image: "/static/images/ic-btn-more-m@3x.png",
        $size: 100%
      );
      vertical-align: middle;
    }
  }
}
.main-prd-list {
  width: 100%;
  overflow: hidden;
  margin-top: 60px;
  padding: 0 16px;

  @media screen and (min-width: $screen-md-min) {
    position: relative;
    margin-top: 100px;
    padding: 0 32px;
  }
  @media screen and (min-width: $screen-lg-min) {
    max-width: 1200px;
    padding: 0 20px;
    margin-right: auto;
    margin-left: auto;
  }
}
.today_best_prd {
  margin-top: 50px;

  @media screen and (min-width: $screen-md-min) {
    margin-top: 80px;
  }
}
.brandi_price {
  @media screen and (min-width: $screen-md-min) {
    position: relative;
  }

  &-inner {
    @media screen and (min-width: $screen-md-min) {
      display: flex;
      align-items: flex-start;

      img {
        width: 320px;
        margin-right: 40px;
        vertical-align: middle;
      }
    }
  }
  .swiper-container {
    position: static;
    @media screen and (min-width: $screen-md-min) {
      width: 100%;
      max-width: calc(100% - 320px - 40px);
    }
  }
}
.list-title {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: $screen-md-min) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
  }
}
.list-contents {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: $screen-md-min) {
    flex-direction: row;
    margin: 0 -16px;
  }

  .contents {
    margin-bottom: 24px;
    border-bottom: 1px solid #ebeef2;

    @media screen and (min-width: $screen-md-min) {
      margin-bottom: 0;
      padding: 0 16px;
      border: none;
    }

    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}
.contents-banner {
  display: block;
  position: relative;
  font-size: 11px;
  line-height: 24px;
  text-align: center;
  color: #fff;

  &::before {
    content: '바로가기';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 82px;
    height: 24px;
    background: rgba(0, 0, 0, 0.4) url('/static/images/ic-more-s@3x.png') no-repeat right 12px center;
    background-size: 7px;
  }
}
.today {
  h2 {
    display: flex;
    justify-content: center;

    img {
      margin-right: 6px;
    }
  }
}
.prd-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;

  @media screen and (min-width: $screen-md-min)  {
    margin: 0 -8px;
  }

  &.slide-prd-list {
    overflow-x: auto;
    overflow-y: hidden;
    display: block;
    width: calc(100% + 40px);
    height: 100%;
    margin: 0 -20px;
    padding: 0 0 0 16px;
    white-space: nowrap;

    @media screen and (min-width: $screen-md-min) {
      overflow: visible;
      display: flex;
      flex-wrap: wrap;
      width: calc(100% + 16px);
      height: 100%;
      margin: 0 -8px;
      padding: 0;
    }
    
    li {
      display: inline-block;

      // @media screen and (min-width: $screen-md-min) {
      //   padding-bottom: 50px;
      // }
    }
  }

  &.time-list {
    flex-wrap: nowrap;
    width: auto;

    @media screen and (min-width: $screen-md-min) {
      width: calc(100% + 40px);
      margin: 0 -40px;
      padding: 0;
    }

    li {
      @media screen and (min-width: $screen-md-min) {
        width: calc((100% / 3));
        padding: 0 20px;
      }
    }
    a {
      @media screen and (min-width: $screen-md-min) {
        display: block;
      }
    }
    .thumbnail .index.percent {
      width: 50px;
      height: 26px;
      background: #ff365e;
      font-size: 13px;
      font-weight: bold;
      line-height: 26px;
      letter-spacing: normal;
    }
    .time {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ebeef2;
      font-size: 13px;
      font-weight: bold;
      text-align: center;
      color: #202429;

      @media screen and (min-width: $screen-md-min) {
        margin-bottom: 12px;
        padding-bottom: 12px;
        font-size: 15px;
      }

      span {
        font-weight: normal;
        color: #808893;
      }
    }
    .info-product {
      @include ellipsis();
      text-align: center;
    }
    .info-price {
      justify-content: center;
      margin-top: 2px;
    }
  }

  &.normal-list {
    margin-top: 8px;
    
    @media screen and (min-width: $screen-md-min) {
      margin-top: 12px;
    }
    
    li {
      width: calc(100% / 3);

      @media screen and (min-width: $screen-md-min) {
        padding: 0 6px 50px;
      }
    }
  }

  li {
    width: 50%;
    padding: 0 4px 20px;

    @media screen and (min-width: $screen-md-min) {
      width: 25%;
      padding: 0 8px 40px;
    }
  }
  p {
    margin: 0;
  }
  .thumbnail {
    position: relative;
    padding-top: 110%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .index {
      position: absolute;
      left: 0;
      top: 0;
      width: 26px;
      height: 30px;
      border-radius: 0;
      font-size: 12px;
      line-height: 26px;
      font-weight: 500;
      text-align: center;
      color: #fff;
      z-index: 2;
      @include backgroundImage($image: "/static/images/ic-bg-flag@3x.png");
    }
  }
  .desc {
    margin-top: 10px;
    text-align: left;

    @media screen and (min-width: $screen-md-min) {
      margin-top: 12px;
    }
  }
  .info-store {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    color: #808893;
    font-size: 12px;
    font-style: normal;

    @media screen and (min-width: $screen-md-min) {
      font-size: 13px;
    }
  }
  .info-product {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    display: block;
    clear: both;
    font-size: 13px;
    font-style: normal;
    color: #202429;
    @media screen and (min-width: $screen-md-min) {
      margin-top: 4px;
      font-size: 15px;
    }
  }
  .info-price {
    display: flex;
    margin-top: 4px;
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    color: #202429;

    @media screen and (min-width: $screen-md-min) {
      margin-top: 8px;
      font-size: 18px;
    }

    span {
      margin-right: 2px;
      color: #ff204b;
      font-size: 15px;
      font-weight: bold;
      @media screen and (min-width: $screen-md-min) {
        margin-right: 6px;
      }
    }
  }
}
.btn-top {
  position: fixed;
  bottom: 72px;
  right: 16px;
  width: 42px;
  height: 42px;
  text-indent: -999px;
  overflow: hidden;
  @include backgroundImage($image: "/static/images/ic-top-r.svg");
  background-color: transparent;
  border: none;
  z-index: 998;
}
// swiper pagination css
.swiper-pagination {
  display: none;
  @media screen and (min-width: $screen-md-min) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 20px;
    z-index: 995;
  }
}
.swiper-pagination-fraction {
  margin-right: 12px;
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #808893;
}
.swiper-button {
  position: static;
  min-width: 40px;
  height: 40px;
  margin-top: 0;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-indent: -999px;
  overflow: hidden;
}
.swiper-button-prev {
  background-image: url('/static/images/ic-square-arrow-l-s@3x.png');
}
.swiper-button-next {
  background-image: url('/static/images/ic-square-arrow-r-s@3x.png');
}
</style>
