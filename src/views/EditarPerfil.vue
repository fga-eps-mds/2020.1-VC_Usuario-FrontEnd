<template>

    <Header/>

    <section>           
        <form @submit.prevent="checkCampos">

            <h1>Editar Conta</h1>

            <div class="divInputs">
                <input type="text" placeholder="Nome" v-model="dados.nome" required="true">
                <input type="email" placeholder="Email" v-model="dados.email" required="true">            
            </div>

            <div class="divBotoes">
                <button type="submit">Salvar</button>
                <button type="button" class="buttonBasico" v-on:click="cancelarEdicao">Cancelar</button>
                <button type="button" class="buttonBasico" @click="modalSenhaNovaSenha = !modalSenhaNovaSenha">Mudar senha</button>
                <button type="button" class="buttonExcluir" @click="modalAlerta = !modalAlerta">Excluir perfil</button>
                <button type="button" class="buttonBasico" v-on:click="fazerLogout">Sair da conta</button>
            </div>
        </form>
    </section>

    <!-- Modais: -->
    <div class="modal" v-if="modalAlerta">
        <div class="divConteudoModal">
            <p>Deseja realmente excluir sua conta?</p>

            <div class="divBotoesModal">
                <button type="button" class="buttonBasico" @click="modalAlerta = false">Cancelar</button>
                <button type="button" class="buttonExcluir" @click="modalSenha = !modalSenha, modalAlerta = false">Continuar</button>
            </div>
        </div>
    </div>

    <div class="modal" v-if="modalSenha">
        <div class="divConteudoModalSenha">
            <div class="textoDeSenha">
                <p>Digite sua senha</p>

                <input type="password" id="senha" placeholder="Senha" required="true" v-model="dados.password">
            </div>

            <div class="divBotoesModal">
                <button type="button" class="buttonBasico" @click="modalSenha = false">Cancelar</button>
                <button type="button" class="buttonAcao" @click="excluirConta">Continuar</button>
            </div>
        </div>
    </div>

    <div class="modal" v-if="modalSenhaSalvar">
        <div class="divConteudoModalSenha">
            <div class="textoDeSenha">
                <p>Digite sua senha</p>

                <input type="password" id="senha" placeholder="Senha" required="true" v-model="dados.password">
            </div>

            <div class="divBotoesModal">
                <button type="button" class="buttonBasico" @click="modalSenhaSalvar = false">Cancelar</button>
                <button type="button" class="buttonAcao" @click="atualizarDados">Continuar</button>
            </div>
        </div>
    </div>

    <div class="modal" v-if="modalSenhaNovaSenha">
        <form class="divConteudoModalSenha" @submit.prevent="mudarSenha">
            <div class="textoDeSenha">
                <p>Preencha os campos</p>

                <input type="password" id="senha" placeholder="Senha" v-model="dados.password" required="true">
                <input type="password" id="novaSenha" placeholder="Nova Senha" v-model="dados.novaSenha" required="true">
            </div>

            <div class="divBotoesModal">
                <button type="button" class="buttonBasico" @click="modalSenhaNovaSenha = false">Cancelar</button>
                <button type="submit" class="buttonAcao" >Continuar</button>
            </div>
        </form>
    </div>

    <MenuBar/>
    
</template>

