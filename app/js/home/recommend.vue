<template lang="html">
    <Panel :class="$style.panel" title="实战推荐" more="更多实战">
        <ul slot="card">
            <Card v-for="card in cards" :key="card.title" :style="card.style" :class="$style.card" :title="card.title" :content="card.content" :rate="card.rate" :num="card.num"/>
        </ul>
        <ul slot="lines">
            <Lines v-for="line in lines" :key="line.id" :class="$style.line" :title="line.title" :level="line.level" :num="line.num" :price="line.price" :src="line.src"/>
        </ul>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import Card from "../core/card.vue"
import Lines from "../core/lines.vue"

export default {
    components: {
        Panel,
        Card,
        Lines,
    },
    data() {
        return {
            cards: [
                {
                    title: "Python",
                    content: "全网最热Python3入门+进阶 更快上手实际开发",
                    rate: "￥366.00",
                    num: 4045,
                    style: {
                        boxShadow: "0 4px 16px 0 #0070bb",
                        background: "#0070bb url(//img.mukewang.com/59c896b50001942802400240.jpg)",
                    },
                }, {
                    title: "Java",
                    content: "玩转数据结构 从入门到进阶",
                    rate: "￥299.00",
                    num: 471,
                    style: {
                        boxShadow: "0 4px 16px 0 #ff4545",
                        background: "#ff4545 url(//img3.mukewang.com/59c8953300012e3602400240.jpg)",
                    },
                },
            ],
            lines: [
                {
                    id: "1",
                    title: "Java企业级电商项目架构演进之路  Tomcat集群与Redis分布式",
                    level: "高级",
                    num: 1076,
                    price: "￥399.00",
                    src: "//img1.sycdn.imooc.com/szimg/5a16336900014ca405400300-360-202.jpg",
                },
                {
                    id: "2",
                    title: "React Native技术精讲与高质量上线APP开发",
                    level: "中级",
                    num: 894,
                    price: "￥399.00",
                    src: "//img1.sycdn.imooc.com/szimg/5adfe05e00012ecd05400300-360-202.jpg",
                },
                {
                    id: "3",
                    title: "Vue2.5开发去哪儿网App 从零基础入门到实战项目",
                    level: "中级",
                    num: 787,
                    price: "￥266.00",
                    src: "//img1.sycdn.imooc.com/szimg/5ac2dfe100014a9005400300-360-202.jpg",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
.panel{
    background-color: #f3f5f7!important;
    >h4{
        i{
            background: url(https://m.imooc.com/static/wap/static/img/index_icon.png) no-repeat;
            background-position: center -30px;
        }
    }
}
ul{
    padding-bottom: 20px;
}
</style>
