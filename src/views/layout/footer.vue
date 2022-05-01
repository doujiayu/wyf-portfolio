<template>
  <footer class='wyf_footer'>
    <img :src='WYFLOGO' alt='图片加载失误' class='wyf_logo'/>
    <p>WUYUNFEI<time style='margin-left:10px;'>2022</time></p>
    <img :src='WYFWX' alt='图片加载失误' class='wyf_wxicon'/>
  </footer>
</template>

<script setup>
import WYFLOGO from '../../assets/wyf/wissint_f.png'
import WYFWX from '../../assets/wyf/wx.png'

</script>
<style lang='scss' scope>
.wyf_footer{
  display: flex;
  margin:0 30px;
  padding: 200px 0 100px 0;
  justify-content: space-between;
  color: #606060;
  .wyf_logo{
    width: 130px;
    height: 36px;
  }
  .wyf_wxicon{
    width: 26px;
    height: 22px;
  }
  
}

</style>