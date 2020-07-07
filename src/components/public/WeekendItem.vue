<template>
    <div class="weekend-item">
        <div class="weekend-item-img">
            <img :src="item.imgUrl"/>
        </div>
        <div class="weekend-item-msg">
            <div class="weekend-item-msg-title msg-item">
                <span class="title-text">{{item.title}}</span>
            </div>
            <div class="weekend-item-msg-desc msg-item">
                <p class="desc-text">{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WeekendItem',
    props: ["itemData"],
    data(){
        return {
            item: this.itemData
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/linsEllipsis.styl';

.weekend-item
    width 100%
    height auto
    .weekend-item-img
        width 100%
        height (250 / $rem)
        img
            width 100%
            height (250 / $rem)
    .weekend-item-msg
        width 100%
        height (112 / $rem)
        .msg-item
            width 100%
            height 50%
            display flex
            align-items center
            padding: 0 (24 / $rem)
        .weekend-item-msg-title
            font-size (25 / $rem)
            color #000
        .weekend-item-msg-desc
            font-size (21 / $rem)
            color #ccc
        


</style>