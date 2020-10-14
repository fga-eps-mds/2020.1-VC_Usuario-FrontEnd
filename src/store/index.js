import { reactive } from 'vue';

export const store = {
    debug: true,
    state: reactive({
        nome: 'Daniel Porto de Souza',
        token: ''
    }),

    setNomeAction(novoNome) {
        if(this.debug){
            console.log('Novo nome: ', novoNome)
        }

        this.state.nome = novoNome;
    },

    clearNomeAction() {
        if(this.debug){
            console.log('Nome limpo')
        }

        this.state.nome = ''
    },

    getNome() {
        return this.state.nome;
    }
}

export {store as default};