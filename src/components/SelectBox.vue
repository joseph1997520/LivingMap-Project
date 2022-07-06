<template>
    <div class="country col-6 d-flex justify-content-center overflow-hidden py-4">
        <select id="countryselect" class="text-center" v-model="cityidx">
            <option disabled selected value="null">請選擇</option>
            <option v-for="(cities,idx) of countryList" :value="idx" :key="cities">{{cities.name}}</option>
        </select>
    </div>
    <h2></h2>
</template>
<!------------分離線------------>
<script>
    import countryList from '@/assets/TwCities.json';
    export default {
        name:'SelectBox',
        data(){
            return{
                countryList,
                cityidx : null,
            }
        }
    };

</script>
<!------------分離線------------>
<style lang="scss" scoped>
    #countryselect,#areaselect{
        height: 30px;
        width: 125px;
    }
</style>