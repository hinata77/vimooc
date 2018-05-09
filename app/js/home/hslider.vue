<template lang="html">
    <Slider :items="items" :cname="$style.slider" :pname="$style.pagination"/>
</template>

<script>
import Slider from "../core/slider.vue"

export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                href: "/1",
                src: "//img1.mukewang.com/szimg/5abc64d80001dd2c09000300.jpg",
            }, {
                href: "/2",
                src: "//img4.mukewang.com/szimg/5ade9a3c00013ac909000300.jpg",
            }, {
                href: "/3",
                src: "//img4.mukewang.com/szimg/5abc645c0001574309000300.jpg",
            }, {
                href: "/4",
                src: "//img3.mukewang.com/szimg/5ad40c020001c92509000300.jpg",
            }, {
                href: "/5",
                src: "//img3.mukewang.com/szimg/5ae146e50001207209000300.jpg",
            }, {
                href: "/6",
                src: "//img4.mukewang.com/szimg/5ac316be0001e87609000300.jpg",
            }],
        }
    },
}
</script>

<style lang="scss" module>
.slider{
    background-color: #f3f5f7!important;
    margin-top: 150px;
    img{
        margin-left: 0.5%;
        width: 99%;
        border-radius: 11px;
    }
}
.pagination{
    span{
        width: 12px;
        height: 12px;
        margin: 0 8px;
    }
}
</style>
