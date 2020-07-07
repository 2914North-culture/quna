<template>
    <div ref="city" class="city">
        <div class="city-head-fixed">
          <my-header></my-header>
          <my-city-tab></my-city-tab>
          <my-search-city></my-search-city>
        </div>
        <div ref="cityInbox" class="city-inbox">
            <div class="city-inbox-box">
              <my-show-map></my-show-map>
              <my-city-content></my-city-content>
            </div>
        </div>
        <my-sidebar></my-sidebar>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import Header from '@/components/City/Header';
import CityTab from '@/components/City/CityTab';
import SearchCity from '@/components/City/SearchCity';
import ShowMap from '@/components/City/ShowMap';
import CityContent from '@/components/City/CityContent';
import Sidebar from '@/components/City/Sidebar';
export default {
  name: "City",
  components: {
      'my-header': Header,
      'my-city-tab': CityTab,
      'my-search-city': SearchCity,
      'my-show-map': ShowMap,
      'my-city-content': CityContent,
      'my-sidebar': Sidebar
  },
  data(){
      return {
          cities: [],
          hotCities: []
      }
  },
  computed: {
    sidebar(){
        return this.$store.state.sidebar
    },
    markEle(){
      return this.$store.state.markEle;
    }
  },
  watch: {
    markEle(val){
      this.cityPage_Wraper.scrollToElement(val);
    }
  },
  created () {
    this.$nextTick(() => {
        this._initGetData(); 
        this._initScroll();
    }) 
  },
  methods: {
      _initScroll(){
        this.cityPage_Wraper = new BScroll(this.$refs.cityInbox,{
            probeType: 3,
            click: true,
            bounce: false
        })
      },
    _initGetData(){
      let api = '/api/city';
      this.$http.get(api).then((res) => {
          let cityData = res.data.data;
        //   this.cities = cityData.cities;
        //   this.hotCities = cityData.hotCities;
        this.$store.commit('cityData',cityData);
      },(err) => {
        console.log(err);
      })
    },

  }
  
};
</script>

<style scoped lang="stylus">
@import '../common/stylus/variable.styl';

.city
    width 100%
    height 100%
    .city-head-fixed
      width 100%
      height (258 / $rem)
      position fixed
      top 0
      left 0
      z-index 10
    .city-inbox
        width 100%
        position absolute 
        top (258 / $rem)
        bottom 0
        overflow hidden
        .city-inbox-box
          width 100%
          height auto

</style>