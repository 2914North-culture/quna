<template>
    <div class="header">
        <div ref="backPage" class="iconfont icon-jiantou back-page" v-show="_handleTop" @click="backPage"></div>
        <div class="attractions-title" v-show="!_handleTop" :style="opacityStyle">
            <div class="iconfont icon-jiantou header-back-page" @click="backPage"></div>
            <div class="header-title">城市选择</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        topOut: Number,
    },
    data() {
        return {
            topData: 0,
            opacityStyle: {
                opcity: 0
            }

        }
    },
    watch: {
        topOut(val){
            // console.log(val);
            this.topData = val;
        }
    },
    computed: {
        _handleTop(){
            // return this.topData >= 0 ? true : false;
            if(this.topData >= 0){
                return true;
            }else{
                let countOpacity = Math.abs(this.topData / 320);
                countOpacity == 1 ? 1 : countOpacity;
                this.opacityStyle = {
                    opacity: countOpacity
                };
                return false;
            }
        }
    },
    methods: {
        backPage(){
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
    position fixed
    z-index 99
    top 0
    left 0
    .back-page
        width (72 / $rem)
        height (72 / $rem)
        background-color rgba(0,0,0,.5)
        border-radius 50%
        display flex
        align-items center
        justify-content center
        font-size (36 / $rem)
        color #ffffff
        transform rotate(180deg)
        margin (10 / $rem)
    .attractions-title
        width 100%
        height (86 / $rem)
        background-color #00bcd4
        display flex
        align-items center
        color #fff
        position absolute
        .header-back-page
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
        .header-title
            width 100%
            font-size (28 / $rem)
            display flex
            align-items center
            justify-content center

</style>