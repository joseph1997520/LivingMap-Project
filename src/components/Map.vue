<template>
    <div id="map" class="w-100 position-absolute top-0">
        <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="center"
        :options="options">
            <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            :maxZoom="maxZoom"
            :minZoom="minZoom"
            :attribution="attribution"
            ></l-tile-layer>

            <l-marker :lat-lng="LatLng.LatLng" v-for="(LatLng , idx) in markers" :key="idx"  @click="markerClickCenter(idx)" ref="markerClick">
                <l-popup id="popup" ref="popup"
                v-if="LatLng.content"
                :content="LatLng.content">
                    <!-- <h5>{{LatLng.Name[0]}}</h5>
                    <a target="_blank" :href="`https://www.google.com/maps/search/${LatLng.Name}/@${LatLng.LatLng[0],LatLng.LatLng[1]},15z`">詳細地址</a> -->
                </l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
    import { LMap , LTileLayer , LMarker , LPopup } from '@vue-leaflet/vue-leaflet';
    import 'leaflet/dist/leaflet.css'

    export default {
        name:"Map",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup
        },
        props:{
            'markers': {
                type:Array,
                default: () => []
            },
            'listClickLatLng':{
                type:Array,
                default: () => []
            },
            'filterLivingName': {
                type:Array,
                default: () => []
            }
        },
        data(){
            return {
                zoom: 15,
                maxZoom: 19,
                minZoom: 8,
                options: {
                    zoomControl:false
                },
                center:[25.045509, 121.515665],  
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                url: 'https://www.google.com.tw/maps/place/',
            }
        },
        methods: {
            markerClickCenter(idx){
                let markerClickLatLng = [this.markers[idx].LatLng[0] , this.markers[idx].LatLng[1]];
                this.center = markerClickLatLng;
            }
        },
        watch: {
            markers(){
                console.log(this.$refs.markerClick)
                let lan = 0;
                let lng = 0;
                let markerLength = this.markers.length;
                if(this.markers.length == 0){
                    // console.log(this.center)
                    return this.center
                }
                else{
                    this.markers.forEach(item => {
                        lan += Number(item.LatLng[0]) / markerLength;
                        lng += Number(item.LatLng[1]) / markerLength;
                    })
                    this.center = [lan , lng];
                    return this.center
                }
            },

            listClickLatLng: function(idx , idx_1){
                this.center = [this.listClickLatLng[0] , this.listClickLatLng[1]];
            }
        }
    }
</script>

<style lang="scss" scoped>
    #map {
        height: 100vh;
    }
</style>