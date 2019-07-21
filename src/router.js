import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import ActivityList from './views/ActivityList.vue'
import ActivityDetail from './views/ActivityDetail.vue'
import VisitPlaceList from './views/VisitPlaceList.vue'
import CheckPeopleList from './views/CheckPeopleList.vue'
import QuestionList from './views/QuestionList.vue'
import WisdomPeopleList from './views/WisdomPeopleList.vue'
import ActivityPhotoList from './views/ActivityPhotoList.vue'
import RemarkPeopleList from './views/RemarkPeopleList.vue'
import ActivityDiscussList from './views/ActivityDiscussList.vue'
import HonorPeopleList from './views/HonorPeopleList.vue'
import PhotographyMatchList from './views/PhotographyMatchList.vue'
import MiniPhotographyMatchList from './views/MiniPhotographyMatchList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home/activityList',
          name: 'activityList',
          component: ActivityList,
          meta: {
            title: '活动管理'
          }
        },
        {
          path: '/home/activityList/activityDetail',
          name: 'activityDetail',
          component: ActivityDetail,
          meta: {
            title: '活动详情'
          }
        },
        {
          path: '/home/activityList/visitPlaceList',
          name: 'visitPlaceList',
          component: VisitPlaceList,
          meta: {
            title: '寻访点'
          }
        },
        {
          path: '/home/activityList/checkPeopleList',
          name: 'checkPeopleList',
          component: CheckPeopleList,
          meta: {
            title: '打卡签到人数'
          }
        },
        {
          path: '/home/activityList/questionList',
          name: 'questionList',
          component: QuestionList,
          meta: {
            title: '问答题目'
          }
        },
        {
          path: '/home/activityList/wisdomPeopleList',
          name: 'wisdomPeopleList',
          component: WisdomPeopleList,
          meta: {
            title: '智慧闯关答题人数'
          }
        },
        {
          path: '/home/activityList/activityPhotoList',
          name: 'activityPhotoList',
          component: ActivityPhotoList,
          meta: {
            title: '活动集锦'
          }
        },
        {
          path: '/home/activityList/remarkPeopleList',
          name: 'remarkPeopleList',
          component: RemarkPeopleList,
          meta: {
            title: '寻找印记人数'
          }
        },
        {
          path: '/home/activityList/activityDiscussList',
          name: 'activityDiscussList',
          component: ActivityDiscussList,
          meta: {
            title: '活动评论'
          }
        },
        {
          path: '/home/activityList/honorPeopleList',
          name: 'honorPeopleList',
          component: HonorPeopleList,
          meta: {
            title: '获取勋章人数'
          }
        },
        // 摄影大赛
        {
          path: '/home/photographyMatchList',
          name: 'photographyMatchList',
          component: PhotographyMatchList,
          meta: {
            title: '摄影大赛'
          }
        },
        // 微摄影大赛
        {
          path: '/home/miniPhotographyMatchList',
          name: 'miniPhotographyMatchList',
          component: MiniPhotographyMatchList,
          meta: {
            title: '微摄影大赛'
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
