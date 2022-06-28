<template>
    <div id="map" class="w-100"></div>
</template>

<script>
    import L from "leaflet"
import { onMounted } from '@vue/runtime-core';
    
    export default {
        setup(){
            onMounted(() => {
                let map = L.map('map').setView([22.631, 120.299], 16);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
            })
        }
    }
</script>

<style lang="scss" scoped>
    #map {
        height: 100vh;
    }
</style>