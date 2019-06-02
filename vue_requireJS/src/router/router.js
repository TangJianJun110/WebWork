define([
    'vue',
    'vueRouter',
    '../components/login/login',
    '../components/helloworld/helloworld'
], function(vue, vueRouter, login, helloworld) {
    'use strict';
    vue.use(vueRouter);
    var router = new vueRouter({
        routes: [
            { path: '/', name: "login", component: login }, //默认路由
            { path: '/helloworld', name: "helloworld", component: helloworld }
        ]
    });
    return router;
});