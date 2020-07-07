<template>
    <div class="base-info">
        <div class="bi-card">
            <div class="bi-card-score bi-card-item">
                <div class="score-msg bi-card-item-msg">
                    <div class="score-msg-sup">
                        <span class="score-num">4.9</span>
                        <span class="score-text">分</span>
                        <span class="score-desc">很棒</span>
                    </div>
                    <div class="score-msg-sub">
                        <span class="comments">8556条评论</span>
                        <span class="strategy">10条攻略</span>
                    </div>
                </div>
                <span class="iconfont icon-jiantou score-icon card-arrow-icon"></span>
            </div>
            <div class="bi-card-intro bi-card-item">
                <div class="intro-msg bi-card-item-msg">
                    <div class="intro-msg-sup">
                        <span class="intro-sup-text">景点简介</span>
                    </div>
                    <div class="intro-msg-sub">
                        <span class="intro-sub-text">开放时间、贴士</span>
                    </div>
                </div>
                <span class="iconfont icon-jiantou intro-icon card-arrow-icon"></span>
            </div>
        </div>
        <div class="bi-address">
            <span class="iconfont icon-dingwei1 pos-icon"></span>
            <span class="bi-address-text">北京市丰台区花乡丰葆路158号</span>
            <span class="iconfont icon-jiantou arrow-icon"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "baseInfo",
    data(){
        return {

        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.base-info
    width 100%
    height (198 / $rem)
    position relative
    top (-10 / $rem)
    border-radius (10 / $rem) (10 / $rem) 0 0
    background-color #fff
    padding (10 / $rem) (20 / $rem) 0
    margin-bottom (10 / $rem)
    .bi-card
        width 100%
        height (112 / $rem)
        display flex
        .bi-card-intro
            position relative
            &:before
                content ""
                display block
                border-left solid 1px #e0e0e0
                height (80 / $rem)
                position absolute
                top 50%
                transform translateY(-50%)
        .bi-card-item
            width 100%
            height 100%
            display flex
            .bi-card-item-msg
                width 85%
                .score-msg-sup
                    height 50%
                    font-size (28 / $rem)
                    color #ff8300
                    .score-num
                        font-size (44 / $rem)
                    .score-desc
                        margin-left (20 / $rem)
                .score-msg-sub
                    font-size (24 / $rem)
                    color #9e9e9e
                    margin-right (20 / $rem)
                    .comments
                        margin-right (20 / $rem)
                .intro-msg-sup
                    height 50%
                    display flex
                    align-items center
                    font-size (28 / $rem)
                    color #212121
                    padding-left (30 / $rem)
                .intro-msg-sub
                    font-size (24 / $rem)
                    color #9e9e9e
                    padding-left (30 / $rem)
            .card-arrow-icon
                flex-grow 1
                display flex
                align-items center
                justify-content center
                font-size (28 / $rem)
                color #9e9e9e
            .intro-icon
                justify-content flex-end
                
    .bi-address
        position relative
        padding (20 / $rem) 0
        color #9e9e9e
        display flex
        align-items center
        &:before
            content ""
            displlay block
            width 100%
            border-top solid 1px #f0f0ef
            position absolute
            top 0
        .pos-icon
            font-size (36 / $rem)
            margin-right (20 / $rem)
        .bi-address-text
            font-size (32 / $rem)
            color #212121
        .arrow-icon
            font-size (28 / $rem)
            position absolute 
            right 0
            


</style>