import { createStore, createLogger } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    debug: true,
    plugins: [createLogger(), createPersistedState()],
    state(){
        return {
            usuario: {},
            token: {}
        }        
    },

    mutations: {
        SET_USUARIO(state, payload) {
            if(this.debug){
                console.log('Novo nome: ', payload)
            }
    
            state.usuario = payload;
        },

    },

    actions: {
        
    
        setTokenAction(token) {
            if(this.debug){
                console.log('Token: ', token)
            }
    
            this.state.token = token;
        },
    
        clearNomeAction() {
            if(this.debug){
                console.log('Nome limpo')
            }
    
            this.state.nome = ''
        },
    },

    getters: {
        getNome(state) {
            return state.usuario.user_name;
        }        
    }     
})

export default store ;