<script>
import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {

    name: 'Editar',
    components:{
        Header,
        MenuBar
    },

    setup() {
        const store = useStore()
        const dados = {
            id: store.getters.getId,
            nome: store.getters.getNome,
            email: store.getters.getEmail,
            password: '',
            novaSenha: ''
        }

        const cancelarEdicao = () => {
            window.location.href='perfil'  
        }

        const fazerLogout = () => {
            store.commit('CLEAR_USUARIO')
            store.commit('CLEAR_TOKEN')
            window.location.href=''  
        }

        const checkCampos = () => {
            if (dados.nome.trim() === store.getters.getNome && dados.email.trim() === store.getters.getEmail){
                alert('Campos inalterados')
            }else{
                modalSenhaSalvar.value = true
            }
        }

        const validarSessao = async () => {
            await store.dispatch('validateSessionAction', store.getters.getToken)
            const login = {
                email: store.getters.getEmail,
                password: dados.password
            }
            if(await store.dispatch('loginAction', login)){
                modalSenhaSalvar.value = false
                modalSenha.value = false
                modalSenhaNovaSenha.value = false
                return true
            }else{
                return false
            }
        }

        const excluirConta = async () => {            
            if(await validarSessao()){
                store.dispatch('deletarUsuarioAction', dados.id)
            }
        }

        const atualizarDados = async() => {
            if(await validarSessao()){
                const usuario = {
                    data: {
                        email: dados.email.trim(),
                        nome: dados.nome.trim()
                    },
                    id: dados.id
                }
                store.dispatch('atualizarUsuarioAction', usuario)
            }
        }

        const mudarSenha = async () => {
            if(await validarSessao()){
                const data = {
                    id: dados.id,
                    password:{
                        novaSenha: dados.novaSenha
                    } 
                }

                store.dispatch('mudarSenhaAction', data)
            }
        }
        const modalAlerta = ref(false)
        const modalSenha = ref(false)
        const modalSenhaSalvar = ref(false)
        const modalSenhaNovaSenha = ref(false)

        return { 
            cancelarEdicao,
            fazerLogout, 
            excluirConta, 
            dados, 
            atualizarDados, 
            modalAlerta, 
            modalSenha, 
            modalSenhaNovaSenha, 
            modalSenhaSalvar,
            validarSessao, 
            checkCampos,
            mudarSenha
        }
    },

    created() {
        const token = useStore().getters.getToken
        if(!token){
            window.location.href='login'
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
        height: auto;
        display: flex;
        padding-bottom: 100px;
    }

    form{
        height: auto;
        width: 100%;
        margin: 0 30px;
        min-width: 200px;
        margin-top: 65px;

        & h1{
            color: $colorAzulEscuro;
        }
    }

    .divInputs{
        width: 100%;
        margin-top: 20px;

        & input{
            width: 100%;
            height: 50px;
            margin-bottom: 20px;

            font-size: 18px;
            border-bottom: 1px solid $colorCinza; 
        }
    }

    .divBotoes{
        display: flex;
        flex-direction: column;

        & button{
            height: 50px;
            width: 100%;
            margin-bottom: 20px;

            cursor: pointer;
            font-size: 20px;
            border-radius: 25px;
            border: 1px solid $colorCinza;
        }

        & button:first-child{
            border: none;
            background-color: $colorAzul;
            color: $colorBranca;
        }

        & button:first-child:hover{
            background-color:$colorAzulEscuro;
        }

        & button:last-child{
            margin-bottom: 0px;
        }
    }

    .modal{
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;

        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        background-color: rgba(0,0,0,.7);
        
        & p{
            font-size: 20px;
            color:  $colorAzulEscuro;
            margin-bottom: 20px;
        }
    }

    .divConteudoModal{
        width: 80%;
        height: auto;
        margin: auto;
        padding: 20px;

        text-align: center;

        border-radius: 15px;
        background-color: $colorBranca;
    }

    .divConteudoModalSenha{
        width: 80%;
        height: auto;
        margin: auto;
        padding: 20px;

        text-align: center;

        border-radius: 15px;
        background-color: $colorBranca;
    }

    .textoDeSenha{
        input{
            width: 100%;
            height: 50px;
            margin-bottom: 20px;

            font-size: 18px;
            border-bottom: 1px solid $colorCinza;
        }
    } 

    .divBotoesModal{
        width: 100%;

        display: flex;
        flex-direction: column;

        & button{
            height: 50px;
            width: 100%;

            cursor: pointer;
            font-size: 20px;
            border-radius: 25px;   
        }

        & button:first-child{
            margin-bottom: 20px;
        }
    }

    .buttonBasico{
        color: #000000;
        background-color: $colorBranca;
        border: 1px solid $colorCinza;
    }

    .buttonBasico:hover{
        background-color:$colorCinza;
    }
    
    .buttonExcluir{
        color: $colorVermelho;
        background-color: $colorBranca;
        border: 1px solid $colorCinza;
    }

    .buttonExcluir:hover{
        border: none;
        color: $colorBranca;
        background-color: $colorVermelho;
    }

    .buttonAcao{
        color: $colorBranca;
        background-color: $colorAzul;
    }

    .buttonAcao:hover{
        border: none;
        color: $colorBranca;
        background-color: $colorAzulEscuro;
    }
</style>