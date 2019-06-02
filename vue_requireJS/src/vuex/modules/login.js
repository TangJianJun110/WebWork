define(function(require) {
    var state = {
        username: null,
        IsLogin: false,
    }
    var mutations = {
        LoginStatesChange: function(state, islogin) {
            state.IsLogin = islogin;
        },
        RecordLoginInfo: function(state, username) {
            state.username = username;
        }
    }
    var actions = {
        LoginStatesChange: function(context, islogin) {
            context.commit('LoginStatesChange', islogin)
        },
        RecordLoginInfo: function(context, username) {
            context.commit('RecordLoginInfo', username)
        }
    }
    var getters = {
        getLoginInfo: function(state) {
            return state.username;
        },
        getLoginStates: function(state) {
            return state.IsLogin;
        }
    }
    return {
        state: state,
        mutations: mutations,
        actions: actions,
        getters: getters
    }
});