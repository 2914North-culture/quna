<template>
    <div class="list-container"> 
        <div class="list-container-inbox">
            <my-where-go :whereGoData="whereGoData"></my-where-go>
            <my-ticket-shelf :ticketShelfData="ticketShelfData"></my-ticket-shelf>
        </div>
    </div>
</template>

<script>
import WhereGo from './ListContainer/WhereGo';
import TicketShelf from './ListContainer/TicketShelf';
export default {
    name: 'ListContainer',
    props: {
        categoryListData: Array
    },
    components: {
        'my-where-go': WhereGo,
        'my-ticket-shelf': TicketShelf
    },
    watch: {
        categoryListData(val){
            this.whereGoData = val[0];
            this.ticketShelfData = val[1];
        }
    },
    data () {
        return {
            whereGoData: {},
            ticketShelfData: []
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl';

.list-container
    width 100%
    height auto

</style>