<template>
  <footer class="footerContainer">
    <nav class="nav-tab">
      <a href="javascript:;" class="item" @click="goTo('home')">
        <i
          class="u-icon u-ico-home"
          :class="this.$route.path === '/home' ? 'u-ico-home-active': 'u-ico-home'"
        ></i>
        <span class="txt" :class="this.$route.path === '/home' ? 'txt-active' : 'txt'">首页</span>
      </a>
      <a href="javascript:;" class="item" @click="goTo('search')">
        <i
          class="u-icon u-ico-search"
          :class="this.$route.path === '/search' ? 'u-ico-search-active' : 'u-ico-search'"
        ></i>
        <span class="txt" :class="this.$route.path === '/search' ? 'txt-active' : 'txt'">分类</span>
      </a>
      <a href="javascript:;" class="item" @click="goTo('discover')">
        <i
          class="u-icon u-ico-discover"
          :class="this.$route.path === '/discover' ? 'u-ico-discover-active': 'u-ico-discover'"
        ></i>
        <span class="txt" :class="this.$route.path === '/discover' ? 'txt-active' : 'txt'">识物</span>
      </a>
      <a href="javascript:;" class="item" @click="goTo('order')">
        <i
          class="u-icon u-ico-order"
          :class="this.$route.path === '/order' ? 'u-ico-order-active': 'u-ico-order'"
        ></i>
        <span class="txt" :class="this.$route.path === '/order' ? 'txt-active' : 'txt'">购物车</span>
      </a>
      <a href="javascript:;" class="item" @click="goTo('login')">
        <i
          class="u-icon u-ico-login"
          :class="this.$route.path === '/login' ? 'u-ico-login-active': 'u-ico-login'"
        ></i>
        <span class="txt" :class="this.$route.path === '/login' ? 'txt-active' : 'txt'">个人</span>
      </a>
    </nav>
  </footer>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      // 编程式路由导航
      this.$router.replace("/" + path);
    }
  }
};
</script>

<style lang='stylus' scoped>
.footerContainer
  position: fixed
  bottom: 0
  left: 0
  width: 750px
  height: 98px
  border-top: 1px solid #d9d9d9
  .nav-tab
    width: 100%
    height: 100%
    display: flex
    .item
      display: flex
      flex-direction: column
      justify-content: center
      width: 25%
      height: 98px
      .txt
        width: 100%
        font-size: 24px
        text-align: center
        color: #666
        margin-top: 7px
        &.txt-active
          color: #b4282d
      .u-icon
        vertical-align: middle
        width: 100%
        height: 40px
        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png')
        background-repeat: no-repeat
        background-size: 40px
        &.u-ico-home
          background-position: 54px -250px
        &.u-ico-home-active
          background-position: 54px -200px
        &.u-ico-search
          background-position: 54px -150px
        &.u-ico-search-active
          background-position: 54px -100px
        &.u-ico-discover
          background-position: 54px -352px
        &.u-ico-discover-active
          background-position: 54px -300px
        &.u-ico-order
          background-position: 54px -51px
        &.u-ico-order-active
          background-position: 54px -1px
        &.u-ico-login
          background-position: 54px -454px
        &.u-ico-login-active
          background-position: 54px -404px
/*
   /yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png
*/
</style>
