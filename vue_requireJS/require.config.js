require.config({
    baseUrl: "./", //reqireJS解析的基准路径，define引入的基准根路径
    paths: {
        vue: 'lib/vue/vue',
        vuex: 'lib/vue/vuex',
        vueRouter: 'lib/vue/vue-router',
        iview: 'lib/vue/iview.min',
        axios: 'lib/plugins/axios.min',
        css: 'lib/css',
        text: 'lib/text'
    }
})
require(["index.js"]);