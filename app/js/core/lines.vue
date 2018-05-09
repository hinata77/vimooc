<template lang="html">
    <li :class="[lineClass,cname]">
        <img :src="[src]">
        <div>
            <p>{{ title }}</p>
            <span>{{ level }}&nbsp;·&nbsp;{{ num }}人在学</span>
            <i>{{ price }}</i>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        level: {
            type: String,
            default: "",
        },
        num: {
            type: Number,
            default: 0,
        },
        price: {
            type: String,
            default: "",
        },
        src: {
            type: String,
            default: "",
        },
        alt: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            lineClass: "line",
        }
    },
}
</script>

<style lang="scss">
@import "../../css/element.scss";
.line{
    @include line;
}
</style>
