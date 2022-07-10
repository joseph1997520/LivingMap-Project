<template>
    <div>
        <div class="col-3 searchbox position-relative">
            <!-- <select-box /> -->
            <test
            :cities="cities"
            :areas="areas"
            v-model:current-city = "cityidx"
            v-model:current-area = "areaidx"
            ></test>
        </div>
        <Map></Map>
    </div>
</template>

<script>
    import SelectBox from '@/components/SelectBox.vue';
    import test from '@/components/SelectBoxTest.vue';
    import SelectionData from '@/components/SelectionData.vue';
    import Map from '@/views/Map.vue';
    import datalist from '@/assets/data.json';
    
    export default {
        name:'App',
        components: {
            SelectBox,
            SelectionData,
            test,
            Map,
        },
        data(){
            return{
                cityidx: 0,
                areaidx: 0
            }
        },
        computed: {
            cities(){
                return datalist
            },
            areas(){
                return datalist[this.cityidx].AreaList
            }   
        },
        
    }   
</script>

<style lang="scss" scoped>
    
    .searchbox {
        // height: 100vh;
        // background-color: rgba(163, 212, 245, 0.705);
        z-index: 1000;
    }
    .topselect {
        background-color: rgba(110, 161, 255, 0.781);
        border-radius: 10px;
    }
</style>