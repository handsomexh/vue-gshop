<template>
  <div>
    <!--头部-->
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
          <div class="arrow" @click="handleArrow">
            <img
              class="arrowImg"
              :class="isArrow ? 'downArrow' : 'upArrow'"
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png"
            />
          </div>
        </section>
        <!--home头部导航的展开-->
        <section class="toggleWrap" v-show="!isArrow">
          <div class="toggleTitle">全部频道</div>
          <ul class="toggleUl">
            <li
              class="toggleItem"
              v-for="(item, index) in navListData"
              :key="index"
              :class="nowIndex === index ? 'toggleItem active':'toggleItem'"
              @click="nowIndex = index"
            >
              <span>{{item}}</span>
            </li>
          </ul>
        </section>
      </div>
    </header>
    <!-- 遮罩层 -->
    <div class="mask" v-show="!isArrow"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      currentIndex: 0, // 初始nav的下标
      isArrow: true, // true箭头向下
      nowIndex: 0, // 初始toggle的下标
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
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.header
  width 100%
  position fixed
  left 0
  top 0
  z-index 10
  .line
    display flex
    align-items center
    background-color #fafafa
    width 100%
    height 88px
    line-height 88px
    box-sizing border-box
    padding 15px 30px
    .title
      width 138px
      height 40px
      margin-right 20px
      background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
      background-size 138px
      background-repeat no-repeat
    .toSearch
      display flex
      justify-content center
      align-items center
      width 442px
      height 56px
      border-radius 10px
      background-color #ededed
      .icon
        width 28px
        height 28px
        vertical-align middle
        background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
        background-repeat no-repeat
        background-size 100% 100%
        margin-right 10px
        .placeholder
          font-size 28px
          font-family PingFangSC-Light, helvetica, 'Heiti SC'
          color #666
    .loginBtn
      width 74px
      height 40px
      line-height 40px
      text-align center
      color #b4282d
      border 1px solid #b4282d
      // border-radius: 5px
      margin-left 15px
      font-size 24px
  .tabWrap
    position relative
    width 100%
    height 66px
    .homeNav
      display flex
      width 650px
      height 66px
      overflow hidden
      .homeNavUl
        display flex
        font-size 28px
        color #333
        background-color #fff
        .navItem
          width 112px
          height 60px
          margin 0 19px
          line-height 66px
          text-align center
          &.active
            border-bottom 6px solid #b4282d
            color #b4282d
      .opcityBox
        width 60px
        height 60px
        z-index 8
        position absolute
        top 0
        right 100px
        background linear-gradient(90deg, rgba(255, 255, 255, 0) 0, #fff 100%)
      .arrow
        width 100px
        height 52px
        text-align center
        background-color #fff
        padding-top 15px
        z-index 15
        position absolute
        top 0
        right 0
        .arrowImg
          width 30px
          height 30px
          margin-top 5px
          transition all 1s
          &.downArrow
            transform rotate(0deg)
            transition all 0.5s
          &.upArrow
            transform rotate(180deg)
            transition all 0.5s
    .toggleWrap
      position absolute
      top 0
      left 0
      z-index 8
      width 100%
      background-color #fff
      .toggleTitle
        width 100%
        height 60px
        line-height 60px
        color #333
        font-size 28px
        padding-left 30px
      .toggleUl
        display flex
        flex-wrap wrap
        align-items center
        width 100%
        padding-top 24px
        .toggleItem
          width 150px
          height 56px
          line-height 56px
          font-size 24px
          text-align center
          background #FAFAFA
          border 1px solid #ccc
          margin 0 0 40px 30px
          &.active
            border 1px solid #b4282d
            color #b4282d
          span
            display block
            width 100%
            height 100%
.mask
  position fixed
  z-index 5
  background rgba(0, 0, 0, 0.5)
  top 0
  left 0
  right 0
  bottom 0
</style>
