<template>
  <div class='wyf_main'>
    <img :src='WYFMAINBG' alt='图片加载失误' />
  </div>
  <div class='wyc_main_item'>
    <ul>
      <li v-for="item in menuDataList" :key="item.id" @click="handleNavClick(item)">
        <img :src='item.url' alt='图片加载失误' />
        <p>{{item.name || '标题'}}</p>
        <div class='mark'></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

import WYFMAINBG from '../../assets/wyf/wissint_bg.png'
import ONE from '../../assets/wyf/one.png'
import TWO from '../../assets/wyf/two.png'
import THREE from '../../assets/wyf/three.png'
import FOUR from '../../assets/wyf/four.png'

const router = useRouter();
const menuDataList =  [
  { id: 1, name: '个人简历', url: ONE, path: '/hpersonal' },
  { id: 2, name: 'ICON 私房技艺', url: TWO, path: '/hprivateHouseSkills' },
  { id: 3, name: '用研小技巧', url: THREE, path: '/huseResearch'},
  { id: 4, name: '借用UE/UI 优化，达成业务 体验目标', url: FOUR, path: '/huehi' },
]
function handleNavClick(item){
  console.log(1212121,item.path)
  // router.push('/hpersonal');
  router.push(item.path)
}

</script>
<style lang='scss' scope>
$redbg:pink;
.title{
  background: $redbg;
}
.wyf_main{
  width: 100%;  
  margin: 72px 0;
  min-height: 240px;
  img{
    display: block;
    width: 95%;
    height: auto;
    margin:0 auto;
    min-height: 240px;
  }
}
.wyc_main_item{
  margin:10px 30px;
  ul{
    width: 100%;
    display: flex;
    // justify-content: space-between;
    height: 210px;  
    li {
      position: relative;
      width: 22%;
      margin-right: 4%;
      &:nth-child(4){
        margin-right: 0;
      }
      .mark{ 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        opacity: 0.5;
        transition: opacity 350ms;
         &:hover{
            opacity: 1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #000;
            opacity: 0.1;
            transition: opacity 350ms
        }
      }
      img{
        width: 100%;
        height: 100%;  
      }
      p{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        &:before{
          content: '--';
          color: transparent;
        }
      }
    }
  }

}

</style>