//import Usuarios from '@/usuarios.js'
import Vue from "vue";
import Vuex from "vuex";

Vue.use (Vuex);

const store = new Vuex.Store({

    state: {
            user_name: "Pedro"
    }, 
    mutations: {
        setUsuarioAtual(state, payload){
            state.usuarioAtual = payload;
            state.token
        }
    },
    actions: {
       // export const ActionDoLogin =           }

    },
    getters: {
        getUsuarioAtual: state => state.usuarioAtual
    },

});
export {store}