<style scoped  rel="stylesheet/scss" lang="scss">
  /*头部*/
  .header{
    width: 100%;
    height: 64px;
    background-color: #001529;
    padding: 0 50px;
    z-index: 100;
    .logo{
      width: 200px;
      height: 40px;
      position: relative;
      top: 50%;
      margin-top: -20px;
      float: left;
      background: url("../assets/logo.png") center no-repeat;
      background-size: contain;
    }
  }
  /*主体*/
  .content{
    position: relative;
    width: 100%;
    height: calc(100% - 104px);
    .content-lf{
      width: 240px;
      height: 100%;
      background-color:#ff0000;
      position: absolute;
      overflow: hidden;
      .warp{
        width: 110%;
        height: 100%;
        overflow-y: scroll;
      }
    }
    .content-rg{}
  }
  /*底部*/
  .footer{
    background-color:#f1f1f1;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  /*底部*/
</style>
<template>
  <div style="height: 100%;">
    <!--头部-->
    <nav class="header">
      <div class="logo"></div>
    </nav>
    <!--主体-->
    <div class="content">
      <div class="content-lf">
        <div class="warp">
          <div style="height: 10000px;">1232</div>
        </div>
      </div>
    </div>
    <!--底部-->
    <div class="footer">
      © 2016-2017 杭州红康传媒有限公司 版权所有  <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010502004174" style="text-decoration:none;height:20px;line-height:20px;">浙公网安备 33010502004174号</a>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    data(){
        return {

        }
    },
    methods:{
    },
    created(){
    }
  }
</script>
