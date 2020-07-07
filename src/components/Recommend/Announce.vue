<template>
    <div class="announce">
        <span class="iconfont icon-tongzhi1 notice-icon"></span>
        <span class="announce-text">【景区现已开放】疫情防控期间，进入景区需佩戴口罩，与他人保持1.5米距离。同时，请您配合景区做好入园体温检测及实名登记工作。由此给您带来不便，敬请谅解。</span>
        <span class="iconfont icon-jiantouzuo arrow-icon"></span>
    </div>
</template>

<script>
export default {
    name: 'Announce',
    data () {
        return {

        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.announce
    position relative
    width 100%
    height (88 / $rem)
    color #ff8300
    background-color #fff5e5
    font-size (28 / $rem)
    padding 0 (20 / $rem)
    display flex
    align-items center
    margin-bottom (20 / $rem)
    .notice-icon
        margin-right (10 / $rem)
    .announce-text
        overflow hidden
        text-overflow ellipsis 
        white-space nowrap
        width 85%  
    .arrow-icon
        font-size (28 / $rem)
        color gray
        display block
        transform rotate(180deg)
        position absolute 
        right (20 / $rem)
</style>