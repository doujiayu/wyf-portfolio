<template>
  <header class='wyf_header'>
    <div class='wyf_logo'>
      <img :src='WYFLOGO' alt='图片加载失误' />
    </div>
    <div class='wyf_menu'>
      <span v-for="item in menuDataList" :key="item.id" @click="handleChangeMenu(item)" >
        <router-link class='router-link-active' :style="menuId == item.id? 'border-bottom:1px solid #fff;color:#fff;': ''" :key="item.path" :to="item.path" >
          {{item.name}}
        </router-link>
      </span>
    </div>  
  </header>
</template>
<script setup>
import WYFLOGO from '../../assets/wyf/wissint_h.png'
import { reactive, ref, toRefs } from 'vue'

const menuDataList = [
  {id: 1, name: '首页', check: true, path: '/home'},
  {id: 2, name: '项目', check: true, path: '/project'},
  {id: 3, name: '作品', check: true, path: '/works'}];
  const menuId = ref(1);
  function handleChangeMenu(item){
    menuId.value = item.id;
  }
</script>


<style lang='scss' scope>
.wyf_header{
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(38, 38, 38, 0.95);
  .router-link-active {
    text-decoration: none;
    color: #606060;
  }
  // position: fixed;
  // top: 0;
  // left: 0;
  // transition: transform .5s ease-in;
  z-index: 100;
  text-align: center;
  .wyf_menu{
    width: 30%;
    display: inline-block;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    span{
    
      display: inline-block;
      line-height: 20px;
      width: 33.33%;
      a{
        padding: 30px 0;
        display: inline-block;
      }
    }
    a:hover {
      border-bottom: 1px solid #fff;
    }
  }
  .wyf_logo{
    position: fixed;
    top: 20px;
    left: 30px;
    img{
      width: 144px;
      height: 40px;

    }

  }


}

</style>
