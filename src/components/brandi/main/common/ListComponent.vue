<template>
  <div :class="wrapperClass" class="main-product-list">
    <ListTitle :title="childrenData.title" :tabs="childrenData.tabs" :imageSrc="childrenData.titleImageSrc" :imageAlt="childrenData.titleImageAlt" />
    <ul :class="listClass" class="product-list">
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
    <LinkButton v-if="isMoreBtn" :hrefLink="childrenData.buttonLink" :text="childrenData.buttonText" />
    <SlideButton v-if="isPage" :currentPage="currentPage" :totalPage="totalPage" :prevPage="prevPage" :nextPage="nextPage" />
  </div>
</template>

<script>
import ListTitle from './ListTitle'
import LinkButton from './LinkButton'
import SlideButton from './SlideButton'
export default {
  name: 'ListComponent',
  props: {
    wrapperClass: String,
    listClass: String,
    isMoreBtn: Boolean,
    isPage: Boolean
  },
  components: {
    ListTitle,
    LinkButton,
    SlideButton
  },
  data() {
    return {
      todayPrdList: [],
      currentPage: 1,
      totalPage: 6
    };
  },
  computed: {
    childrenData() {
      switch(this.wrapperClass) {
        case 'product-today-best':
          return {
            title: 'TODAY 베스트',
            tabs: ['전체', '트렌드', '브랜드', '뷰티'],
            buttonLink: '#best',
            buttonText: '베스트'
          }
        case 'product-new':
          return {
            title: '신상 모아보기',
            tabs: ['트렌드', '브랜드', '뷰티'],
            buttonLink: '#new',
            buttonText: '브랜드 신상'
          }
        case 'product-for-you':
          return {
            title: '당신을 위한 추천',
            tabs: []
          }
        case 'product-today':
          return {
            title: '상품은 내일 도착',
            titleImageSrc: '/static/images/brandi/ic-haru-l.svg',
            titleImageAlt: '하루배송',
            buttonLink: '#best',
            buttonText: '베스트'
          }
        default:
          return {}
      }
    }
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
      this.todayPrdList.push({
        thumbImage: '/static/images/brandi/main/thumb1.jpeg',
        store_name: `옷가게 ${i}`,
        product_name: `상품명 ${i}`,
        price: `5${i},000`,
        sale: "21%",
      });
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
  .product-today-best {
    margin-top: 50px;

    @media screen and (min-width: $screen-md-min) {
      margin-top: 80px;
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
</style>