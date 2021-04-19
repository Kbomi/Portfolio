/**
 *
 * myshop
 *
 */

// 아래와 같이 userAgent 를 참고하여 mobile_app, mobile_web 을 구분합니다.
// _chkmobapp() 함수의 이름은 절대 변경되어서는 안됩니다.
function _chkmobapp () {
  // 모바일 app 일 경우에는 true, 그 외에는 false를 return 합니다.
  // web만 연동하는 경우는 false를 return 해주세요.
  // 각 앱의 상황에 맞게 함수 내용을 수정할 수 있습니다.
  if (navigator.userAgent.match(/WebView/i)) { return true } else if (navigator.userAgent.match(/Hybrid/i)) { return true }

  return false
}

// _adlib_trk() 함수 내부에서 platform 값을 선택하기 위한 함수 (참고용)
// 각 웹/앱의 상황에 맞게 수정 가능하며, 필요없다면 삭제해도 괜찮습니다.
function _getplatform () {
  var mob = false
  if (navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)) { mob = true }

  if (mob) {
    var moapp = false
    moapp = _chkmobapp()

    if (moapp) { return 'mobile_app' } else { return 'mobile_web' }
  } else { return 'pc' }
}
