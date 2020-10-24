import { createStore, createLogger } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import Usuarios from '@/services/usuarios.js'

const store = createStore({
    debug: true,
    plugins: [createLogger(), createPersistedState()],
    state(){
        return {
            usuario: {},
            token: '',
            swapPerfilLogin: false
        }        
    },

    mutations: {
        SET_SWAP(state, payload){
            if(this.debug){
                console.log('Swap: ', payload)
            }
    
            state.swapPerfilLogin = payload;
        },
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
        async loginAction({commit}, login){
            await Usuarios.Login(login).then(response => {
                commit('SET_USUARIO', response.data.user)
                commit('SET_TOKEN', response.data.token)
                window.location.href='http://localhost:8080/perfil'
            }, erro => {
                alert(erro.response.data.msg)
            })
        },

        async validateSessionAction({commit}, payload){
            await Usuarios.Validar(payload).then(response => {
                commit('SET_TOKEN', response.data.new_token)
            }, erro => {
                console.log('com err')
                console.log(erro.response.data.msg)
                window.location.href='http://localhost:8080/login'
            }) 
        },

        async deletarUsuarioAction({commit}, payload){
            await Usuarios.DeletarContaUsuario(payload).then(response => {
                commit('CLEAR_USUARIO')
                commit('CLEAR_TOKEN')
                console.log(response.data.msg)
                window.location.href='http://localhost:8080'
            }, erro => {
                console.log(erro.response.data.msg)
            })
        }
    },

    getters: {
        getNome(state) {
            return state.usuario.user_name;
        },

        getId(state) {
            return state.usuario._id
        },

        getToken(state) {
            if (state.token){
                return state.token
            }

            return null
        },

        getSwap(state) {
            return state.swapPerfilLogin
        }

    }     
})

export default store ;