<template>
        <div id="map" class="w-100 position-absolute top-0"></div>
</template>

<script>
    import L from "leaflet";
    import { onMounted } from '@vue/runtime-core';

    export default {
        name:"Map",
        setup(){
            //建構地圖
            onMounted(() => {
                let map = L.map('map',{zoomControl:false})
                
                map.setView([22.631522, 120.297532], 16);
                
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    minZoom:8,
                    maxZoom:19,
                }).addTo(map);
            })
        },
    }
</script>

<style lang="scss" scoped>
    #map {
        height: 100vh;
    }
</style>