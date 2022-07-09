<template>
    <div class="col-12 d-flex topselect">
        <!--CitySelect-->
        <div class="country col-6 d-flex justify-content-center overflow-hidden py-4">
            <select id="countryselect" class="text-center" v-model="cityselect">
                <option 
                v-for="(city , idx) of cities" 
                :key="idx"
                :value="idx"
                @input="$emit('input-city',$event.value)">{{city.CityName}}</option>
            </select>
        </div>
        <!--AreaSelect-->
        <div class="country col-6 d-flex justify-content-center overflow-hidden py-4">
            <select id="areaselect" class="text-center" v-model="areaselect">
                <option
                v-for="(area,idx) of areas"
                :key="idx"
                :value="idx"
                @input="$emit('input-area',$event.value)">{{area.AreaName}}</option>
            </select>
        </div>
    </div>
</template>
<!------------Cut Line------------>
<script>
    
    export default {
        name:'test',
        props:{
            'cities': {
                type: Array,
                default: () => []
            },
            'areas': {
                type: Array,
                default: () => []
            },
            'currentCity': {
                type:[String , Number],
                default: null
            },
            'currentArea': {
                type:[String , Number],
                default: null
            },
        },
    };

</script>
<!------------分離線------------>
<style lang="scss" scoped>
    #countryselect,#areaselect{
        height: 30px;
        width: 125px;
    }
</style>