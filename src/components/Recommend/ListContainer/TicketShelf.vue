<template>
    <ul class="ticket-shelf">
        <li class="ticket-shelf-item" v-for="(item,index) of ticketShelfData" :key="index">
            <div class="shelf-item-title">{{item.title}}</div>
            <div v-if="item.children">
                <div v-for="(item,index) of item.children" :key="index">
                    <div class="ticket-shelf-name">{{item.desc}}</div>
                    <ul class="shelf-advice" v-if="item.advice">
                        <li class="shelf-advice-item" v-for="(item,index) of item.advice" :key="index">{{item}}；</li>
                        <li class="iconfont icon-jiantou arrow-icon"></li>
                    </ul>
                    <ul class="ticket-list" v-if="item.children">
                        <li class="ticket-list-item" v-for="(item,index) of item.children" :key="index">
                            <div class="ticket-item-name">{{item['ticket-type']}}</div>
                            <div class="ticket-item-price">
                                ¥<span class="price-num">{{item['ticket-price']}}</span>起
                                <span class="iconfont icon-jiantou more-icon"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "TicketShelf",
    props: {
        ticketShelfData: Array
    },
    data () {
        return{
            
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../../common/stylus/variable.styl';

.ticket-shelf
    width 100%
    height auto
    .ticket-shelf-item
        padding 0 (16 / $rem) (32 / $rem)
        background-color #fff
        margin-bottom (20 / $rem)
        .shelf-item-title
            font-size (40 / $rem)
            color #212121
            font-weight bold
            padding-top (32 / $rem)
        .ticket-shelf-name
            font-size (32 / $rem)
            font-weight bold
            position relative
            margin-top (28 / $rem)
            padding-left (20 / $rem)
            &:before
                content ""
                display block
                position absolute 
                width (8 / $rem)
                height (24 / $rem)
                background-image linear-gradient(126deg,#00e0ca 0,#00bfd4 100%)
                border-radius (6 / $rem)
                left 0
                top (8 / $rem)
        .shelf-advice
            list-style-type none 
            background-color #f8f8f8
            color #616161
            font-size (22 / $rem)
            display flex
            align-items center
            padding (16 / $rem) (20 / $rem)
            margin-top (20 / $rem)
            border-radius (8 / $rem)
            position relative
            .arrow-icon
                font-size (28 / $rem)
                position absolute
                right (20 / $rem)
                top 50%
                transform translateY(-50%)
        .ticket-list
            list-style-type none 
            border-radius (50 / $rem)
            box-shadow 0 0.04rem 0.12rem 0 rgba(0,0,0,0.10)
            margin (32 / $rem) 0 (20 / $rem)
            .ticket-list-item:first-child:before
                border none
            .ticket-list-item
                &:before
                    content ""
                    display block
                    width 100%
                    position absolute 
                    top 0
                    border-top solid 1px #dadada
                position relative
                margin 0 (20 / $rem)
                font-size (30 / $rem)
                color #333
                display flex
                align-items center
                justify-content space-between
                padding (32 / $rem) 0
                .ticket-item-price
                    color #ff9800
                    font-size (24 / $rem)
                    display flex
                    align-items baseline
                    .price-num
                        font-size (40 / $rem)
                        margin 0 (4 / $rem)
                    .more-icon
                        color #bbb
                        font-size (24 / $rem)
                        border solid 1px #bbb
                        width (30 / $rem)
                        height (30 / $rem)
                        margin-left (4 / $rem)
                        transform rotate(90deg)
                        border-radius 50%
                        display flex
                        align-items center
                        justify-content center


            

</style>