<template>
    <div class="tab">
        <div ref="switchTab" class="tab-inbox">
            <div data-type="churchyard" class="tab-inbox-churchyard tab-inbox-item" :class=" tabActive === 'churchyard' ? 'tab-active' : '' ">境内</div>
            <div data-type="overseas" class="tab-inbox-overseas tab-inbox-item" :class=" tabActive === 'overseas' ? 'tab-active' : '' ">境外·港澳台</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityTab',
    data(){
        return {
            tabType: 'churchyard',

        }
    },
    computed: {
        tabActive(){
            return this.tabType;
        }
    },
    created(){
        this.$nextTick(() => {
            this._initSwitchTab();
        })
    },
    methods: {
        _initSwitchTab(){
            let _this = this;
            let switchTab = this.$refs.switchTab;
            switchTab.addEventListener('touchstart',(event) => {
               let tabType = event.target.dataset.type;
               if(tabType){
                   _this.tabType = tabType;
                   _this.$store.commit('changeTab',tabType);
               }
            })
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.tab
    width 100%
    height (86 / $rem)
    background-color #00bcd4
    display flex
    align-items center
    justify-content center
    .tab-inbox
        width (480 / $rem)
        height (39 / $rem)
        border solid (2 / $rem) #fff
        display flex
        align-items center
        .tab-inbox-item
            width 50%
            height 100%
            display flex
            align-items center
            justify-content center
            font-size (22 / $rem)
            color #fff
        .tab-active
            color #00bcd4
            background-color #fff
            

</style>