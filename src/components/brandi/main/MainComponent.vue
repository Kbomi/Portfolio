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
                <div class="thumbnail">
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
          <ul class="prd-list">
            <li v-for="(item, index) in todayPrdList" :key="index">
              <a href="/">
                <div class="thumbnail">
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
            ><span>트렌드 신상 </span>더보기 <i
          /></a>
        </div>
      </div>
    </div>
    <FooterComponent />
    <button v-if="showBtnTop" class="btn-top" @click="goTop">맨 위로</button>
  </div>
</template>

<script>
import HeaderComponent from "../common/header/HeaderComponent";
import BannerComponent from "../main/BannerComponent";
import FooterComponent from "../common/FooterComponent";
export default {
  name: "Main",
  components: {
    HeaderComponent,
    BannerComponent,
    FooterComponent,
  },
  data() {
    return {
      todayPrdList: [],
      showBtnTop: false,
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
  },
  mounted() {
    // 임시 데이터 넣기
    for (let i = 0; i < 8; i++) {
      this.todayPrdList.push({
        store_name: `옷가게 ${i}`,
        product_name: `상품명 ${i}`,
        price: `5${i},000`,
        sale: "21%",
      });
    }
  },
  created() {
    window.addEventListener("scroll", this.setSowBtnTop);
  },
  destroyed() {
    window.addEventListener("scroll", this.setSowBtnTop);
  },
};
</script>

<style lang='scss' scoped>
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

    @media screen and (min-width: $screen-sm-min) {
      font-size: 32px;
      margin: 0;
    }
  }
  .tab-list {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;

    @media screen and (min-width: $screen-sm-min) {
      margin: 0;
      font-size: 17px;
    }

    li:not(:first-child) {
      margin-left: 5px;
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

    @media screen and (min-width: $screen-sm-min) {
      max-width: 320px;
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
  padding: 0 16px;

  @media screen and (min-width: $screen-sm-min) {
    padding: 0 32px;
  }
  @media screen and (min-width: $screen-lg-min) {
    max-width: 1200px;
    margin: auto;
  }
}
.list-title {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: $screen-sm-min) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
  }
}
.new_prd {
  margin-top: 40px;

  @media screen and (min-width: $screen-sm-min) {
    margin-top: 100px;
  }
  .prd-list {
    overflow-x: auto;
    overflow-y: hidden;
    display: block;
    width: calc(100% + 40px);
    height: 100%;
    margin: 0 -20px;
    padding: 0 0 0 16px;
    white-space: nowrap;

    @media screen and (min-width: $screen-sm-min) {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      display: inline-block;
    }
  }
}
.prd-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;

  li {
    width: 50%;
    padding: 0 4px 20px;

    @media screen and (min-width: $screen-sm-min) {
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
    @include backgroundImage(
      $image:
        "https://image.brandi.me/cproduct/2021/03/10/SB000000000022162865_1615361259_image1_S.jpeg"
    );
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

    @media screen and (min-width: $screen-sm-min) {
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
    @media screen and (min-width: $screen-sm-min) {
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

    @media screen and (min-width: $screen-sm-min) {
      margin-top: 8px;
      font-size: 18px;
    }

    span {
      margin-right: 2px;
      color: #ff204b;
      font-size: 15px;
      font-weight: bold;
      @media screen and (min-width: $screen-sm-min) {
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
</style>
