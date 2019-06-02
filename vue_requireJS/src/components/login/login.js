define([
    'vue',
    'text!./login.html',
    'css!./login.css'
], function(vue, LoginTempLate) {
    'use strict';
    var login = vue.extend({
        template: LoginTempLate,
        data() {
            return {
                username: null,
                password: null,
                logtipmsg: "",
                logtipmsgShow: false
            }
        },
        mounted() {
            this.logtipmsgShow = false;
        },
        methods: {
            login() {
                if (this.username == "admin" && this.password == "123456") {
                    this.$store.commit('LoginStatesChange', true)
                    this.$router.push("helloworld");
                } else {
                    this.logtipmsg = "用户名或者密码错误";
                    this.logtipmsgShow = true;
                }
            }
        }
    });
    return login;
});