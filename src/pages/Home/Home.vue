<template>
  <div>
    <!-- 头部 -->
    <header class="header">
      <!--home的头-->
      <div class="line">
        <a href="javascript:;" class="title" @click="goTo('home')"></a>
        <a href="javascript:;" class="toSearch" @click="goTo('search')">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共21768款好物</span>
        </a>
        <a href="javascript:;" class="loginBtn" @click="goTo('login')">登录</a>
      </div>
      <!--home的头部导航-->
      <div class="tabWrap">
        <!--home的头部导航原版-->
        <section class="homeNav">
          <ul class="homeNavUl">
            <li
              class="navItem"
              v-for="(item,index) in navListData"
              :key="index"
              :class="currentIndex === index ? 'navItem active':'navItem'"
              @click="currentIndex = index"
            >{{item}}</li>
          </ul>
          <div class="opcityBox"></div>
          <div class="arrow" @click="handleArrow" :class="isArrow ? 'downArrow' : 'upArrow'">
            <img
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png"
            />
          </div>
        </section>
        <!--home头部导航的展开-->
        <div class="toggleWrap">
          <div class="linear"></div>
          <div class="toggle">
            <div class="icon"></div>
          </div>
        </div>
      </div>
    </header>
    <!-- banner Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/8ceaa8053baf2056334e166493e9eaab.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from "@better-scroll/core";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  data() {
    return {
      currentIndex: 0, // 初始nav的下标
      isArrow: true, // true箭头向下
      // 导航的数据
      navListData: [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"
      ]
    };
  },

  mounted() {
    // 横向滑动的ul
    this.navScroll = new BScroll(".homeNav", {
      // 横向滑动
      scrollX: true,
      scrollY: false,
      click: true
    });

    // 轮播图
    this.swiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },

  updated() {
    if (this.navScroll) {
      this.navScroll.refresh();
    } else {
      this.navScroll = new BScroll(".homeNav", {
        scrollX: true,
        click: true
      });
    }
  },

  methods: {
    goTo(path) {
      this.$router.replace("/" + path);
    },
    handleArrow() {
      this.isArrow = !this.isArrow;
    }
  }
};

// DOM 操作
/* document.addEventListener("DOMContentLoaded", function() {
  const navUl = document.getElementsByClassName("homeNavUl")[0];
  const navItem = document.getElementsByClassName("navItem");
  // nav 导航点击高亮
  navUl.addEventListener("click", function(e) {
    Array.from(navItem).forEach(item => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  });
}); */
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.header
  width: 100%
  .line
    position: fixed
    left: 0
    top: 0
    z-index: 10
    display: flex
    align-items: center
    background-color: #fafafa
    width: 100%
    height: 88px
    line-height: 88px
    box-sizing: border-box
    padding: 15px 30px
    .title
      width: 138px
      height: 40px
      margin-right: 20px
      background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
      background-size: 138px
      background-repeat: no-repeat
    .toSearch
      display: flex
      justify-content: center
      align-items: center
      width: 442px
      height: 56px
      border-radius: 10px
      background-color: #ededed
      .icon
        width: 28px
        height: 28px
        vertical-align: middle
        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
        background-repeat: no-repeat
        background-size: 100% 100%
        margin-right: 10px
      .placeholder
        font-size: 28px
        font-family: PingFangSC-Light, helvetica, 'Heiti SC'
        color: #666
    .loginBtn
      width: 74px
      height: 40px
      line-height: 40px
      text-align: center
      color: #b4282d
      border: 1px solid #b4282d
      // border-radius: 5px
      margin-left: 15px
      font-size: 24px
  .tabWrap
    position: relative
    width: 100%
    height: 66px
    .homeNav
      width: 650px
      height: 66px
      margin-top: 88px
      overflow: hidden
      .homeNavUl
        width: 1350px
        font-size: 28px
        color: #333
        clearFix()
        .navItem
          width: 112px
          height: 60px
          margin: 0 19px
          line-height: 66px
          float: left
          text-align: center
          &.active
            border-bottom: 6px solid #b4282d
            color: #b4282d
      .opcityBox
        width: 60px
        height: 60px
        z-index: 15
        position: absolute
        top: 0
        right: 100px
        background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, #fff 100%)
      .arrow
        width: 100px
        height: 60px
        text-align: center
        padding-top: 15px
        background-color: rgba(0, 0, 0, 0)
        z-index: 15
        position: absolute
        top: 0
        right: 0
        transition: all 1s
        &.downArrow
          transform: rotate(0deg)
          transition: all 0.5s
        &.upArrow
          transform: rotate(180deg)
          transition: all 0.5s
        img
          width: 30px
          height: 30px
          margin-top: 5px
.swiper-container
  width: 100%
  height: 370px
  .swiper-wrapper
    width: 100%
    height: 100%
    .swiper-slide
      width: 100%
      height: 100%
      img
        width: 100%
  .swiper-pagination-bullets
    margin-bottom: 20px
    .swiper-pagination-bullet
      width: 40px
      height: 4px
      border-radius: 0
      background: #fff
      opacity: 0.4
      &.swiper-pagination-bullet-active
        opacity: 1
        background: #fff
</style>
