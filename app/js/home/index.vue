<template lang="html">
    <div>
        <Headers/>
        <Navbar/>
        <Slider/>
        <Recommend/>
        <Newlesson/>
    </div>
</template>

<script>
import Headers from "../public/header.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./hslider.vue"
import Recommend from "./recommend.vue"
import Newlesson from "./newlesson.vue"

export default {
    components: {
        Headers,
        Navbar,
        Slider,
        Recommend,
        Newlesson,
    },
}
</script>

<style lang="scss" module>

</style>
