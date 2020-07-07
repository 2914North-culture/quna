<template>
    <div class="search-city">
        <div class="search-city-inbox">
            <input v-model="keyword" ref="search" class="search-city-search" type="text" @focus="handleFocus" @touchstart.stop/>
        </div>
        <div ref="result-scroll" class="search-city-result" @touchstart.stop  v-show="keyword != '请输入城市名称或者拼音'">
            <ul class="result-list">
                <li class="result-list-item" v-for="city of cityList" :key="city.id"  @touchmove="pageScroll" @touchend="chooseCity">{{city.name}}</li>
                <li class="no-result" v-show="!cityList.length">没有找到匹配项</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name: 'keyword',
    data(){
        return {
            keyword: '请输入城市名称或者拼音',
            cityList: [],
            timer: null,
            noRes: false,
            isMove: false
        }
    },
    computed: {
        _getCitiesData(){
            return this.$store.state.cityData.data.cities;
        }
    },
    watch: {
        keyword(val){
            let citiesData = this._getCitiesData;
            if(this.timer){
                clearTimeout(this.timer);
            }
            if(!this.keyword){
                this.cityList = [];
                return;
            }
            this.timer = setTimeout(() => {
                let resArr = [];
                for(let i in citiesData){
                    citiesData[i].forEach((value) => {
                        if(value.name.indexOf(val) > -1 || value.spell.indexOf(val) > -1){
                            resArr.push(value);
                        }
                    })
                }
                if(resArr.length){
                    this.cityList = resArr;
                }
            },100)


        }
    },
    created(){
        this.$nextTick(() => {
            this._initScroll();
        })
    },
    methods: {
        handleFocus(event){
            // 焦点切换状态
            if(this.keyword == '请输入城市名称或者拼音'){
                this.keyword = '';
            }
        },
        _initScroll(){
            new BScroll(this.$refs['result-scroll'],{
                probeType: 3,
                click: true
            })
            document.ontouchstart = () => {
                this.keyword = '请输入城市名称或者拼音';
                this.cityList = [];
                if(this.$refs['result-scroll']){
                    this.$refs['result-scroll'].blur();
                }
            }
        },
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
@import '../../common/stylus/variable.styl';

.search-city
    width 100%
    height (86 / $rem)
    background-color #00bcd4
    .search-city-inbox
        width 100%
        height 100%
        padding (12 / $rem)
        display flex
        .search-city-search
            width 100%
            height 100%
            font-size (22 / $rem)
            font-family "华文楷体"
            text-align center
            outline none
    .search-city-result
        width 100%
        position fixed
        top (258 / $rem)
        max-height (1076.4 / $rem)
        overflow hidden
        background-color #fff
        padding 0 (12 / $rem)
        box-shadow 0 (4 / $rem) (4 / $rem) (-3 / $rem) #888
        font-family "华文楷体"
        .result-list
            width 100%
            height auto
            background-color #fff
            list-style-type none
            .result-list-item,.no-result
                width 100%
                height (50 / $rem)
                display flex
                align-items center
                font-size (28 / $rem)        
                border-bottom solid 1px #888
            .result-list-item:last-child,.no-result
                border none

</style>