<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-text-tick="options.notNextTick">
            <swiper-slide v-for="line in lines" :key="line.id">
                <slot name="lines"/>
            </swiper-slide>
            <div slot="scrollbar" class="swiper-scrollbar"/>
        </swiper>
    </section>
</template>

<script>

import { swiper, swiperSlide } from "vue-awesome-swiper"

export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        pname: {
            type: String,
            default: "",
        },
        options: {
            type: Object,
            default() {
                return {
                    swiperOption: {
                        scrollbar: {
                            el: ".swiper-scrollbar",
                            hide: false,
                        },
                    },
                }
            },
        },
        lines: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>

<style lang="scss">
@import "~swiper/dist/css/swiper.css";
</style>
