<template>
  <div v-swiper:mySwiper="swiperOption" v-if="showSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
        <img :src="banner.imgUrl" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
 
<script>
export default {
  name: 'Takeout_MainBanner',
  props: ['swiperList'],
  watch: {
    swiperList(val){
      this.banners = val;
    }
  },
  computed: {
    showSwiper(){
      return this.banners.length
    }
  },
  data() {
    return {
      banners: this.swiperList,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        notNextTick: true,

        //循环

        loop: true,

        //设定初始化时slide的索引

        initialSlide: 0,

        //自动播放

        autoplay: {
          delay: 4000,

          stopOnLastSlide: false,

          disableOnInteraction: false
        },

        //滑动速度

        speed: 800,

        //滑动方向

        direction: "horizontal",

        //小手掌抓取滑动

        grabCursor: true,

        // //滑动之后回调函数

        // on: {
        //   slideChangeTransitionStart: function() {
        //     that.imgIndex = this.realIndex + 1; //获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
        //   }
        // }
      }
    };
  }
  // mounted() {
  //   console.log("Current Swiper instance object", this.mySwiper);
  //   this.mySwiper.slideTo(0, 1000, true);
  // }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';
>>> .swiper-slide
      height (234 / $rem)
      img
        width 100%
        height 100%
>>> .swiper-pagination-bullet
  width (16 / $rem)
  height (16 / $rem)
  background-color #0094ff
</style>