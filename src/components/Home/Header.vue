<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont icon-jiantou arrow-icon"></span>
        </div>
        <div class="header-center">
            <span class="iconfont icon-yssousuo1 magnify-icon"></span>
            <span class="search-prompt-text">请输入城市/景点游玩/主题</span>
        </div>
        <div class="header-right" @touchend="getCity">
            <span class="city-text">{{_initCurrentCity}}</span>
            <span class="iconfont icon-jiantouarrow492 city-icon"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {

        }
    },
    computed: {
        _initCurrentCity(){
            return this.$store.state.currentCity;
        }
    },
    methods: {
        getCity(){
            this.$router.push({
                name: 'City'
            })
        }
    }

}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.header
    width 100%
    height (86 / $rem)
    background-color #00bcd4
    display flex
    align-items center
    .header-left
        width (84 / $rem)
        height 100%
        transform rotate(-180deg)
        display flex
        align-items center
        justify-content center
        .arrow-icon
            color #fff
            font-size (42 / $rem)
    .header-center
        width (542 / $rem)
        height (64 / $rem)
        background-color #fff
        border-radius (8 / $rem)
        font-size (24 / $rem)
        color #ccc
        display flex
        align-items center
        padding-left (20 / $rem)
        .magnify-icon
            font-size (28 / $rem)
            margin-right (10 / $rem)
    .header-right
        display flex
        width (124 / $rem)
        align-items center
        justify-content center
        font-size (24 / $rem)
        color #fff
        height 100%
        .city-icon
            font-size (16 / $rem)
            transform rotate(-180deg)



</style>