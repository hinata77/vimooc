<template lang="html">
    <div :class="$style.header">
        <span :class="$style.search"/>
        <router-link :to="{ name: '' }"><img src="./touxiang.jpg" alt=""></router-link>
        <btn :class="$style.btnDownload">下载客户端</btn>
    </div>
</template>

<script>
import btn from "../core/btn.vue"

export default {
    components: {
        btn,
    },
}
</script>

<style lang="scss" module>
.header{
    background: #fff url("./logo.png") no-repeat 30px 20px;
    background-size: auto;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 15px;
    z-index: 100;
    height: 80px;
    line-height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    border-bottom: 2px solid rgba(7,17,27,.1);
    box-shadow: 0 0 10px 2px rgba(7,17,27,.1);
    .search{
        position: relative;
        left: 50%;
        top: 5px;
        margin-right: 20px;
        width: 40px;
        height: 40px;
        background: #ccc;
        background-size: 40px 40px;
        float: left;
        border-radius: 20px;
    }
    img{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        position: relative;
        left: 50%;
        top: -8px;
    }
    .btnDownload{
        padding: 0 15px;
        font-size: 20px;
        float: right;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        border: 2px solid #71777D;
        color: #71777D;
    }
}
</style>
