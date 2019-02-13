import Vue from 'vue'

export default {
    namespaced: true,
    state () {
        return {
            data: {
                name: 'Семён'
            }
        }
    },
    mutations: {
        setProp (state, props) {
            Vue.set(state, 'data', Object.assign({}, state.data, props))
        }
    }
}