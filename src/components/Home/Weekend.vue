<template>
    <div class="weekend" v-if="weekendListDo.length">
        <div class="weekend-title">周末去哪儿</div>
        <ul class="weekend-list">
            <li is="my-weekend-item" v-for="item of weekendListDo" :key="item.id" :itemData="item"></li>
        </ul>
    </div>
</template>

<script>
import WeekendItem from '../public/WeekendItem';
export default {
    name: "weekend",
    props: ["weekendList"],
    components: {
        'my-weekend-item': WeekendItem
    },
    watch: {
        weekendList(val){
            this.weekendListDo = val;
        }
    },
    data(){
        return{
            weekendListDo: this.weekendList
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.weekend
    width 100%
    height auto
    background-color #fff
    .weekend-title
        width 100%
        height (78 / $rem)
        background-color #eeeeee
        font-size (34 / $rem)
        color #000
        display flex
        align-items center
        padding: 0 (24 / $rem)
</style>