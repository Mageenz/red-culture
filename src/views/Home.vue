<template>
  <div class="main-container">
    <div class="flex aic head">
      <span class="flex-1">寻访活动管理后台</span>
      <img src="http://b-ssl.duitang.com/uploads/item/201805/13/20180513224039_tgfwu.png" alt="">
    </div>
    <div class="flex flex-1 container">
      <div class="menus">
        <div class="title">活动管理</div>
        <div>
          <router-link to='/home/activityList' class="menu" active-class='menu-active'>活动管理</router-link>
          <router-link to='/home/photographyMatchList' class="menu" active-class='menu-active'>摄影大赛</router-link>
          <router-link to='/home/miniPhotographyMatchList' class="menu" active-class='menu-active'>微摄影大赛</router-link>
          <!-- <router-link>摄影大赛</router-link> -->
          <!-- <router-link>微视频大赛</router-link> -->
        </div>
      </div>
      <div class="right-content">
        <div class="title">{{$route.meta.title}}</div>
        <div class="page">
          <router-view class="router-view"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>
.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .head {
    font-size: 20px;
    font-weight: bold;
    padding: 0 30px;
    background-color: rgba(0, 0, 0, 1);
    height: 60px;
    color: #fff;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .container {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .menus {
    width: 200px;
    background-color: rgba(0, 0, 0, 0.8);
    .title {
      font-size: 12px;
      color: #a0a0a0;
      line-height: 40px;
      padding-left: 15px;
      border-bottom: 1px rgba(0, 0, 0, 0.16) solid;
    }

    .menu {
      color: #a0a0a0;
      font-size: 14px;
      display: block;
      line-height: 50px;
      padding-left: 20px;
      border-left: 4px rgba(0, 0, 0, 0.8) solid;
    }
    .menu:hover {
      background-color: #424242;
      color: #fff;
      border-left: 4px #da2a2a solid;
    }
    .menu-active {
      background-color: #424242;
      color: #fff;
      border-left: 4px #da2a2a solid;
    }
  }
  .right-content {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    background-color: #f3f3f3;

    .title {
      font-size: 20px;
      line-height: 60px;
      padding-left: 15px;
      background-color: #fff;
    }
    
    .page {
      padding: 15px 0 0 15px;
      background-color: #f3f3f3;
    }
    
    .common-container {
      padding: 15px;
      background-color: #fff;
    }
    .spec-container {
      
    }
  }
}
</style>
