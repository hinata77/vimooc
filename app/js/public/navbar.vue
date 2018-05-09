<template lang="html">
    <Panel :class="$style.panel" title="导航条">
        <ul :class="$style.content">
            <li>
                <router-link :to="{ name: 'home' }">
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'course' }">
                    <p>课程</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'class' }">
                    <p>路径</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'coding' }">
                    <p>实战</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'article' }">
                    <p>手记</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'wenda' }">
                    <p>猿问</p>
                </router-link>
            </li>
        </ul>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"

export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    position: fixed;
    top: 79px;
    left: 0;
    right: 0;
    height: 70px;
    line-height: 70px;
    z-index: 99;
    >h4{
        display: none;
    }
    .content{
        padding-right: 38px;

        @include flex(row);
        justify-content: space-around;
        li{

            text-align: center;
            a{
                text-decoration: none;
                font-size: 22px;
                color: #71777D;
            }
        }
    }
}
</style>
