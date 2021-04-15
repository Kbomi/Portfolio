/**
 *
 * 이미지 리사이징
 *
 */

$(function () {
  (function () {
    // 공통 상품 썸네일 리사이즈
    window.commonImgResize = function (img, width, windowWidth) {
      if (typeof windowWidth === 'undefined') windowWidth = window.innerWidth

      var outBoxWidth = $('.list_image.common > a').width() || $('.list_image.common > em.txt').width()

      $(img).attr('prevheight', width)
      $(img).attr('prevWindowWidth', windowWidth)
      // 정사이즈
      $(img).height(width)
      // 중앙 정렬
      $(img).css('margin-left', -(width - outBoxWidth) / 2)
    }

    // TODO: [B20-7] 찜 페이지 관련 이미지 리사이즈 버그 해결을 위해 해당 구문 삭제
    // (현재 해당 이미지에 대한 리사이즈만 별도 처리가 되어 있으므로 이것과 관련해서는 임시로 주석처리함)
    // 찜 페이지 상품 썸네일 리사이즈
    // window.favorImgResize = function (img, width) {
    //   $(img).height(width)
    // }

    var imgResize = function () {
      // 리사이징 실행 여부
      var isResizing = false
      // 이미지 개수
      var imgCount = $('.list_image.common > a > img:not(.no-resize), .list_image.common > em.txt > img:not(.no-resize)').size()
      // 이미지 개수가 1개 이상인 경우
      function setImg (o) {
        var prevHeight = $(o).attr('prevheight')
        var prevWindowWidth = $(o).attr('prevWindowWidth')
        if (!prevHeight) prevHeight = 0
        if (!prevWindowWidth) prevWindowWidth = window.innerWidth

        var width = $(o).width()
        var height = $(o).height()

        // 이전 높이 값과 차이
        var heightDiff = Math.abs(prevHeight - height)
        // 이전 윈도우 창 너비 값과 차이
        var windowWidthDiff = Math.abs(prevWindowWidth - window.innerWidth)

        // 이전 높이 값이 없거나 || 이전 높이 값과 차이가 1 이상 이거나 || 이전 윈도우 창 너비 값 차이가 1 이상인 경우
        if (prevHeight == 0 || heightDiff > 1 || windowWidthDiff > 1) {
          window.commonImgResize(o, width, window.innerWidth)
        }
      }
      if (imgCount > 0) {
        $('.list_image.common > a > img:not(.no-resize)').each(function () {
          setImg(this)
        })
        $('.list_image.common > em.txt > img:not(.no-resize)').each(function () {
          setImg(this)
        })
        isResizing = true
      }

      // TODO: [B20-7] 찜 페이지 관련 이미지 리사이즈 버그 해결을 위해 해당 구문 삭제
      // (현재 해당 이미지에 대한 리사이즈만 별도 처리가 되어 있으므로 이것과 관련해서는 임시로 주석처리함)
      // 찜 페이지 이미지 개수
      // var favorImgCount = $('.list_image.favor > a > img:not(.no-resize), .list_image.favor > em.txt > img:not(.no-resize)').size()
      // 이미지 개수가 1개 이상인 경우
      // function setFavorImg (o) {
      //   var width = $(o).width()
      //   window.favorImgResize(o, width)
      // }
      // if (favorImgCount > 0) {
      //   $('.list_image.favor > a > img:not(.no-resize)').each(function () {
      //     setFavorImg(this)
      //   })
      //   $('.list_image.favor > em.txt > img:not(.no-resize)').each(function () {
      //     setFavorImg(this)
      //   })
      //   isResizing = true
      // }

      // 타임딜 이미지 개수
      var timeDealImgCount = $('.list_wide_image > a > img:not(.no-resize)').size()
      // 타임딜 이미지 개수 1개 이상인 경우
      if (timeDealImgCount > 0) {
        $('.list_wide_image > a > img:not(.no-resize)').each(function () {
          var width = $(this).width()
          var height = $(this).height()
          if (width != height) {
            $(this).height(width)
          }
        })
        isResizing = true
      }
      return isResizing
    }

    // 300ms 마다 resize 실행
    setInterval(function () {
      imgResize()
    }, 300)

    // window resize 될 때 imgResize 실행
    $(window).resize(function () {
      imgResize()
    })
  })()
})
