import Vue from "vue"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false

const vm = new Vue({
    el: "#app",
    router,
    components: {
        App,
    },
    template: "<App></App>",
})
Vue.use({
    vm,
})
