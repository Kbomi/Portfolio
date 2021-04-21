<template>
  <div class="swiper-pagination">
    <div class="swiper-pagination-fraction">
      <span class="swiper-pagination-current">{{currentPage}}</span> / <span class="swiper-pagination-total">{{totalPage}}</span>
    </div>
    <button type="button" class="swiper-button swiper-button-prev" @click="prevPage">이전</button>
    <button type="button" class="swiper-button swiper-button-next" @click="nextPage">다음</button>
  </div>
</template>

<script>
export default {
  name: 'SlideButton',
  props: {
    currentPage: Number,
    totalPage: Number,
    prevPage: Function,
    nextPage: Function
  }
}
</script>


<style lang='scss' scoped>
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
    background-image: url('/static/images/brandi/ic-square-arrow-l-s@3x.png');
  }
  .swiper-button-next {
    background-image: url('/static/images/brandi/ic-square-arrow-r-s@3x.png');
  }
</style>