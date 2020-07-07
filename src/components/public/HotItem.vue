<template>
    <div class="hot-item" @touchmove="tapMove" @touchend="getRecommend(item.id)">
        <div class="hot-item-img">
            <img :src="item.imgUrl"/>
        </div>
        <div class="hot-item-msg">
            <div class="hot-item-msg-title msg-item">
                <span class="title-text">{{item.title}}</span>
            </div>
            <div class="hot-item-msg-desc msg-item">
                <p class="desc-text">{{item.desc}}</p>
            </div>
            <div class="price msg-item">
                ¥<span class="price-text">58</span>
                <span class="price-since">起</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HotItem',
    props: ["itemData"],
    data(){
        return{
            item: this.itemData,
            isMove: false
        }
    },
    methods: {
        tapMove(){
            this.isMove = true;
            return;
        },
        getRecommend(id){
            if(!this.isMove){
                this.$router.push({
                    name: 'Recommend',
                    params: {
                        id
                    }
                })
            }
            this.isMove = false;
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl'
@import '../../common/stylus/linsEllipsis.styl'

.hot-item
    background-color #fff
    width 100%
    height (180 / $rem)
    display flex
    align-items center
    .hot-item-img
        width (138 / $rem)
        height (138 / $rem)
        img 
            width (138 / $rem)
            heigh (138 / $rem)
    .hot-item-msg
        width 100%
        height (138 / $rem)
        padding-left (18 / $rem)
        display flex
        flex-wrap wrap
        align-content space-between
        .msg-item
            width 100%
            font-size (23 / $rem)
            color #ff9300
            .title-text
                font-size (30 / $rem)
                color #000
            .desc-text
                font-size (28 / $rem)
                color #b9b8ba
            .price-text
                font-size (32 / $rem)
            .price-since
                color #c7c7c8
                font-size (20 / $rem)
        .hot-item-msg-desc
            linsEllipsis()
        .price
            display flex;
            align-items baseline

</style>