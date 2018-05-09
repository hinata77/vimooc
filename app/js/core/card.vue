<template lang="html">
    <li :class="[cardClass,cname]">
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
        <span>{{ rate }}&nbsp;&nbsp;&nbsp;&nbsp;<i/>{{ num }}</span>
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
        content: {
            type: String,
            default: "",
        },
        rate: {
            type: String,
            default: "",
        },
        num: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            cardClass: "card",
        }
    },
}
</script>

<style lang="scss">
@import "../../css/element.scss";
.card{
    @include card;
}
</style>
