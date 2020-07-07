<template>
    <div class="sight-gallary">
        <div class="sight" v-show="showAbs">
            <div class="sight-header">
                <div class="iconfont icon-jiantouzuo sight-header-icon" @touchend="backPage"></div>
                <div class="header-title">景区图片</div>
            </div>
            <div ref="imageWraper" class="image-wraper">
                <ul class="image-wraper-inbox">
                    <li class="image-wraper-item" v-for="(item,index) of sightImages" :key="index" @click="handleBannerLook(index,sightImages)">
                        <img :src="item"/>
                    </li>
                </ul>
            </div>
        </div>
        <my-gallary :gallaryData="gallaryData" @changeGallary="changeGallary($event)" v-show="!showAbs"></my-gallary>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import Gallary from '@/components/public/Gallary';
export default {
    name: 'GetSightImages',
    components: {
        'my-gallary': Gallary  
    },
    data(){
        return {
            sightImages: [],
            showAbs: true,
            gallaryData: {},
        }
    },
    watch: {
        '$route'(to,from){
            if(to.params.sightId && to.params.sightId != from.params.id){
                this.sightImages = this.$store.state.sightImages;
            }
        },
      
    },
    created(){
        this.$nextTick(() => {
            this.sightImages = this.$store.state.sightImages;
            this._initScroll();
        })
    },
    methods: {
        _initScroll(){
            new BScroll(this.$refs.imageWraper,{
                probeType: 3,
                click: 3,
                useTransition: false,
                bounce: false  // 关闭弹性动画
            })
        },
        backPage(){
            // this.$router.push({
            //     name: 'Recommend',
            //     params: {
            //         id: this.$route.params.sightId
            //     }
            // })
            // 页面路由跳转 前进或者后退
            this.$router.go(-1);
        },
        handleBannerLook(index,arr){
            console.log(index);
            this.showAbs = false;
            this.gallaryData = {
                currentIndex: index,
                imgs: arr
            }
        },
        changeGallary(data){
            this.showAbs = data.showAbs;
        },
    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.sight-gallary
    width 100%
    height 100%
    .sight
        width 100%
        height 100%
        background-color #f5f5f5
        .sight-header
            width 100%
            height (86 / $rem)
            background-color #ffffff
            border-bottom (2 / $rem) solid #e0e0e0
            display flex
            align-items center
            color #333
            position absolute
            .sight-header-icon
                width (84 / $rem)
                height (86 / $rem)
                display flex
                align-items center
                justify-content center
                font-size (44 / $rem)
                position absolute
                top 0
                left 0
            .header-title
                width 100%
                font-size (34 / $rem)
                display flex
                align-items center
                justify-content center
        .image-wraper
            width 100%
            position absolute
            top (106 / $rem)
            bottom (40 / $rem)
            padding 0 (20 / $rem)
            overflow hidden
            .image-wraper-inbox
                width 100%
                height auto
                display: -moz-box;
                display: -ms-flexbox; 
                display: -webkit-box;
                display: -webkit-flex;
                display: box; 
                display: flexbox; 
                display: flex;
                flex-wrap wrap
                justify-content space-between
                list-style-type none
                .image-wraper-item
                    width 49.2%
                    height (240 / $rem)
                    margin-bottom 1.6%
                    img
                        width 100%
                        height 100%

</style>