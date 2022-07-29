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
            <l-marker :lat-lng="markerLatLng"></l-marker>
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
                center:[22.631522, 120.297532],
                markerLatLng:[22.631522, 120.297532]
            }
        },
        computed: {
            test(){
                console.log(this.markers)
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