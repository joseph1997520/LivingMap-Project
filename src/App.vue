<template>
    <div>
        <div class="col-3 searchbox position-relative">
            <select-box
            :cityidx="cityidx"
            @cityselect="cityselect"
            :areaidx="areaidx"
            @areaselect="areaselect"
            :cities="cities"
            :areas="areas"
            ></select-box>
            <div class="col-12">
                <ul class="list-group listdata">
                    <a href="#" class="list-group-item" v-for="(live , idx) of filterLivingNames" :key="idx" :value="idx" @click="gotoClick(idx)">
                        <h3 class="text-center">{{live.Name}}</h3>
                        <p>地址：{{live.Add}}</p>
                        <p>電話：{{live.Tel}}</p>
                    </a>
                </ul>
            </div>
        </div>
        <Map :markers="markers" :filterLivingName="filterLivingNames">
        </Map>
    </div>
</template>


<script>
    import SelectBox from '@/components/SelectBox.vue';
    import Map from '@/views/Map.vue';
    import DataList from '@/assets/data.json';
    import LivingData from '@/assets/LivingData.json';
    
    export default {
        
        name:'App',
        components: {
            SelectBox,
            Map,
        },
        data(){
            return{
                cityidx: null,
                areaidx: null,
                markers: [],
                filterLivingName: []
            }
        },
        computed: {
            cities(){
                return DataList;
            },
            areas(){
                if(this.cityidx == null){
                    return
                }
                else{
                    return DataList[this.cityidx].AreaList;
                }
            },
            city(){
                if(this.cityidx == null){
                    return
                }
                else{
                    return DataList[this.cityidx].CityName;
                }
                
            },
            area(){
                if(this.cityidx == null || this.areaidx == null){
                    return
                }
                else{
                    return DataList[this.cityidx].AreaList[this.areaidx].AreaName;
                }
                
            },
            livedata(){
                return LivingData;
            },
            filterLivingNames(){
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
            changeSelect(){
                this.filterLivingName = this.filterLivingNames;
            },
            changeMarkers(){
                this.filterLivingName = this.filterLivingNames
                this.markers = this.filterLivingNames.map(function(obj){
                    return {
                        LatLng:[obj.Py , obj.Px]
                    }
                })
            },
            gotoClick(i){
                
            }
        },
        watch: {
            cityidx(nVal , oVal){
                if(nVal != oVal){
                    this.areaidx = 0
                    this.changeMarkers()
                }
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
    .test {
        display: inline;
        position: sticky;
        top: 0;
        right: 0;
        z-index: 99999;
    }
</style>