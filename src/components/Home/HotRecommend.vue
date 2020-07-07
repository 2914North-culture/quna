<template>
    <div class="hot-recommend" v-if="recommendListDo.length">
        <div class="recommend-title">热销推荐</div>
        <ul class="recommend-list">
            <li is="my-hot-item" v-for="item of recommendListDo" :key="item.id" :itemData="item"></li>
        </ul>
    </div>
</template>

<script>
import HotItem from '../public/HotItem';
export default {
    name: 'HotRecommend',
    props: ["recommendList"],
    components: {
        'my-hot-item': HotItem
    },
    watch:{
        recommendList(val){
            this.recommendListDo = val;
        }
    },
    data(){
        return {
            recommendListDo: this.recommendList
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.hot-recommend
    background-color #fff
    .recommend-title
        width 100%
        height (78 / $rem)
        display flex
        align-items center
        font-size (34 / $rem)
        color #000
        background-color #eeeeee
        padding 0 (24 / $rem)
    .recommend-list
        padding 0 (24 / $rem)

</style>