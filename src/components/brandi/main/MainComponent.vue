<template>
  <div id="wrap" class="isTabBar">
    <HeaderComponent />
    <div id="container">
      <BannerComponent />
      <div class="main-product">
        <ListComponent :wrapperClass="'product-today-best'" :isMoreBtn="true" :isPage="false" />
        <ListComponent :wrapperClass="'product-new'" :isMoreBtn="true" :isPage="false" />
        <SubBanner />
        <ListComponent :wrapperClass="'product-for-you'" :listClass="'slide-product-list'" :isMoreBtn="false" :isPage="true" />
        <PriceList />
        <ListComponent :wrapperClass="'product-today'" :listClass="''" :isMoreBtn="true" :isPage="false" />
        <EventList />
      </div>
    </div>
    <FooterComponent />
    <button type="button" v-if="showBtnTop" class="btn-top" @click="goTop">맨 위로</button>
  </div>
</template>

<script>
import HeaderComponent from "../common/header/HeaderComponent";
import BannerComponent from "./BannerComponent";
import ListComponent from './common/ListComponent'
import PriceList from './PriceList'
import EventList from './EventList'
import SubBanner from './SubBanner'
import FooterComponent from "../common/FooterComponent";
export default {
  name: "Main",
  components: {
    HeaderComponent,
    BannerComponent,
    ListComponent,
    PriceList,
    EventList,
    SubBanner,
    FooterComponent
  },
  data() {
    return {
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
    }
  },
  created() {
    window.addEventListener("scroll", this.setSowBtnTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.setSowBtnTop);
  }
};
</script>

<style lang='scss' scoped>
#wrap {
  overflow-x: hidden;
}
.btn-top {
  position: fixed;
  bottom: 72px;
  right: 16px;
  width: 42px;
  height: 42px;
  text-indent: -999px;
  overflow: hidden;
  @include backgroundImage($image: "/static/images/brandi/ic-top-r.svg");
  background-color: transparent;
  border: none;
  z-index: 998;
}
</style>
