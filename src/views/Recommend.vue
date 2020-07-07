<template>
    <div ref="detail" class="detail">
        <my-header :topOut="topOut"></my-header>
        <div ref="detailInbox" class="detail-inbox">
            <div>
                <my-fade>
                    <my-banner :detailDataDo="detailData"></my-banner>
                </my-fade>
                <my-base-info></my-base-info>
                <my-announce></my-announce>
                <my-list-container :categoryListData="categoryListData"></my-list-container>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import Header from '../components/Recommend/Header';
import Banner from '../components/Recommend/Banner';
import BaseInfo from '../components/Recommend/BaseInfo';
import Announce from '../components/Recommend/Announce';
import ListContainer from '../components/Recommend/ListContainer';
import Fade from '../components/public/FadeAnimation/Fade';
export default {
    name: 'Detail',
    components: {
        'my-banner': Banner,
        'my-header': Header,
        'my-base-info': BaseInfo,
        'my-announce': Announce,
        'my-list-container': ListContainer,
        'my-fade': Fade
    },
    data(){
        return {
            detailData: {},
            categoryListData: [],
            topOut: 0
        }
    },
    watch: {
        // 监听路由参数变化更新数据
        '$route'(to,from){
            if(to.params.id && to.params.id != from.params.id){
                this._initGetData();
            }
        }
    },
    created(){
        this.$nextTick(() => {
            this._initScroll();
            this._initGetData();
            this.recommendPage_Wraper.on('scroll',(pos) => {
                this.topOut = pos.y;
            })
        })
    },
    methods: {
        _initScroll(){
            this.recommendPage_Wraper = new BScroll(this.$refs.detailInbox,{
                probeType: 3,
                scrollY: true,
                click: true,
                bounce: false,
                useTransition: false,  // 防止iphone微信滑动卡顿
                momentumLimitDistance: 5
            });
        },
        _initGetData(){
            let api = '/api/detail';
            this.$http.get(api).then((res) => {
                let resData = this.detailData = res.data.data.data;
                for(let i = 0; i < resData.length; i++){
                    if(resData[i].id === this.$route.params.id){
                        console.log(resData[i].categoryList);
                        this.detailData = resData[i];
                        this.categoryListData = resData[i].categoryList;
                    }
                }
            },(err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped lang="stylus">
.detail
    width 100%
    height 100%
    background-color #f5f5f5
    position relative
    .detail-inbox
        width 100%
        height 100%
</style>
