import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/main/MainComponent'
import BrandiComponent from '@/components/brandi/main/MainComponent'
import NotFound from '@/components/common/NotFoundErrorComponent'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainComponent,
      meta: {
        title: '보미 포트폴리오',
        metaTags: [
          {description: '보미의 포트폴리오'}
        ]
      }
    },
    {
      path: '/brandi',
      name: 'Brandi',
      component: BrandiComponent,
      meta: {
        title: '보미 포트폴리오 - 브랜디 메인',
        metaTags: [
          {description: '브랜디 메인 퍼블리싱'}
        ]
      }
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: to => { return {'name': 'NotFound'} }
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {

  // title 설정이 있는 경우
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // meta tag 설정이 있는 경우
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
  // 이전 meta tag 설정이 있는 이전 페이지의 정보
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // 현재 title이 있으면 보여주고 없으면 전 페이지의 metaTag의 title을 보여줌
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // [data-vue-router-controlled] 속성을 갖고 있는 element들 삭제.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // meta tag 설정이 없는 경우 건너뛰기.
  if(!nearestWithMeta) return next();

  // head 안에 meta tag 생성
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // tag의 [data-vue-router-controlled] 속성 지우기
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // document head에 appendChild 해줌.
  .forEach(tag => document.head.appendChild(tag));

  next();
});
