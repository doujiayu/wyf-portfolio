<template>
  <div class='hprivateHouseuser'> 
    <div class='user_title'>
      <h3>用户研究小技巧</h3>
      <p>用户体验路线由基础的三部分组成 1.受益者和需求 2.主题必须具有业务目标 3.所有权、谁和什么 从而运用UX方法达成目标</p>
    </div>
    <ul class='user_nav'>
      <li v-for="item in menuDataList" :key="item.id">
        <img :src='item.url' alt='图片加载失误' />
        <p>{{item.name || '-'}}</p>
        <span>{{item.dec || '-'}}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import user1 from '../../assets/wyf/user1.png'
import user2 from '../../assets/wyf/user2.png'
import user3 from '../../assets/wyf/user3.png'
import user4 from '../../assets/wyf/user4.png'
const menuDataList =  [
  { id: 1, name: '用户体验设计基础流程', url: user1, path: '/hpersonal' , dec: '用户体验路线图'} ,
  { id: 2, name: '卡片法', url: user2, path: '/hprivateHouseuser', dec: '常出现在UX项目前期用于整理收集信息'},
  { id: 3, name: '焦点小组', url: user3, path: '/huseResearch', dec: '与用户(受益者)探讨业务或使用软件时遇到的问题'},
  { id: 4, name: '甲乙丙丁 鸥鸟APP', url: user4, path: '/huehi', dec: '公司OA系统' },
]
onMounted(() => {
  window.scrollTo(0,0)
})

</script>
<style lang='scss' scope>
.hprivateHouseuser{
  margin: 0 30px;
  .user_title{
    margin: 126px 0;
    text-align: center;
    h3{
      font-family: PingFangSC-Medium;
      font-size: 36px;
      color: #D9D9D9;
      margin-bottom: 30px;
    }
    p{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #5F5F5F;
    }

  }
  .user_nav{
    width: 100%;
    height: 100%; 
    flex-wrap: wrap;
    display: flex;
    // justify-content: space-between;
    flex: 1;
    flex-wrap: wrap;
    font-family: PingFangSC-Regular, PingFang SC;
    li{
      width: 30%;
      margin-bottom: 30px;
      margin-right: 4%;

      &:nth-of-type(3n) {
        margin-right: 0;
      }
      img{
        width: 430px;
        height: 300px;
        background: #000;
        opacity: 0.5;
        transition: opacity 350ms;
        &:hover{
           opacity: 1;

        }
      }
      p{
        margin-top: 15px;
        font-size: 16px;
        font-weight: 400;
        color: #D0D0D0;
        line-height: 25px;
      }
      span{
        margin-top: 8px;
        font-size: 12px;
        font-weight: 400;
        color: #525252;
        line-height: 20px;
      }

    }
  }


}
</style>