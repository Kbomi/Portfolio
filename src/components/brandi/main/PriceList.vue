<template>
  <div class="main-product-list product-price">
    <ListTitle :title="'놓칠 수 없는 브랜디 특가'" :tabs="[]" />
    <div class="product-price-inner">
      <img v-if="!isMobile" src="/static/images/brandi/img-specialprice@3x.png" alt="BRANDI TIME PRICE" />
      <div class="swiper-container">
        <ul class="product-list slide-product-list time-list swiper-wrapper">
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
        <SlideButton :currentPage="currentPage" :totalPage="totalPage" :prevPage="prevPage" :nextPage="nextPage" />
      </div>
    </div>
  </div>
</template>

<script>
import ListTitle from './common/ListTitle'
import SlideButton from './common/SlideButton'
export default {
  name: 'PriceList',
  props: {
    wrapperClass: String,
    listClass: String,
    isMoreBtn: Boolean,
    isPage: Boolean
  },
  components: {
    ListTitle,
    SlideButton
  },
  data() {
    return {
      todayPrdList: [],
      currentPage: 1,
      totalPage: 6,
      isMobile: true
    };
  },
  methods: {
    prevPage() {
      this.currentPage -= 1
    },
    nextPage() {
      this.currentPage += 1
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
      this.brandiPriceSlide = new Swiper('.product-price .swiper-container', {
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
    }
  },
  watch: {
    isMobile: function(value) {
      if(value) {
        this.brandiPriceSlide.destroy()
      } else {
        this.initPriceSlide()
      }
    }
  },
  mounted() {
    // 임시 데이터 넣기
    for (let i = 0; i < 8; i++) {
      this.todayPrdList.push({
        thumbImage: '/static/images/brandi/main/thumb1.jpeg',
        store_name: `옷가게 ${i}`,
        product_name: `상품명 ${i}`,
        price: `5${i},000`,
        sale: "21%",
      });
    }
    this.checkViewPort()
  },
  created() {
    window.addEventListener("resize", this.checkViewPort)
  },
  destroyed() {
    window.removeEventListener("resize", this.checkViewPort)
  },
}
</script>


<style lang='scss' scoped>
  .main-product-list {
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
  .product-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -4px;

    @media screen and (min-width: $screen-md-min)  {
      margin: 0 -8px;
    }

    &.slide-product-list {
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
        @include backgroundImage($image: "/static/images/brandi/ic-bg-flag@3x.png");
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
  .product-price {
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
</style>