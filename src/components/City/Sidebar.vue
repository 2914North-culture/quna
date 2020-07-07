<template>
  <div class="city-sidebar" v-if="isData">
    <ul class="city-sidebar-inbox" @touchstart.prevent="handleTapInitial" @touchmove.prevent="handleMoveInitial">
      <li ref="fast-check" class="city-sidebar-hot sidebar-item" data-type="hotCity" data-name="mark">热门</li>
      <li ref="fast-check" class="city-sidebar-initial sidebar-item" v-for="(city,value) of cityData.cities" :key="value" :data-type="value" data-name="mark">{{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data(){
        return {
            timer: null
        }
    },
    computed: {
      cityData(){
          return this.$store.state.cityData.data;
      },
      isData(){
          return this.cityData ? true : false;
      },
      _fast(){
        //   return this.$refs['fast-check'];
        return document.querySelectorAll('.sidebar-item');
      }
    },
    methods: {
        handleTapInitial(event){
            if(event.target.dataset.name == 'mark'){
                 this.$store.commit('sidebarMark',event.target.dataset.type);
            }
        },
        handleMoveInitial(event){
            let touchY = event.touches[0].clientY;
            let fastArr = [];
            fastArr = [...this._fast];
            fastArr.find(item => {
                let rect = item.getBoundingClientRect();
                if(touchY > rect.top && touchY < rect.bottom){
                    this.$store.commit('sidebarMark',item.dataset.type);
                }
            })
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.city-sidebar
    position fixed
    width (42 / $rem)
    height 100%
    padding-top (258 / $rem)
    top 0
    right (12 / $rem)
    display flex
    align-items center
    .city-sidebar-inbox
        list-style none 
        width 100%
        height auto
        .sidebar-item
            width 100%
            height (42 / $rem)
            font-size (20 / $rem)
            display flex
            align-items center
            justify-content center
            border-radius 50%
            
</style>