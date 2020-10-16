import { reactive } from 'vue';

export const store = {
    debug: true,
    state: reactive({
        usuario: {},
        token: {}
    }),

    setUsuarioAction(novoUsuario) {
        if(this.debug){
            console.log('Novo nome: ', novoUsuario)
        }

        this.state.usuario = novoUsuario;
    },

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

    getNome() {
        return this.state.usuario.user_name;
    }
}

export {store as default};