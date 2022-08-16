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
                    <div href="#" class="list-group-item position-relative" v-for="(live , idx) of filterLivingNames" :key="idx" :value="idx">
                        <h3 class="text-center">{{live.Name}}</h3>
                        <p>地址：{{live.Add}}</p>
                        <p>電話：{{live.Tel}}</p>
                        <div class="clickLocation position-absolute">
                            <fa icon="fa-solid fa-location-dot" class="locationIcon" @click="listClick(idx)"></fa>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
        <Map :markers="markers" :listClickLatLng="listClickLatLng" :filterLivingName="filterLivingName"
        ref="Map">
        </Map>
    </div>
</template>


<script>
    import SelectBox from '@/components/SelectBox.vue';
    import Map from '@/components/Map.vue';
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
                listClickLatLng: [],
                filterLivingName:[]
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
                this.cityidx = value;
            },
            areaselect(value){
                this.areaidx = value;
            },
            changeMarkers(){
                this.filterLivingName = this.filterLivingNames;
                this.markers = this.filterLivingNames.map(function(obj){
                    return {
                        Id: [obj.Id],
                        Name: [obj.Name],
                        Add: [obj.Add],
                        LatLng: [obj.Py , obj.Px],
                        content:
                        `
                        <h5>${obj.Name}</h5><br>
                        <a target="_blank" href="https://www.google.com/maps/search/${obj.Name}/@${obj.Py , obj.Px},15z">詳細地址</a>
                        `
                    };
                });
            },
            listClick(i){
                this.listClickLatLng = [this.filterLivingNames[i].Py , this.filterLivingNames[i].Px];
                let listClickRef = this.$refs.Map.$refs.markerTest;
                let listClickLatLng = listClickRef[i].latLng;
                listClickRef[i].leafletObject._popup._latlng = listClickLatLng;
                listClickRef[i].leafletObject._popup.openOn();
            },
            changeSelectClosePopup(){
                
            }
        },
        watch: {
            cityidx(nVal , oVal){
                if(nVal != oVal){
                    this.areaidx = 0;
                    this.changeMarkers();
                }
            },
            areaidx(nVal , oVal){
                if(nVal != oVal){
                    this.changeMarkers();
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
    .clickLocation {
        bottom: 30px;
        right: 40px;
        width: 30px;
        height: 30px;
    }
    .clickLocation :hover{
        color: rgb(0, 119, 255);
        cursor: pointer;
    }
    .locationIcon {
        width: 30px;
        height: 30px;
    }
</style>