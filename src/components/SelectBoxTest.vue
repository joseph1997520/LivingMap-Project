<template>
    <div class="country col-6 d-flex justify-content-center overflow-hidden py-4">
        <select id="countryselect" class="text-center" v-model="cityselect">
            <option hidden selected value="null">請選擇</option>
            <option 
            v-for="(city,idx) of cities" 
            :value="idx" 
            :key="city">
            {{city.CityName}}</option>
        </select>
    </div>
    <div class="country col-6 d-flex justify-content-center overflow-hidden py-4">
        <select id="countryselect" class="text-center" v-model="areaselect">
            <option hidden selected value="null">請選擇</option>
            <option 
            v-for="area of areas" 
            :value="null"
            :key="area">
            {{area.AreaName}}</option>
        </select>
    </div>
</template>
<!------------分離線------------>
<script>
    import cities from '@/assets/data.json';
    export default {
        name:'test',
        data(){
            return{
                cityselect : null,
                areaselect : null,
            }
        },
        computed: {
            areas(){
                if(this.cityselect !== null){
                    // console.log(cities[this.cityselect])
                    return cities[this.cityselect].AreaList
                }
            }
        },
        watch:{
            cityselect(nVal , oVal){
                console.log(nVal , oVal)
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