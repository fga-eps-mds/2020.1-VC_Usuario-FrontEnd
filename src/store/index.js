import { createStore, createLogger } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    debug: true,
    plugins: [createLogger(), createPersistedState()],
    state(){
        return {
            usuario: {},
            token: ''
        }        
    },

    mutations: {
        SET_USUARIO(state, payload) {
            if(this.debug){
                console.log('Novo usuário: ', payload)
            }
    
            state.usuario = payload;
        },

        SET_TOKEN(state, payload) {
            if(this.debug){
                console.log('Token: ', payload)
            }
    
            state.token = payload;
        },

        CLEAR_USUARIO(state){
            if(this.debug){
                console.log('Ok usuário')
            }
    
            state.usuario = {}
        },

        CLEAR_TOKEN(state){
            if(this.debug){
                console.log('Ok token')
            }
    
            state.token = ''
        },
    },

    actions: {
        loginAction(){},
        logoutAction(){},
        validateSessionAction(){}
    },

    getters: {
        getNome(state) {
            return state.usuario.user_name;
        }        
    }     
})

export default store ;