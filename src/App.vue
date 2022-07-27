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
            @change="clearMarkers"
            ></test>
            <div class="col-12">
                <ul class="list-group listdata">
                    <a href="#" class="list-group-item" v-for="(live , idx) of filterLivingNames" :key="idx" :value="idx">
                        <h3 class="text-center">{{live.Name}}</h3>
                        <p>地址：{{live.Add}}</p>
                        <p>電話：{{live.Tel}}</p>
                    </a>
                </ul>
            </div>
        </div>
        <Map></Map>
    </div>
</template>


<script>
    import SelectBox from '@/components/SelectBox.vue';
    import test from '@/components/SelectBoxTest.vue';
    import Map from '@/views/Map.vue';
    import DataList from '@/assets/data.json';
    import LivingData from '@/assets/LivingData.json';
    
    export default {
        name:'App',
        components: {
            SelectBox,
            test,
            Map,
        },
        data(){
            return{
                cityidx: 0,
                areaidx: 0,
                markers: [],
            }
        },
        computed: {
            cities(){
                return DataList;
            },
            areas(){
                return DataList[this.cityidx].AreaList;
            },
            city(){
                return DataList[this.cityidx].CityName;
            },
            area(){
                return DataList[this.cityidx].AreaList[this.areaidx].AreaName;
            },
            livedata(){
                return LivingData;
            },
            // filterLivingNames(){
            //     let livelength = this.livedata.length
            //     for(let i = 0 ; i < livelength ; i++){
            //         if(this.livedata[i].Region === this.city && this.livedata[i].Town === this.area){
            //             console.log(this.livedata[i])
            //         }
            //         else{
            //             continue
            //         }
            //     }
            // },
            filterLivingNames(){
                // console.log(this.livedata.filter(obj => obj.Region === this.city && obj.Town === this.area))
                return LivingData.filter(obj => obj.Region === this.city && obj.Town === this.area)
            },
        },
        methods: {
            cityselect(value){
                this.cityidx = value
            },
            areaselect(value){
                this.areaidx = value
            },
            clearMarkers(){
                this.markers=[]
            },
            test(){
                console.log('twice')
            }
        }
        
    }   
</script>

<style lang="scss" scoped>
    
    .searchbox {
        z-index: 1000;
    }
    .topselect {
        background-color: rgba(110, 161, 255, 0.781);
        border-radius: 10px;
    }
    #countryselect , #areaselect {
        height: 30px;
        width: 125px;
    }
    .listdata {
        overflow-y: auto;
        max-height: calc(100vh - 75px);
    }
</style>