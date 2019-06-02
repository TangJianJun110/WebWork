define([
    'vue',
    'text!./helloworld.html',
    'css!./helloworld.css'
], function(vue, HelloworldTempLate) {
    'use strict';
    var helloworld = vue.extend({
        template: HelloworldTempLate,
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    });
    return helloworld;
});