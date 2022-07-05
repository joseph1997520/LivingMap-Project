<template>
    <div class="country col-6 d-flex justify-content-center overflow-hidden py-4">
        <select id="countryselect" class="text-center" v-model="index">
            <option :key="idx" :value="idx" v-for="(country,idx) in TaiwanCountry">{{country.CityName}}</option>
        </select>
    </div>
</template>

<script>

    export default {
        name:'SelectBox',
        props:['TaiwanCountry','value'],
        computed: {
            index:{
                get(){
                    return this.value
                },
                set(val) {
                    this.$emit('input', val)
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    #countryselect{
        height: 30px;
        width: 125px;
    }
</style>