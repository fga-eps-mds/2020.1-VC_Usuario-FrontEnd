<template>

    <Header/>

        <div class="modal" v-if="modalAlerta">
            <div class="conteudoModal">
                <div class="textAndButton">
                    <div class="textoDeAlerta">
                        <p>Deseja realmente excluir sua conta?</p>
                        <br/><br/>
                    </div>
                    <div class="divBotoesModal">
                        <button type="button" @click="modalAlerta = false">Cancelar</button>
                        <button type="button" @click="modalSenha = !modalSenha, modalAlerta = false">Continuar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" v-if="modalSenha">
            <div class="conteudoModal">
                <div class="textoDeSenha">
                    <p>Digite sua senha</p>
                    <input style="senha" type="password" id="senha" placeholder="Senha" required="true" v-model="dados.password">
                </div>
                    <div class="divBotoesModal">
                        <button type="button" @click="modalSenha = false">Cancelar</button>
                        <button type="button" @click="excluirConta">Continuar</button>
                    </div>
            </div>
        </div>

        <div class="modal" v-if="modalSenhaNovaSenha">
            <div class="conteudoModal">
                <div class="textoDeSenha">
                    <p>Preencha os campos</p>
                    <input style="senha" type="password" id="senha" placeholder="Senha" required="true" v-model="dados.password">
                    <input style ="senha" type="password" id="novaSenha" placeholder="Nova Senha" v-model="dados.novaSenha">
                </div>
                    <div class="divBotoesModal">
                        <button type="button" @click="modalSenhaNovaSenha = false">Cancelar</button>
                        <button type="button">Continuar</button>
                    </div>
            </div>
        </div>

        <section>           
            <form @submit.prevent="">
                <h1>
                    Editar
                </h1>
                <div class="divInputs">
                    <div class="divUser">
                        <input style ="padrao" type="text" placeholder="Nome" required="true" v-model="dados.nome">
                        <input style ="padrao" type="text" placeholder="Email" required="true" v-model="dados.email">
                    </div>

                    <!-- <div class="divSenha">
                        <span>
                            <input style="senha" type="password" id="senha" placeholder="Senha" required="true" v-model="dados.password">
                            <input style ="senha" type="password" id="novaSenha" placeholder="Nova Senha" v-model="dados.novaSenha">
                        </span>
                    </div> -->
                
                </div>

                <div class="divBotaoSalvar">
                    <button>Salvar</button>
                </div>

                <div class="divBotoes">
                    <button type="button" @click="modalSenhaNovaSenha = !modalSenhaNovaSenha">Mudar senha</button>
                    <button type="button" style=color:red @click="modalAlerta = !modalAlerta">Excluir perfil</button>
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
        const fazerLogout = () => {
            store.commit('CLEAR_USUARIO')
            store.commit('CLEAR_TOKEN')
            window.location.href='http://localhost:8080/'  
        }
        const excluirConta = async () => {
            store.dispatch('validateSessionAction', store.getters.getToken)
            const login = {
                email: dados.email,
                password: dados.password
            }
            if(await store.dispatch('loginAction', login)){
                modalSenha.value = false
                store.dispatch('deletarUsuarioAction', dados.id)
            }
        }
        const modalAlerta = ref(false)
        const modalSenha = ref(false)
        const modalSenhaNovaSenha = ref(false)

        return { fazerLogout, excluirConta, dados, /* atualizarDados, */ modalAlerta, modalSenha, modalSenhaNovaSenha }
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

    .modal {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.7);
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        & .conteudoModal{
            position: absolute;
            background: $colorBranca;
            border-radius: 15px;
            width: 80%;
            height: 150px;
            text-align: center;

            & .textoDeSenha{
                margin: 0 30px;
                input{
                    width: 100%;
                    height: 35px;
                    font-size: 14px;
                    border-bottom: 1px solid $colorCinza;
                }
            } 
        }

        & .divBotoesModal{
            width: 100%;
            height: 50px;
            padding-top: 20px;
            display: flex;
            justify-content: space-evenly;

            & .divInputSenha{

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

            & button{
                bottom: 20px;
                height: 25px;
                width: 30%;

                cursor: pointer;
                font-size: 13px;
                border: none;
                border-radius: 15px;   
                color: $colorBranca;
                background-color: $colorAzul;
            }

            & button:hover{
                background-color: $colorAzulEscuro;
            }
        }

        & .textAndButton{
            padding-top: 30px;
        }

        & .textoDeAlerta{
            font-size: 15px;
        }
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