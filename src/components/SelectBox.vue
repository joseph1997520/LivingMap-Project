<template>
    <div class="col-12 d-flex topselect">
        <!--CitySelect-->
        <div class="country col-6 d-flex justify-content-center overflow-hidden my-auto">
            <select id="countryselect" class="text-center" :value="cityidx" @input="$emit('cityselect' ,$event.target.value)">
                <option value="null" disabled selected>--請選擇--</option>
                <option 
                v-for="(city , idx) of cities" 
                :key="city.idx"
                :value="idx">{{city.CityName}}</option>
            </select>
        </div>
        <!--AreaSelect-->
        <div class="country col-6 d-flex justify-content-center overflow-hidden my-auto">
            <select id="areaselect" class="text-center" :value="areaidx" @input="$emit('areaselect' ,$event.target.value)">
                <option value="null" disabled selected>--請選擇--</option>
                <option
                v-for="(area , idx) of areas"
                :key="area.idx"
                :value="idx">{{area.AreaName}}</option>
            </select>
        </div>
    </div>
</template>
<!------------Cut Line------------>
<script>
    
    export default {
        name:'SelectBox',
        props:{
            'cityidx': {
                type: [String , Number],
                default: 0
            },
            'areaidx': {
                type: [String , Number],
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
    };
</script>
<!------------分離線------------>
<style lang="scss" scoped>
// 根據寬度調整選擇欄的合適程度
    #countryselect,#areaselect{
        height: 30px;
        width: 125px;
    }
    @media screen and (min-width: 576px){
        #countryselect,#areaselect{
            height: 30px;
            width: 95px;
        }
    }
    @media screen and (min-width: 992px){
        #countryselect,#areaselect{
            height: 30px;
            width: 95px;
        }
    }
    @media screen and (min-width: 1200px){
        #countryselect,#areaselect{
            height: 30px;
            width: 125px;
        }
    }
// 選擇欄固定大小
    .topselect {
        background-color: rgba(110, 161, 255, 0.781);
        border-radius: 10px;
        height: 75px;
    }
</style>