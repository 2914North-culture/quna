<template>
  <div class="where-go">
    <div class="where-go-title">{{item.title}}</div>
    <ul class="where-go-content" v-if="item.children">
      <li class="ticket-item" v-for="(item,index) of item.children" :key="index">
        <div class="ticket-item-main">
          <div class="ticket-title">{{item["ticket-title"]}}</div>
          <div class="ticket-light">
            <img class="light-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20202/6489a65436e6dd60420dae78f46d25d6.png"/>
            {{item["ticket-light"]}}
          </div>
          <ul class="ticket-label">
            <li
              class="label-item"
              v-for="(item,index) of item['ticket-label']"
              :key="index"
            >{{item}}</li>
          </ul>
        </div>
        <div class="ticket-item-side">
          <div class="side-price">
            <span class="price-icon">¥</span>
            <span class="price-num">{{item["ticket-price"]}}</span>
          </div>
          <div class="side-reserve">{{item["reserve-desc"] ? "立即预定" : "查看"}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "WhereGo",
    props: {
      whereGoData: Object
    },
    watch: {
      whereGoData(val){
        this.item = val;
      }
    },
    data () {
        return {
          item: {}
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../../common/stylus/variable.styl';

.where-go
    background-color #fff
    padding 0 (16 / $rem) (30 / $rem)
    margin (20 / $rem) 0
    .where-go-title
        font-size (40 / $rem)
        font-weight bold
        color #212121
        padding-top (32 / $rem)
    .where-go-content
        background-color #f8f8f8
        margin (32 / $rem) 0 (20 / $rem)
        padding 0 (32 / $rem)
        border-radius (16 / $rem)
        .ticket-item:first-child:before
          border 0
        .ticket-item
            padding (32 / $rem) 0
            display flex
            position relative
            &:before
                content ""
                display block
                position absolute
                top 0
                width (654 / $rem)
                border-top solid 1px #e0e0e0
            .ticket-item-main
                flex 2.92
                .ticket-title
                    font-size (29 / $rem)
                    color #333
                    display -webkit-box
                    -webkit-line-clamp 2
                    -webkit-box-orient vertical
                    overflow hidden
                    text-overflow ellipsis 
                .ticket-light
                    display flex
                    align-items center
                    padding-top (8 / $rem)
                    font-size (24 / $rem)
                    color #00afc7
                    .light-img
                        width (20 / $rem)
                .ticket-label
                    list-style-type none
                    display flex 
                    flex-wrap wrap
                    .label-item
                        display flex
                        align-items center
                        justify-content cneter
                        font-size (20 / $rem)
                        color #00afc7
                        margin (10 / $rem) (10 / $rem) 0 0
                        padding 0 (8 / $rem)
                        border solid 1px #00afc7
                        border-radius (8 / $rem)
            .ticket-item-side
                flex 1
                display flex
                justify-content center
                flex-wrap wrap
                .side-price
                    color #ff8300
                    .price-icon
                        font-size (32 / $rem)
                    .price-num
                        font-size (40 / $rem)
                        margin-left (4 / $rem)
                .side-reserve
                    height (52 / $rem)
                    width (146 / $rem)
                    border-radius (30 / $rem)
                    color #fff
                    font-size (24 / $rem)
                    display flex
                    align-items center
                    justify-content center
                    background-image linear-gradient(145deg,#ffab1e 0,#ff8c12 100%)
</style>