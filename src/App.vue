<template>
    <div>
        <div class="col-3 searchbox position-relative">
            <test
            :cityidx="cityidx"
            @cityselect="cityselect"
            :areaidx="areaidx"
            @areaselect="areaselect"
            :cities="cities"
            :areas="areas"
            ></test>
            <SelectionData></SelectionData>
        </div>
        <Map></Map>
    </div>
</template>


<script>
    import SelectBox from '@/components/SelectBox.vue';
    import test from '@/components/SelectBoxTest.vue';
    import SelectionData from '@/components/SelectionData.vue';
    import Map from '@/views/Map.vue';
    import DataList from '@/assets/data.json';
    // import LivingData from '@/assets/living.json';
    
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
                areaidx: 0,
            }
        },
        computed: {
            cities(){
                return DataList
            },
            areas(){
                return DataList[this.cityidx].AreaList
            },
            city(){
                return DataList[this.cityidx].CityName
            },
            area(){
                return DataList[this.cityidx].AreaList[this.areaidx].AreaName
            },
            livedata(){
                // return LivingData
            }
        },
        methods: {
            cityselect(value){
                this.cityidx = value
            },
            areaselect(value){
                this.areaidx = value
            }
        }
        
    }   
</script>

<style lang="scss" scoped>
    
    .searchbox {
        // height: 100vh;
        // background-color: rgba(163, 212, 245, 0.705);
        z-index: 1000;
    }
</style>