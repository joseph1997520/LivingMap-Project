<template>
        <!-- 篩選後資料 -->
        <div class="col-12">
            <ul class="list-group listdata">
                <li class="list-group-item">
                    <h2 class="text-center">132213</h2>
                    <p>地址：123456</p>
                    <p>聯絡電話：07-7426037</p>
                </li>
                <li class="list-group-item">
                    <h2 class="text-center">132213</h2>
                    <p>地址：123456</p>
                    <p>聯絡電話：07-7426037</p>
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
    name:'SelectionData',
    props: {
        'livedata': {
            type: Array,
            default: () => []
        }
    },
    };
</script>

<style lang="scss" scoped>
    .searchbox {
        z-index: 1000;
    }
    .topselect {
        background-color: rgba(110, 161, 255, 0.781);
        border-radius: 10px;
    }
    #countryselect , #areaselect {
        height: 30px;
        width: 125px;
    }
    .listdata {
        overflow-y: auto;
        max-height: calc(100vh - 75px);
    }
</style>