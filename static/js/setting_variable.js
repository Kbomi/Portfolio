/**
 *
 * 최상단 설정 변수
 *
 */

'use strict'

function getIsApp () {
  // WebView 접근 경로
  let appPathArray = [
    '/service/faq',
    '/service/hiver-faq',
    '/service/access-term',
    '/service/hiver-access-term',
    '/service/policy',
    '/service/hiver-policy',
    '/service/third-policy',
    '/service/hiver-third-policy',
    '/service/third-party-order',
    '/service/privacy-collect-use-policy',
  ]

  return appPathArray.indexOf(window.location.pathname) !== -1
}

window.isApp = getIsApp()
