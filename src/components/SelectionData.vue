<template>
        <!-- 篩選後資料 -->
        <div class="col-12">
            <ul class="list-group">
                <li class="list-group-item">
                    <h2 class="text-center">ＸＸ民宿</h2>
                    <p>地址：123456</p>
                    <p>聯絡電話：07-7426037</p>
                </li>
                <li class="list-group-item">
                    <h2 class="text-center">ＯＯ大飯店</h2>
                    <p>地址：456789</p>
                    <p>聯絡電話：0900-255-978</p>
                </li>
            </ul>
        </div>
</template>

<script>
    import countryList from '@/assets/data.json'

    export default {
    name:'SelectionData',
    props:[],
    data() {
        return {
            TaiwanCity:countryList,
        };
    },
    };
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
    #countryselect , #areaselect {
        height: 30px;
        width: 125px;
    }
</style>