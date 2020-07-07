<template>
    <div class="header">
        <div class="iconfont icon-jiantou city-header-arrow" @touchend="getHome"></div>
        <div class="city-header-title">城市选择</div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{

        }
    },
    methods: {
        getHome(){
            this.$router.push({
                name: 'Home'
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
    color #fff
    position relative
    .city-header-arrow
        width (84 / $rem)
        height (86 / $rem)
        transform rotate(-180deg)
        display flex
        align-items center
        justify-content center
        font-size (42 / $rem)
        position absolute
        top 0
        left 0
    .city-header-title
        width 100%
        font-size (28 / $rem)
        display flex
        align-items center
        justify-content center

</style>