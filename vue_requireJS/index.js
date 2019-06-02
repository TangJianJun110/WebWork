define([
    "vue",
    "iview",
    "axios",
    "./src/router/router",
    "./src/vuex/store",
    "css!./assets/main.css"
], function(vue, iview, axios, router, store) {
    vue.use(iview);
    vue.$axios = axios;
    new vue({
        el: "#root",
        router: router,
        store: store
    })
});