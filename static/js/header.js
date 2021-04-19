$(document).ready(function () {
  $(window).scroll(function () {
    // 너비 값 768 이하인 경우(mobile)만 Fixed 로직 수행
    if (window.innerWidth <= 768) {
      /* ==========[sub_gnb] Start========== */
      let todaydeliveryPageTopClass = '.cleanMenuBlank'
      let todaydeliveryPageValidation = $(todaydeliveryPageTopClass).length > 0 && $('#sub_gnb').length > 0
      let categoryPageTopClass = '.sub_header'
      let categoryPageValidation = $(categoryPageTopClass).length > 0 && $('#sub_gnb').length > 0

      if (window.location.pathname.substring(1, 14) === 'todaydelivery' && todaydeliveryPageValidation) {
        /* 모바일 오늘출발 페이지 */

        // sub_gnb 수직 위치 값
        let subGnbLocationY = $(todaydeliveryPageTopClass).offset().top + $(todaydeliveryPageTopClass).height()
        // sub_gnb 높이 값
        let subGnbHeight = $('#sub_gnb').height()

        if ($(document).scrollTop() > subGnbLocationY) {
          $('#sub_gnb').addClass('gnbFixed')
          $(todaydeliveryPageTopClass).css('margin-bottom', subGnbHeight)
        } else {
          $('#sub_gnb').removeClass('gnbFixed')
          $(todaydeliveryPageTopClass).css('margin-bottom', 0)
        }
      } else if (window.location.pathname.substring(1, 11) === 'categories' && categoryPageValidation) {
        /* 모바일 카테고리 페이지 */

        // sub_gnb 수직 위치 값
        let subGnbLocationY = $(categoryPageTopClass).offset().top + $(categoryPageTopClass).height()
        // sub_gnb 높이 값
        let subGnbHeight = $('#sub_gnb').height()

        if ($(document).scrollTop() > subGnbLocationY) {
          $('#sub_gnb').addClass('gnbFixed')
          $(categoryPageTopClass).css('margin-bottom', subGnbHeight)
        } else {
          $('#sub_gnb').removeClass('gnbFixed')
          $(categoryPageTopClass).css('margin-bottom', 0)
        }
      } else {
        // 나머지 페이지
        if ($(document).scrollTop() > 45) {
          $('#sub_gnb').addClass('gnbFixed')
        } else {
          $('#sub_gnb').removeClass('gnbFixed')
        }
      }
      /* ==========[sub_gnb] End========== */

      /* ==========[gnb] Start========== */
      let gnbValidation = $('#gnb').length > 0 && $('.sgnb').length > 0

      if (gnbValidation) {
        /* 모바일 메인 페이지 또는 베스트 페이지 */

        // gnb 수직 위치 값
        let gnbLocationY = $('.sgnb').offset().top + $('.sgnb').outerHeight()
        // gnb 높이 값
        let gnbHeight = $('#gnb').height()

        if ($(document).scrollTop() > gnbLocationY) {
          $('#gnb').addClass('gnbFixed')
          $('.sgnb').css('margin-bottom', gnbHeight) // gnb 에러
        } else {
          $('#gnb').removeClass('gnbFixed')
          $('.sgnb').css('margin-bottom', 0)
        }
      } else {
        if ($(document).scrollTop() > 138) {
          $('#gnb').addClass('gnbFixed')
        } else {
          $('#gnb').removeClass('gnbFixed')
        }
      }
      /* ==========[gnb] End========== */
    }else{
      $('#gnb').removeClass('gnbFixed')
      $('.sgnb').css('margin-bottom', 0)
    }
  })
})
