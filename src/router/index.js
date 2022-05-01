import { createRouter, createWebHashHistory } from  'vue-router'
export const home =  [{
    path: '/hpersonal',
    name: 'hpersonal',
    meta: { tit: '个人简历' },
    component: () => import('../views/hpersonal/index.vue'),
  },{
    path: '/hprivateHouseSkills',
    name: 'hprivateHouseSkills',
    meta: { tit: 'ICON 私房记忆' },
    component: () => import('../views/hprivateHouseSkills/index.vue'),
  },{
    path: '/huseResearch',
    name: 'huseResearch',
    meta: { tit: '用研小技巧' },
    component: () => import('../views/huseResearch/index.vue'),
  },{
    path: '/huehi',
    name: 'huehi',
    meta: { tit: '借用UE/UI 优化，达成业务 体验目标<' },
    component: () => import('../views/huehi/index.vue'),
  }]

export const routes =  [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
  },
  ...home,
  {
    path: '/works',
    name: 'works',
    component: () => import('../views/works/index.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/project/index.vue')
  },
  
]
const router = createRouter({
  history: createWebHashHistory(), //hash模式  createWebHashHistory, history模式：createWebHistory
  routes
})
export default router