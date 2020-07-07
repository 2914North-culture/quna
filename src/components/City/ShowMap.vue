<template>
    <div class="show-map" @touchmove="cancel">
        <div class="current-location">
            <span class="current-location-city" @touchmove="pageScroll" @touchend="chooseCity">{{city}}</span>
            <span class="current-location-text">当前城市</span>
        </div>
        <div ref="map" class="container"></div>
    </div>
</template>

<script>
export default {
  name: "ShowMap",
  data() {
    return {
      longitude: 0, //经度
      latitude: 0, //纬度
      city: "",
      isMove: false
    };
  },
  mounted() {
    this.getMyLocation();
  },
  methods: {
    cancel(event){
        try{
            event.stopPropagation(); // 非IE
        }catch(e){
            window.event.cancelBubble = true; // IE
        }
    },
    pageScroll(){
      this.isMove = true;
      return;
    },
    chooseCity(event){
      if(!this.isMove){
        this.$store.commit('currentCity',event.target.innerText);
        this.$router.push({
          name: 'Home'
        })
      }
      this.isMove = false;
    },
    //第一部分
    //定位获得当前位置信息
    getMyLocation() {
      var geolocation = new qq.maps.Geolocation(
        "XKZBZ-ZCC6S-H4IO5-65SPZ-VW5F3-FHFGF",
        "quna-定位"
      );
      //   geolocation.getIpLocation(this.showPosition, this.showErr);
      geolocation.getLocation(this.showPosition, this.showErr); //或者用getLocation精确度比较高
    },
    showPosition(position) {
    //   console.log(position);  // 返回位置信息的对象
      this.latitude = position.lat;
      this.longitude = position.lng;
      this.city = position.city;
      this.setMap();
    },
    showErr() {
      console.log("定位失败");
      //   this.getMyLocation(); //定位失败再请求定位，测试使用
    },
    //第二部分
    //位置信息在地图上展示
    setMap() {
      //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
      //设置地图中心点
      var myLatlng = new qq.maps.LatLng(this.latitude, this.longitude);
      //定义工厂模式函数
      var myOptions = {
        zoom: 13, //设置地图缩放级别
        center: myLatlng, //设置中心点样式
        mapTypeId: qq.maps.MapTypeId.ROADMAP //设置地图样式详情参见MapType
      };
      //获取dom元素添加地图信息
      var map = new qq.maps.Map(
        this.$refs.map, // 获取地图容器
        myOptions
      );
      //第三部分
      //给定位的位置添加图片标注
      var marker = new qq.maps.Marker({
        position: myLatlng,
        map: map
      });
      //给定位的位置添加文本标注
      var marker = new qq.maps.Label({
        position: myLatlng,
        map: map,
        content: "我现在的位置"
      });
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.show-map
    width 100%
    height (343 / $rem)
    overflow hidden
    .current-location
        width 100%
        height (63 / $rem)
        background-color #fff
        font-size (20 / $rem)
        color #bdbdbd
        display flex
        align-items baseline
        padding 0 (26 / $rem)
        .current-location-city
            font-size (24 / $rem)
            color #000
            margin-right (16 / $rem)
            height 100%
            display flex
            align-items center
    .container
        width 100%
        height (280 / $rem)
        overflow hidden
</style>