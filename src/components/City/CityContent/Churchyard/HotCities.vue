<template>
    <div class="hot-cities" ref="hotCity" v-if="isData">
        <div class="hot-cities-title">热门城市</div>
        <ul class="hot-cities-list" v-if="isData">
            <li class="hot-cities-list-item" v-for="item of hotCities.hotCities" :key="item.id" @touchmove="pageScroll" @touchend="chooseCity">
                <span class="hot-cities-list-name">{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HotCities',
    data(){
        return {
            hot: '初始值',
            demo: '',
            isMove: false
        }
    },
    computed:{
        hotCities(){
            // console.log(typeof this.$store.state.cityData);
            return this.$store.state.cityData.data;
        },
        isData(){
            // 个人理解 这里不是真正的在判断 只是一个耗时操作 使store中的数据在一个来回中成功赋值
            return this.hotCities ? true : false;
        },
        sidebarMark(){
            return this.$store.state.sidebarMark;
        }
    },
    watch: {
        sidebarMark(val){
            if(val == 'hotCity'){
                this.$store.commit('markEle',this.$refs[val]);
            }
        }
    },
    methods: {
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
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../../../common/stylus/variable.styl';

.hot-cities
    width 100%
    height auto
    background-color #fff
    .hot-cities-title
        width 100%
        height (63 / $rem)
        font-size (24 / $rem)
        color #000
        background-color #f5f5f5
        padding 0 (26 / $rem)
        display flex
        align-items center
    .hot-cities-list
        width 100%
        height auto
        list-style none
        display flex
        flex-wrap wrap
        .hot-cities-list-item
            width 33.33%
            height (78 / $rem)
            font-size (24 / $rem)
            box-shadow (-1 / $rem) (-1 / $rem) (2 / $rem) #e0e0e1 inset
            display flex
            align-items center
            justify-content center
</style>