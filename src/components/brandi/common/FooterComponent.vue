<template>
  <footer>
    <div class="footer-top-area">
      <ul class="terms-list">
        <li><a href="/" target="_blank" class="hidden_txt">이용약관</a></li>
        <li>
          <a href="/" target="_blank" class="hidden_txt"
            ><span>개인정보처리방침</span></a
          >
        </li>
        <li>
          <a href="/" target="_blank" class="hidden_txt">사업자정보확인</a>
        </li>
        <li><a href="/" target="_blank" class="hidden_txt">인재채용</a></li>
      </ul>
      <ul class="sns-list">
        <li><a href="/faq" class="hidden_txt item-faq">자주묻는 질문</a></li>
        <li>
          <a href="/" target="_blank" class="hidden_txt item-kakao"
            >플러스친구</a
          >
        </li>
        <li>
          <a href="/" target="_blank" class="hidden_txt item-facebook"
            >페이스북</a
          >
        </li>
        <li>
          <a href="/" target="_blank" class="hidden_txt item-instagram"
            >인스타그램</a
          >
        </li>
      </ul>
    </div>
    <address>
      <div class="info-company">
        <button
          :class="{ show: isShowCompanyInfo }"
          @click="setShowCompanyInfo"
        >
          (주)브랜디
        </button>
        <div v-if="isShowCompanyInfo" class="desc">
          <p>대표이사 : 서정민</p>
          <p>사업자등록번호 : 220-88-93187</p>
          <p>통신판매업신고 : 2016-서울강남-00359</p>
          <p>호스팅사업자 : (주)브랜디</p>
          <p>
            주소 : 서울 강남구 테헤란로38길 12 (역삼동) 디앤와이빌딩 (06221)
          </p>
          <p>
            개인정보관리책임자 : 윤석호(<a href="#">privacy@brandi.co.kr</a>)
          </p>
        </div>
        <p>
          브랜디는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한
          상품정보 및 거래에 브랜디는 책임을 지지 않습니다.
        </p>
      </div>
      <div class="info-cs">
        <p>고객센터 <a href="tel:000-0000">1566-6575</a></p>
        <dl>
          <dt>영업시간</dt>
          <dd>AM 10:00 ~ PM 17:00 (주말 및 공휴일 휴무)</dd>
          <dt>점심시간</dt>
          <dd>PM 12:30 ~ PM 13:30</dd>
          <dt>고객문의</dt>
          <dd>
            <a href="mailto:brandics@brandi.co.kr">brandics@brandi.co.kr</a>
          </dd>
        </dl>
      </div>
    </address>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isShowCompanyInfo: false,
      isMobile: false,
    };
  },
  methods: {
    setShowCompanyInfo() {
      if (this.isMobile) {
        this.isShowCompanyInfo = !this.isShowCompanyInfo;
      }
    },
    checkViewPort(viewPort) {
      if (viewPort > 768) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.checkViewPort(window.innerWidth));
  },
  destroyed() {
    window.removeEventListener("resize", this.checkViewPort(window.innerWidth));
  },
  mounted() {
    window.innerWidth > 768 ? (this.isMobile = false) : (this.isMobile = true);
    window.innerWidth > 768
      ? (this.isShowCompanyInfo = true)
      : (this.isMobile = false);
  },
};
</script>

<style lang='scss' scoped>
.hidden_txt {
  overflow: hidden;
  text-indent: -9999px;
}
footer {
  margin-top: 80px;
  padding: 20px 0 80px;
  border-top: 1px solid #ebeef2;
  background-color: rgba(242, 244, 247, 0.6);

  @media screen and (min-width: $screen-sm-min) {
    padding: 20px 0 140px;
  }
}
.footer-top-area {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: $screen-sm-min) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: $screen-lg-min) {
    max-width: 1200px;
  }
}
.terms-list {
  display: flex;
  align-items: center;
  padding: 0 16px;
  li:first-child a::before {
    display: none;
  }
  a {
    padding: 20px 4px 0;
    color: #5f6773;
    font-size: 11px;

    @media screen and (min-width: $screen-sm-min) {
      position: relative;
      padding: 0 12px;
      font-size: 14px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background: #acb3bd;
      }
    }
  }
}
.sns-list {
  display: flex;
  margin-top: 12px;
  padding: 0 16px;
  @media screen and (min-width: $screen-sm-min) {
    margin: 0;
    padding: 0;
  }
  li {
    padding: 0 5px 10px;
    @media screen and (min-width: $screen-sm-min) {
      padding: 0 8px;
    }
  }
  a {
    display: block;
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (min-width: $screen-sm-min) {
      display: flex;
      align-items: center;
      width: auto;
      padding-left: 40px;
      background-size: 32px;
      background-position: left center;
      text-indent: 0;
      font-size: 14px;
      color: #5f6773;
    }
  }
  .item-faq {
    background-image: url("/static/images/footer/ic-faq-32.svg");
  }
  .item-kakao {
    background-image: url("/static/images/footer/ic-kakaoplus-rogo-32.svg");
  }
  .item-facebook {
    background-image: url("/static/images/footer/ic-facebook-rogo-32.svg");
  }
  .item-instagram {
    background-image: url("/static/images/footer/ic-insta-rogo-32.svg");
  }
}
address {
  margin-top: 20px;
  padding: 20px 16px 0;
  border-top: 1px solid #ebeef2;

  @media screen and (min-width: $screen-sm-min) {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
  }
}
.info-company {
  @media screen and (min-width: $screen-sm-min) {
    width: calc(100% - 360px);
  }
  button {
    position: relative;
    padding: 0 16px 0 0;
    border: none;
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    color: #313842;
    background-color: transparent;

    @media screen and (min-width: $screen-sm-min) {
      font-size: 18px;
      cursor: default;
      &:focus {
        outline: none;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      width: 12px;
      height: 12px;
      background: url('/static/images/footer/ic-more-down-m.svg') no-repeat center;
      transform: translateY(-50%);

      @media screen and (min-width: $screen-sm-min) {
        display: none;
      }
    }

    &.show::after {
      transform: translateY(-50%) rotate(180deg);
    }
  }
  p {
    margin: 8px 0 11px;
    color: #5f6773;
    font-size: 11px;
    line-height: 16px;
    font-style: normal;

    @media screen and (min-width: $screen-sm-min) {
      margin: 0;
      font-size: 14px;
      line-height: 1.71;
    }
  }

  .desc {
    margin-top: 8px;
    p {
      margin: 0;
      color: #5f6773;
      font-size: 11px;
      line-height: 16px;
      font-style: normal;

      @media screen and (min-width: $screen-sm-min) {
        font-size: 14px;
        line-height: 1.71;
      }
    }
    a {
      color: #5f6773;
    }
  }
}
.info-cs {
  @media screen and (min-width: $screen-sm-min) {
    width: 360px;
  }
  p {
    margin: 0 0 2px;
    color: #313842;
    font-style: normal;
    font-size: 15px;
    font-weight: 700;
  }
  a {
    color: #313842;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
    font-size: 11px;
    font-style: normal;

    & > * {
      margin-top: 6px;
    }
  }
  dt {
    width: 45px;
    font-weight: bold;
  }
  dd {
    width: calc(100% - 45px);
    a {
      text-decoration: underline;
    }
  }
}
</style>
