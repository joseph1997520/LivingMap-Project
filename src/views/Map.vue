<template>
    <div id="map" class="w-100 position-absolute top-0">
        <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[22.631522, 120.297532]"
        :options="options"
        >
            <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            :maxZoom="maxZoom"
            :minZoom="minZoom"
            ></l-tile-layer>
            <!-- <l-marker></l-marker> -->
        </l-map>
    </div>
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
        data(){
            return {
                zoom: 16,
                maxZoom: 19,
                minZoom: 8,
                options: {
                    zoomControl:false
                },
            }
        },
    }
</script>

<style lang="scss" scoped>
    #map {
        height: 100vh;
    }
</style>