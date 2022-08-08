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
            <l-marker :lat-lng="LatLng.LatLng" v-for="(LatLng , idx) in markers" :key="idx" @click="markerClick(idx)">
                <l-popup></l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
    import { LMap , LTileLayer , LMarker , LPopup } from '@vue-leaflet/vue-leaflet';
    import 'leaflet/dist/leaflet.css'
import { marker } from 'leaflet/dist/leaflet-src.esm';

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
            'filterLivingName': {
                type:Array,
                default: () => []
            },
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
            }
        },
        methods: {
            markerClick(idx){
                let markerClickLatLng = [this.markers[idx].LatLng[0] , this.markers[idx].LatLng[1]];
                this.center = markerClickLatLng;
            }
        },
        watch: {
            markers: function(){
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
                    console.log(this.filterLivingName)
                    return this.center
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #map {
        height: 100vh;
    }
    .test {
        z-index: 99999999999;
        right: 0;
        top: 0;
        position: sticky;
    }
</style>