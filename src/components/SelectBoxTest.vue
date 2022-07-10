<template>
    <div class="col-12 d-flex topselect">
        <!--CitySelect-->
        <div class="country col-6 d-flex justify-content-center overflow-hidden py-4">
            <select id="countryselect" class="text-center" v-model="cityselect">
                <option value="null" disabled selected>--CHOOSEN--</option>
                <option 
                v-for="(city , idx) of cities" 
                :key="idx"
                :value="idx">{{city.CityEngName}}</option>
            </select>
        </div>
        <!--AreaSelect-->
        <div class="country col-6 d-flex justify-content-center overflow-hidden py-4">
            <select id="areaselect" class="text-center" v-model="areaselect">
                <option value="null" disabled selected>--CHOOSEN--</option>
                <option
                v-for="(area , idx) of areas"
                :key="idx"
                :value="idx">{{area.AreaEngName}}</option>
            </select>
        </div>
    </div>
</template>
<!------------Cut Line------------>
<script>
    
    export default {
        name:'test',
        props:{
            'cityidx': {
                type: Number,
                default: 0
            },
            'areaidx': {
                type: Number,
                default: 0
            },
            'cities': {
                type: Array,
                default: () => []
            },
            'areas': {
                type: Array,
                default: () => []
            },
        },
        computed: {
            cityselect: {
                get(){
                    return this.cityidx;
                },
                set(val){
                    this.$emit('update:current-city' , val);
                }
            },
            areaselect: {
                get(){
                    return this.areaidx;
                },
                set(val){
                    this.$emit('change:current-area' , val);
                }
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