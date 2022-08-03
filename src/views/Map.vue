<template>
    <div id="map" class="w-100 position-absolute top-0">
        <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="center"
        :options="options"
        >
            <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            :maxZoom="maxZoom"
            :minZoom="minZoom"
            ></l-tile-layer>
            <l-marker :lat-lng="LatLng.LatLng" v-for="(LatLng , idx) of markers" :key="idx"></l-marker>
        </l-map>
    </div>
    <p>{{test}}</p>
</template>

<script>
    import { LMap , LTileLayer , LMarker } from '@vue-leaflet/vue-leaflet';
    import 'leaflet/dist/leaflet.css'

    export default {
        name:"Map",
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        props:{
            'markers': {
                type:Array,
                default: () => []
            },
        },
        data(){
            return {
                zoom: 16,
                maxZoom: 19,
                minZoom: 8,
                options: {
                    zoomControl:false
                },
                center:[25.045509, 121.515665],
            }
        },
        computed: {
            test(){
                
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