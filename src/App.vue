<template>
    <div>
        <div class="col-3 searchbox position-relative">
            <div class="col-12 d-flex topselect">
                <select-box></select-box>
            </div>
        </div>
        <Map></Map>
    </div>
</template>

<script>
    import SelectBox from '@/components/SelectBox.vue';
    import Map from '@/views/Map.vue';
    
    export default {
        name:'App',
        components: {
            SelectBox,
            Map,
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