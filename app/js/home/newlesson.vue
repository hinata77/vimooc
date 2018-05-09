<template lang="html">
    <Panel :class="$style.panel" title="新上好课">
        <ul slot="card">
            <Card v-for="card in cards" :key="card.title" :style="card.style" :class="$style.card" :title="card.title" :content="card.content" :rate="card.rate" :num="card.num"/>
        </ul>
        <Lslider :lines="lines" :cname="$style.slider" :pname="$style.pagination">
            <ul slot="lines">
                <Lines v-for="line in lines" :key="line.id" :class="$style.line" :title="line.title" :level="line.level" :num="line.num" :price="line.price" :src="line.src"/>
            </ul>
        </Lslider>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import Card from "../core/card.vue"
import Lines from "../core/lines.vue"
import Lslider from "../core/lslider.vue"

export default {
    components: {
        Panel,
        Card,
        Lines,
        Lslider,
    },
    data() {
        return {
            cards: [
                {
                    title: "Java",
                    content: "Spring Cloud微服务实战",
                    rate: "￥366.00",
                    num: 709,
                    style: {
                        boxShadow: "0 4px 16px 0 #ff4545",
                        background: "#ff4545 url(//img2.mukewang.com/59c8953300012e3602400240.jpg)",
                    },
                },
                {
                    title: "Java",
                    content: "SpringBoot开发理财产品系统",
                    rate: "￥299.00",
                    num: 33,
                    style: {
                        boxShadow: "0 4px 16px 0 #ff4545",
                        background: "#ff4545 url(//img2.mukewang.com/59c8953300012e3602400240.jpg)",
                    },
                },
            ],
            lines: [
                {
                    arr: [
                        {
                            id: "1",
                            title: "推荐算法理论与实践",
                            level: "中级",
                            num: 646,
                            price: "免费",
                            src: "//img2.mukewang.com/5aeecb1d0001e5ea06000338-590-330.jpg",
                        },
                        {
                            id: "2",
                            title: "Spring Cloud微服务实战",
                            level: "高级",
                            num: 731,
                            price: "￥366.00",
                            src: "//img1.sycdn.imooc.com/szimg/5a9ca4e80001786305400300-360-202.jpg",
                        },
                        {
                            id: "3",
                            title: "Java并发编程与高并发解决方案",
                            level: "中级",
                            num: 1254,
                            price: "￥299.00",
                            src: "//img1.sycdn.imooc.com/szimg/5aaa55850001a3ef10800600-360-202.jpg",
                        },
                    ],
                },

                {
                    arr: [
                        {
                            id: "4",
                            title: "Python3入门机器学习 经典算法与应用",
                            level: "中级",
                            num: 905,
                            price: "￥399.00",
                            src: "//img1.sycdn.imooc.com/szimg/5a39cd3f0001c09805400300-360-202.jpg",
                        },
                        {
                            id: "5",
                            title: "Android UiAutomator 2.0 入门实战",
                            level: "入门",
                            num: 2654,
                            price: "免费",
                            src: "//img4.mukewang.com/5adecab10001991306000338-590-330.jpg",
                        },
                        {
                            id: "6",
                            title: "韩天峰力荐 Swoole入门到实战打造高性能赛事直播平台",
                            level: "中级",
                            num: 365,
                            price: "￥299.00",
                            src: "//img1.sycdn.imooc.com/szimg/5ab0fd1400010d7d10800600-360-202.jpg",
                        },
                    ],
                },
            ],
        }
    },

}
</script>

<style lang="scss" module>
.panel{

    >h4{
        i{
            background: url(https://m.imooc.com/static/wap/static/img/index_icon.png) no-repeat;
            background-position: center 0;
        }
    }
}
</style>
