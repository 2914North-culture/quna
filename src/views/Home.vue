<template>
  <div ref="home" class="home">
    <div class="home-inbox">
      <my-header ref="header"></my-header>
      <my-banner :swiperList="swiperList"></my-banner>
      <my-classifylist :iconList="iconList"></my-classifylist>
      <my-hotrecommend :recommendList="recommendList"></my-hotrecommend>
      <my-weekend :weekendList="weekendList"></my-weekend>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Header from '../components/Home/Header';
import Banner from '../components/Home/Banner';
import ClassifyList from '../components/Home/ClassifyList';
import HotRecommend from '../components/Home/HotRecommend';
import Weekend from '../components/Home/Weekend';
export default {
  name: 'Home',
  components: {
    'my-header': Header,
    'my-banner': Banner,
    'my-classifylist': ClassifyList,
    'my-hotrecommend': HotRecommend,
    'my-weekend': Weekend
  },
  data(){
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll();
      this._initGetData(); 
    }) 
  },
  activated () {
    
  },
  methods: {
    _initScroll(){
      new BScroll(this.$refs.home,{
        probeType: 3,
        click: true,
        bounce: false
      })
    },
    _initGetData(){
      let api = '/api/index';
      this.$http.get(api).then((res) => {
        let indexData = res.data.data;
        this.swiperList = indexData.data.swiperList;
        this.iconList = indexData.data.iconList;
        this.recommendList = indexData.data.recommendList;
        this.weekendList = indexData.data.weekendList;
      },(err) => {
        console.log(err);
      })
    }
  }
  
}
</script>

<style scoped lang="stylus">
.home
  width 100%
  height 100%
  .home-inbox
    width 100%
    height auto
</style>