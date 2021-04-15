/**
 *
 * 페이지명
 *
 */

'use strict'

function getPageName () {
  var pgName = '알수없음'
  var url = window.location.pathname
  if (url == '/') pgName = '메인'
  // 브랜드
  else if (url == '/categories/new/brand') pgName = '브랜드 > 신상'
  else if (url == '/categories/sale/brand') pgName = '브랜드 > 세일'
  else if (url == '/categories/all/brand' || /\/categories\/[0-9]{1,10}\/brand/.test(url)) pgName = '브랜드 > 카테고리'
  else if (url == '/best/all/brand' || /\/best\/[0-9]{1,10}\/brand/.test(url)) pgName = '브랜드 > 베스트'
  // 뷰티 · 다이어트
  else if (url == '/categories/new/beauty') pgName = '뷰티 > 신상'
  else if (url == '/categories/sale/beauty') pgName = '뷰티 > 세일'
  else if (url == '/categories/all/beauty' || /\/categories\/[0-9]{1,10}\/beauty/.test(url)) pgName = '뷰티 > 카테고리'
  else if (url == '/best/all/beauty' || /\/best\/[0-9]{1,10}\/beauty/.test(url)) pgName = '뷰티 > 베스트'
  // 홈데코
  else if (url == '/categories/new/homedeco') pgName = '홈데코 > 신상'
  else if (url == '/categories/sale/homedeco') pgName = '홈데코 > 세일'
  else if (url == '/categories/all/homedeco' || /\/categories\/[0-9]{1,10}\/homedeco/.test(url)) pgName = '홈데코 > 카테고리'
  else if (url == '/best/all/homedeco' || /\/best\/[0-9]{1,10}\/homedeco/.test(url)) pgName = '홈데코 > 베스트'
  // 핸드메이드
  else if (url == '/categories/new/handmade') pgName = '핸드메이드 > 신상'
  else if (url == '/categories/sale/handmade') pgName = '핸드메이드 > 세일'
  else if (url == '/categories/all/handmade' || /\/categories\/[0-9]{1,10}\/handmade/.test(url)) pgName = '핸드메이드 > 카테고리'
  else if (url == '/best/all/handmade' || /\/best\/[0-9]{1,10}\/handmade/.test(url)) pgName = '핸드메이드 > 베스트'
  // 팬시
  else if (url == '/categories/new/fancy') pgName = '팬시 > 신상'
  else if (url == '/categories/sale/fancy') pgName = '팬시 > 세일'
  else if (url == '/categories/all/fancy' || /\/categories\/[0-9]{1,10}\/fancy/.test(url)) pgName = '팬시 > 카테고리'
  else if (url == '/best/all/fancy' || /\/best\/[0-9]{1,10}\/fancy/.test(url)) pgName = '팬시 > 베스트'
  // 신상
  else if (url == '/newarrival') pgName = '신상'
  // 트렌드
  else if (url == '/categories/new') pgName = '트렌드 > 신상'
  else if (url == '/categories/sale') pgName = '트렌드 > 세일'
  else if (url.indexOf('/categories/') > -1) pgName = '트렌드 > 카테고리'
  else if (url.indexOf('/best/') > -1) pgName = '트렌드 > 베스트'
  // 셀럽공구
  else if (url == '/timedeal') pgName = '셀럽공구'
  else if (url == '/event') pgName = '기획전'
  else if (/\/event\/[0-9]{1,100}/.test(url)) pgName = '기획전 - 상세'
  // 스토어
  else if (url == '/shop') pgName = '스토어 리스트'
  else if (/\/shop\/[a-zA-Z0-9]{1,100}\/products\/[0-9]{1,100}/.test(url)) pgName = '스토어 - 상품상세'
  else if (/\/shop\/[a-zA-Z0-9]{1,100}\/cscenter/.test(url)) pgName = '스토어 - CS센터'
  else if (/\/shop\/[a-zA-Z0-9]{1,100}/.test(url)) pgName = '스토어 - 메인'
  // 상품상세
  else if (/\/products\/[0-9]{1,100}/.test(url)) pgName = '상품상세'
  else if (url.indexOf('/checkout/checkout') > -1) pgName = '상품구매'
  else if (/\/order\/[0-9]{1,100}\/complete/.test(url)) pgName = '상품구매 완료'
  else if (url == '/order/fail') pgName = '상품구매 실패'
  // 검색페이지
  else if (url == '/search') pgName = '검색'
  // 장바구니
  else if (url == '/cart') pgName = '장바구니'
  // 마이페이지
  else if (url == '/mypage' || url == '/mypage/orderList') pgName = '주문/배송조회'
  else if (/\/order\/[0-9]{1,100}\/detail\/[0-9]{1,100}\/cancel/.test(url)) pgName = '마이페이지 - 주문/배송조회 - 주문취소요청'
  else if (/\/order\/[0-9]{1,100}\/detail\/[0-9]{1,100}\/refund/.test(url)) pgName = '마이페이지 - 주문/배송조회 - 환불요청'
  else if (/\/order\/[0-9]{1,100}\/detail/.test(url)) pgName = '마이페이지 - 주문/배송조회 - 주문상세조회'
  else if (url == '/order/detail/cancelResult') pgName = '마이페이지 - 주문/배송조회 - 주문취소요청완료'
  else if (url == '/order/detail/refundResult') pgName = '마이페이지 - 주문/배송조회 - 환불요청완료'
  else if (/\/review\/[0-9]{1,100}\/[0-9]{1,100}/.test(url)) pgName = '리뷰 작성'
  else if (url == '/mypage') pgName = '주문/배송조회'
  else if (url == '/mypage/point') pgName = '포인트'
  else if (url == '/mypage/coupon') pgName = '쿠폰함'
  else if (url == '/mypage/qna') pgName = '상품 Q&A'
  else if (url == '/mypage/faq') pgName = 'FAQ'
  else if (url == '/mypage/orderNoMember') pgName = '비회원 구매조회'
  // 계정관련
  else if (url == '/login') pgName = '로그인'
  else if (url == '/logout') pgName = '로그아웃'
  else if (url == '/account/inactive') pgName = '휴면계정 인증'
  else if (url == '/account/verification') pgName = '본인 인증'
  else if (url.indexOf('/account/findid') > -1) pgName = '아이디 찾기'
  else if (url.indexOf('/account/findpw') > -1) pgName = '비밀번호 찾기'
  else if (url.indexOf('/join') > -1) pgName = '회원가입'
  // 푸터
  else if (url == '/faq') pgName = '자주하는 질문'
  else if (url == '/access-term') pgName = '이용약관'
  else if (url == '/policy') pgName = '개인정보취급방침'
  else if (url == '/night-benefit-notice-policy') pgName = '야간혜택수신동의 약관'
  else if (url == '/event-marketing-policy') pgName = '이벤트/마케팅수신동의 약관'
  else if (url == '/third-party-order') pgName = '구매조건 및 개인정보 제3자 제공'
  else if (url == '/privacy-collect-use-policy') pgName = '개인정보 수집 및 이용에 대한 안내'
  else if (url == '/service/access-term') pgName = '앱 이용약관'
  else if (url == '/service/policy') pgName = '앱 개인정보취급방침'
  else if (url == '/service/hiver-access-term') pgName = '하이버 앱 이용약관'
  else if (url == '/service/hiver-policy') pgName = '하이버 앱 개인정보취급방침'
  else if (url == '/service/night-benefit-notice-policy') pgName = '앱 야간혜택수신동의 약관'
  else if (url == '/service/event-marketing-policy') pgName = '앱 이벤트/마케팅수신동의 약관'
  else if (url == '/service/third-party-order') pgName = '앱 구매조건 및 개인정보 제3자 제공'
  else if (url == '/service/privacy-collect-use-policy') pgName = '앱 개인정보 수집 및 이용에 대한 안내'
  return pgName
}
