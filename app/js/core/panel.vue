<template lang="html">
    <section :class="[panelClass,cname]">
        <h4><i/>{{ title }}<span>{{ more }} <em/></span></h4>
        <slot name="card"/>
        <slot name="slider"/>
        <slot name="lines"/>
        <slot/>
    </section>
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
        more: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            panelClass: "panel",
        }
    },
}
</script>

<style lang="scss">
@import "../../css/element.scss";
.panel{
    @include panel;
}
</style>
