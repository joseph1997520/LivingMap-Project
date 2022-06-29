<template>
    <div class="col-3 searchbox position-relative">
        <div class="col-12 d-flex topselect">
            <div class="country col-6 d-flex justify-content-center overflow-hidden py-4">
                <select name="country" id="countryselect" class="text-center">
                    <option value="country" selected hidden>請選擇縣市</option>
                    <option value="country"></option>
                </select>
            </div>
            <div class="area col-6 d-flex justify-content-center overflow-hidden py-4">
                <select name="area" id="areaselect" class="text-center">
                    <option value="country" selected hidden>請選擇行政區</option>
                    <option value="area"></option>
                </select>
            </div>
        </div>
        <div class="col-12">
            <ul class="list-group">
                <li class="list-group-item">
                    <h2 class="text-center">ＸＸ民宿</h2>
                    <p>地址：123456</p>
                    <p>聯絡電話：07-7426037</p>
                </li>
                <li class="list-group-item">
                    <h2 class="text-center ">ＯＯ大飯店</h2>
                    <p>地址：456789</p>
                    <p>聯絡電話：0900-255-978</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
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
    #countryselect , #areaselect {
        height: 30px;
        width: 125px;
    }
</style>