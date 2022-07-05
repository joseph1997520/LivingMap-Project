<template>
    <div>
        <div class="col-3 searchbox position-relative">
            <h2>第{{cityIdx}}個</h2>
            <div class="col-12 d-flex topselect">
                <select-box v-model="cityIdx" :TaiwanCountry="cities" />
                <select-box v-model="areaIdx" :TaiwanCountry="areas" />
            </div>
            <selection-data />
        </div>
        <Map />
    </div>
</template>

<script>
    import countryList from '@/assets/data.json';
    import SelectBox from '@/components/SelectBox.vue';
    import SelectionData from '@/components/SelectionData.vue';
    import Map from '@/views/Map.vue';

    export default {
        name:'App',
        components: {
            SelectBox,
            SelectionData,
            Map,
        },
        data() {
            return {
                cityIdx: 0,
                areaIdx: 0
            };
        },
        computed: {
            cities() {
                return countryList;
            },
            areas() {
                return countryList[this.cityIdx].AreaList;
            },
        },
    }
</script>

<style lang="scss" scoped>
    
    .searchbox {
        // height: 100vh;
        // background-color: rgba(163, 212, 245, 0.705);
        z-index: 1000;
    }
    .topselect {
        background-color: rgba(110, 161, 255, 0.781);
        border-radius: 10px;
    }
</style>