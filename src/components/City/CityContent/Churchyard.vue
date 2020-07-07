<template>
    <div class="churchyard">
        <my-hot-cities></my-hot-cities>
        <my-cities></my-cities>
    </div>
</template>

<script>
import HotCities from './Churchyard/HotCities';
import Cities from './Churchyard/Cities';
export default {
    name: 'Churchyard',
    components: {
        'my-hot-cities': HotCities,
        'my-cities': Cities
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../../common/stylus/variable.styl';


</style>