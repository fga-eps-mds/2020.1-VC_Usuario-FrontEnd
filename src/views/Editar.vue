<template>

    <Header/>
        <section>           
            <form @submit.prevent="atualizar">
                <h1>
                    Editar
                </h1>
                <div class="divInputs">
                    <div class="divUser">
                        <input style ="padrao" type="text" placeholder="Nome" required="true" v-model="dados.nome">
                        <input style ="padrao" type="text" placeholder="Email" required="true" v-model="dados.email">
                    </div>

                    <div class="divSenha">
                        <span>
                            <input style="senha" type="password" id="senha" placeholder="Senha" required="true" v-model="dados.password">
                            <input style ="senha" type="password" id="novaSenha" placeholder="Nova Senha" v-model="dados.novaSenha">
                        </span>
                    </div>
                
                </div>

                <div class="divBotaoSalvar">
                    <button type="submit">Salvar</button>
                </div>

                <div class="divBotoes">
                    <button type="button">Mudar senha</button>
                    <button type="button" style=color:red v-on:click="excluirConta">Excluir perfil</button>
                    <button type="button" v-on:click="fazerLogout" >Sair da conta</button>
                </div>
            </form>
        </section>

    <MenuBar/>
    
</template>

<script>
import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {

    name: 'Editar',
    components:{
        Header,
        MenuBar
    },

    setup() {
        const store = useStore()
        const dados = {
            nome: store.getters.getNome,
            email: store.getters.getEmail,
            password: '',
            novaSenha: ''
        }
        const fazerLogout = () => {
            store.commit('CLEAR_USUARIO')
            store.commit('CLEAR_TOKEN')
            window.location.href='http://localhost:8080/'  
        }
        const excluirConta = () => {
            const usuario = {
                id: store.getters.getId,
                password: dados.password
            }
            store.dispatch('deletarUsuarioAction', usuario)
        }
        const atualizar = () => {
            
            const id = computed(() => store.getters.getId)
            store.dispatch('atualizarUsuarioAction', {id, dados})
            
        }

        return { fazerLogout, excluirConta, dados, atualizar }
    },

    created() {
        const token = useStore().getters.getToken
        if(!token){
            window.location.href='http://localhost:8080/login'
        }else {
            useStore().dispatch('validateSessionAction', token)
        }
    } 
}
</script>

<style lang="scss" scoped>
    @import "../assets/stylesheets/pallete.scss";


    section{
        width: 100%;
    }

    form{
    height: auto;
    margin: 0 30px;
    margin-top: 60px;


    & .divInputs{
        width: 100%;
        height: 240px;
        margin-top:  10px;

        & .divUser{
            input{
                width: 100%;
                height: 50px;

                font-size: 14px;
                border-bottom: 1px solid $colorCinza;
                margin-bottom: 10px;
            }
        }
        
        & .divSenha{

            height: 100%;

            input{
                box-shadow: 0 0 0 0;
                margin-bottom: 10px;

                width: 100%;
                height: 50px;

                font-size: 14px;
                border-bottom: 1px solid $colorCinza;
            }

        }
    }

    & .divBotaoSalvar{
        width: 100%;
        height: 50px;
        padding-top: 45px;

        display: flex;

        & button{
            height: 50px;
            width: 100%;

            cursor: pointer;
            font-size: 20px;
            border: none;
            border-radius: 15px;   
            color: $colorBranca;
            background-color: $colorAzul;
        }

        & button:hover{
            background-color: $colorAzulEscuro;
        }
    }

    & .divBotoes{
        width: 100%;
        height: 50px;

        & button{
            height: 50px;
            width: 100%;
            margin-top: 13px;


            cursor: pointer;
            font-size: 20px;
            border-radius: 15px;
            background-color: $colorBranca;
            border: 1px solid $colorCinza;
        }

        & button:hover{
            background-color:$colorCinza;
        }
    }
}
</style>