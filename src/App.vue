<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// import BScroll from 'better-scroll';
export default {
  name: 'App',
  created(){
    this.$nextTick(() => {
      // this._initWraper();
      this._initRefresh();
    })

    // 从sessionstorage中获取存放的数据
    if(sessionStorage.getItem('store')){
      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem('store'))));
    }

  },
  methods: {
    // _initWraper(){
    //   new BScroll(this.$refs.appWraper,{
    //     probeType: 3,
    //     click: true
    //   })
    // },
    _initRefresh(){
      // 页面刷新之前讲store中的state数据存入sessionStorage中
      window.addEventListener('beforeunload',() => {
        // console.log('刷新了--refresh');
        sessionStorage.setItem('store',JSON.stringify(this.$store.state));
      })
    }

  }
}
</script>

<style scoped lang="stylus">
@import './common/stylus/variable.styl';

#app
  width 100%
  height 100%
  background-color #fff
  overflow hidden
  touch-action none
  font-family Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif
</style>
