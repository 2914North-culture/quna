<template>
    <div ref="cityContent" class="city-content">
        <my-churchyard v-if="tabType === 'churchyard'"></my-churchyard>
        <my-overseas v-if="tabType === 'overseas'"></my-overseas>
    </div>
</template>

<script>
import Churchyard from '@/components/City/CityContent/Churchyard';
import Overseas from '@/components/City/CityContent/Overseas';
export default {
    name: 'CityContent',
    components: {
        'my-churchyard': Churchyard,
        'my-overseas': Overseas
    },
    data(){
        return{
            
        }
    },
    computed: {
        tabType(){
            return this.$store.state.tabType;
        }
    },
    created(){
        this.$nextTick(() => {

        })
    },
    methods: {

    }
    
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';


    
</style>