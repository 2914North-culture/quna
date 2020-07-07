<template>
    <div class="cities" v-if="isData">
        <ul class="cities-list">
            <li class="cities-list-item" v-for="(item,value) of citiesData.cities" :key="value" :ref="value">
                <div class="item-title">{{value}}</div>
                <ul class="item-content">
                    <li class="content-city" v-for="city of item" :key="city.id" @touchmove="pageScroll" @touchend="chooseCity">{{city.name}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Cities',
    data(){
        return {
            isMove: false
        }
    },
    computed: {
        citiesData(){
            return this.$store.state.cityData.data;
        },
        isData(){
            return this.citiesData ? true : false;
        },
        sidebarMark(){
            return this.$store.state.sidebarMark;
        }
    },
    watch: {
        sidebarMark(val){
            if(val != 'hotCity'){
                this.$store.commit('markEle',this.$refs[val][0]);
            }
        }
    },
    methods: {
        pageScroll(){
            this.isMove = true;
            return;
        },
        chooseCity(event){
            if(!this.isMove){
                this.$store.commit('currentCity',event.target.innerText);
                this.$router.push({
                    name: 'Home'
                })
            }
            this.isMove = false;
        }
    }

}
</script>

<style scoped lang="stylus">
@import '../../../../common/stylus/variable.styl';

.cities
    width 100%
    height auto
    .cities-list
        list-style none
        .cities-list-item
            .item-title
                width 100%
                height (63 / $rem)
                font-size (24 / $rem)
                color #000
                background-color #f5f5f5
                padding: 0 (26 / $rem)
                display flex
                align-items center
            .item-content
                width 100%
                height auto
                display flex
                flex-wrap wrap
                .content-city
                    width 25%
                    height (78 / $rem)
                    background-color #fff
                    font-size (24 / $rem)
                    box-shadow (-1 / $rem) (-1 / $rem) (2 / $rem) #e0e0e1 inset
                    display flex
                    align-items center
                    justify-content center

        
</style>