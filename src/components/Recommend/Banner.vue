<template>
    <div class="banner" @click="getSightImages">
        <img ref="bannerImg" class="banner-img" :src="item.bannerImg"/>
        <div class="banner-msg">
            <div class="banner-msg-num" v-if="item.gallaryImgs">
                <span class="iconfont icon-xiangce num-icon"></span>
                <span class="num-text" v-if="item.gallaryImgs.length">{{item.gallaryImgs.length}}</span>
            </div>
            <div class="banner-msg-title">{{item.sightName}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        detailDataDo: Object, 
    },
    data(){
        return {
            item: '',
        }
    },
    watch: {
        detailDataDo(val){
            // console.log(val);
            this.item = val;
        }
    },
    methods: {
        getSightImages(){
            // console.log(this.item.gallaryImgs);
            this.$store.commit('sightImages',this.item.gallaryImgs);
            this.$router.push({
                name: 'GetSightImages',
                params: {
                    sightId: this.item.id + 'r'
                }
            })
        }
    }

}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.banner
    &::after
        content ''
        display block
        width 100%
        height (42 / $rem)
        background-color transparent
        background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
        position absolute 
        left 0
        bottom 0
    width 100%
    height (410 / $rem)
    position relative
    overflow hidden
    .banner-img
        width 100%
        height 100%
    .banner-msg
        position absolute
        left 0
        bottom (22 / $rem)
        width 100%
        height (100 / $rem)
        padding 0 (18 / $rem)
        color #fff
        overflow hidden
        .banner-msg-num
            width (120 / $rem)
            height (40 / $rem)
            border-radius (16 / $rem)
            background-color rgba(0,0,0,.5);
            display flex
            align-items center
            justify-content center
            font-size (24 / $rem)
            .num-icon
                font-size (22 / $rem)
                margin-right (10 / $rem)
        .banner-msg-title
            width 100%
            height (60 / $rem)
            font-size (36 / $rem)
            font-weight bold
            text-shadow 0 1px 2px rgba(0,0,0,.7)
            display flex
            align-items center
            
            

</style>