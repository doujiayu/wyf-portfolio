<template>
  <div class='hprivateHouseSkills'> 
    <div class='skills_title'>
      <h3>ICON 私房技艺</h3>
      <p>图标存在的目的是起引导作用，在丰富页面视觉的同时，帮助用户更快的获取信息（当然图标的使用意义还有很多）</p>
    </div>
    <ul class='skills_nav'>
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
import skills1 from '../../assets/wyf/skills1.png'
import skills2 from '../../assets/wyf/skills2.png'
import skills3 from '../../assets/wyf/skills3.png'
import skills4 from '../../assets/wyf/skills4.png'
import skills5 from '../../assets/wyf/skills5.png'
import skills6 from '../../assets/wyf/skills6.png'
const menuDataList =  [
  { id: 1, name: 'Duck icon图标', url: skills1, path: '/hpersonal' , dec: 'Android 系统主题设计'} ,
  { id: 2, name: 'FLAT ICON', url: skills2, path: '/hprivateHouseSkills', dec: 'Android 扁平图标'},
  { id: 3, name: 'ICON 设计', url: skills3, path: '/huseResearch', dec: '创意图标'},
  { id: 4, name: '甲乙丙丁系统图标', url: skills4, path: '/huehi', dec: '甲乙丙丁视觉体系通用图标 v1.0' },
  { id: 5, name: '甲乙丙丁管理系统 ICON', url: skills5, path: '/huehi', dec: 'CRM WMS ERP 服务站通用图标库 v2.0' },
  { id: 6, name: 'APP常用图标', url: skills6, path: '/huehi', dec: '甲乙丙丁移动端常用icon库' },
]
onMounted(() => {
  window.scrollTo(0,0)
})

</script>
<style lang='scss' scope>
.hprivateHouseSkills{
  margin: 0 30px;
  .skills_title{
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
  .skills_nav{
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