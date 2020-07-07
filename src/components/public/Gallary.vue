<template>
    <div class="gallary" @click="toParent">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) of gallaryData.imgs" :key="index" :style="{'background-image':'url('+item+')'}"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Gallary",
  props: [
    "gallaryData"
  ],
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: 'fraction'
        }
        // Some Swiper option/callback...
      },
      bgImg: {
          'background-image': `url(${this.gallaryArrDo})`
      },
    };
  },
  watch: {
      gallaryData(val){
          // this.$nextTick(() => {
          //     this.$refs.mySwiper.swiper.slideTo(val.currentIndex,1000,false);
          // })
          // this.gallaryArrDo = val;
          this.swiper.slideTo(val.currentIndex, 1000, false);
      },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    // console.log(this.gallaryArrDo.currentIndex);
    // if(this.gallaryArrDo[currentIndex] != 'undefined'){
    //   console.log(this.gallaryArrDo[currentIndex]);
    //   this.swiper.slideTo(this.gallaryArrDo[currentIndex], 1000, false);
    // }
  },
  methods: {
    toParent() {
      this.$emit("changeGallary", {
        showAbs: true
      });
    },
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.gallary
    width 100%
    height 100%
    background-color #000
    position fixed
    top 0
    left 0
    >>> .swiper-container
            width 100%
            height 100%
            .swiper-slide
                display flex
                align-items center
                justify-content center
                background-repeat no-repeat
                background-position center
                background-size contain
            .swiper-pagination
                font-size (24 / $rem)
                color #ffffff
                font-family Arial
                bottom (62 / $rem)
                
</style>


