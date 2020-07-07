<template>
    <swiper ref="mySwiper" :options="swiperOptions" class="classify-list" v-if="pagesdo.length">
        <swiper-slide ref="swiper" class="classify-list-item" v-for="(page,index) of pagesdo" :key="index">
            <div class="icon-item" v-for="item of page" :key="item.id">
                <div class="icon-item-img">
                    <img :src="item.imgUrl"/>
                </div>
                <div class="icon-item-desc">{{item.desc}}</div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" v-if="pagesdo.length > 1"></div>
    </swiper>
</template>


<script>
export default {
    name: 'ClassifyList',
    props: ['iconList'],
    data(){
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
            },
            iconListDo: this.iconList,
            pagesdo: [],
        }
    },
    watch: {
        iconList(val){
            this.iconListDo = val;
        },
        pages(val){
            this.pagesdo = val;
        }
    },
    created(){
        this.$nextTick(() => {

        })
    },
    computed: {
        pages () {
            let pages = [];
            this.iconListDo.forEach((item,index) => {
                let page = Math.floor(index / 8);
                if(!pages[page]){
                    pages[page] = [];
                }
                pages[page].push(item);
            })
            if(pages.length){
                // pages.pop();
                this.pagesdo = pages;
                return pages;
            }
        }

    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/ellipsis.styl';

.swiper-container
    >>> .swiper-pagination-bullet
        width (20 / $rem)
        height (6 / $rem)
        border-radius (4 / $rem)
    >>> .swiper-pagination-bullet-active
        background-color #9a9a9a
.classify-list
    width 100%
    height (365 / $rem)
    background-color #fff
    .classify-list-item
        display flex
        flex-wrap wrap
        padding (40 / $rem) 0
        justify-content space-between
        align-content space-between
        .icon-item
            width (108 / $rem)
            height (115 / $rem)
            overflow hidden
            display flex
            justify-content center
            flex-wrap wrap
            align-content space-between
            margin 0 (39 / $rem)
            .icon-item-img
                width (70 / $rem)
                height (70 / $rem)
                img
                    width 100%
                    height 100%
            .icon-item-desc
                font-size (26 / $rem)
                text-align centre
                ellipsis()
                
</style>