<template>
  <div class="main-product-list product-hot">
    <ListTitle :title="'지금 뜨고 있는 기획전'" :tabs="[]" />
    <div class="list-contents">
      <div class="contents left-contents">
        <a href="#" class="contents-banner">
          <img src="/static/images/brandi/main/eventImage1.jpeg" alt="4시세일 활용도 높은 무지셔츠" />
        </a>
        <ul class="product-list normal-list">
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
          <img src="/static/images/brandi/main/eventImage2.jpeg" alt="셀럽마켓in브랜디" />
        </a>
        <ul class="product-list normal-list">
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
    <LinkButton :hrefLink="'#'" :text="'더 많은 기획전'" />
    <SlideButton :currentPage="currentPage" :totalPage="totalPage" :prevPage="prevPage" :nextPage="nextPage" />
  </div>
</template>

<script>
import ListTitle from './common/ListTitle'
import SlideButton from './common/SlideButton'
import LinkButton from './common/LinkButton'
export default {
  name: 'EventList',
  props: {},
  components: {
    ListTitle,
    SlideButton,
    LinkButton
  },
  data() {
    return {
      eventList: [],
      currentPage: 1,
      totalPage: 6
    };
  },
  methods: {
    prevPage() {
      this.currentPage -= 1
    },
    nextPage() {
      this.currentPage += 1
    }
  },
  mounted() {
    // 임시 데이터 넣기
    for (let i = 0; i < 8; i++) {
      if(i < 3) {
        this.eventList.push({
          thumbImage: '/static/images/brandi/main/eventImage3.jpeg',
          store_name: `옷가게 ${i}`,
          product_name: `상품명 ${i}`,
          price: `5${i},000`,
          sale: "21%",
        })
      }
    }
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
      background: rgba(0, 0, 0, 0.4) url('/static/images/brandi/ic-more-s@3x.png') no-repeat right 12px center;
      background-size: 7px;
    }
  }
</style>