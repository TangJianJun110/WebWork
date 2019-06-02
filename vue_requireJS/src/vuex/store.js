define([
    'vue',
    'vuex',
    './modules/login'
], function(vue, vuex, login) {
    'use strict';
    vue.use(vuex);
    var store = new vuex.Store({
        modules: {
            login
        },
        strict: true,
        middlewares: [vuex.createLogger]
    });
    return store;
});