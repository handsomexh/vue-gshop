<template>
  <div>
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
    <!-- 中间说明 -->
    <div class="policy">
      <ul class="grow">
        <li class="item">
          <a>
            <i
              class="u-icon u-icon-servicePolicy-index"
              style="background-image:url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"
            ></i>
            <span class="text">网易自营品牌</span>
          </a>
        </li>
        <li class="item">
          <a>
            <i
              class="u-icon u-icon-servicePolicy-index"
              style="background-image:url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"
            ></i>
            <span class="text">30天无忧退货</span>
          </a>
        </li>
        <li class="item">
          <a>
            <i
              class="u-icon u-icon-servicePolicy-index"
              style="background-image:url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"
            ></i>
            <span class="text">48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  mounted() {
    // 轮播图
    this.swiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.swiper-container
  width 100%
  height 370px
  margin-top 150px
  .swiper-wrapper
    width 100%
    height 100%
    .swiper-slide
      width 100%
      height 100%
      img
        width 100%
  .swiper-pagination-bullets
    margin-bottom 20px
    .swiper-pagination-bullet
      width 40px
      height 4px
      border-radius 0
      background #fff
      opacity 0.4
      &.swiper-pagination-bullet-active
        opacity 1
        background #fff
.policy
  width 100%
  height 72px
  .grow
    display flex
    justify-content space-around
    align-items center
    width 100%
    height 100%
    padding 0 30px
    box-sizing border-box
    .item
      height 36px
      line-height 36px
      a
        display inline-block
        .u-icon
          display inline-block
          width 32px
          height 32px
          background-size 32px
          vertical-align middle
        .text
          font-size 24px
          color #333
          vertical-align middle
</style>
