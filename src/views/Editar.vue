<template>

    <Header/>
        <section>
             <div class="main">
                <h1>
                    Editar
                </h1>
           
            <form @submit.prevent="">
                    <div class="divInputs">
                        <div class="divUser">
                            <input style ="padrao" type="text" name="" placeholder="Nome">
                            <input style ="padrao" type="text" name="" placeholder="Email">
                        </div>

                        <div class="divSenha">
                            <span>
                                <input style="senha" type="password" id="senha" name="" placeholder="Senha">
                                <input style ="senha" type="password" id="novaSenha" name="" placeholder="Nova Senha">
                            </span>
                        </div>
                    
                    </div>

                    <div class="divBotaoSalvar">
                        <button type="button" onclick="window.location.href='http://localhost:8080/Perfil'">Salvar</button>
                    </div>

                    <div class="divBotoes">
                        <button type="button" v-on:click="fazerLogout" >Sair</button>
                        <button type="button">Mudar senha</button>
                        <button type=button>Excluir perfil</button>
                        <button type=button>Sair da conta</button>
                     </div>
                </form>
                </div>
            </section>

    <MenuBar/>
    
</template>

<script>
import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import { useStore } from 'vuex'

export default {

    name: 'Editar',
    components:{
        Header,
        MenuBar
    },
    setup(){
        const store = useStore()
        const fazerLogout = () => {
            store.commit('CLEAR_USUARIO')
            store.commit('CLEAR_TOKEN')
            window.location.href='http://localhost:8080/'  
        }

        return { fazerLogout }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/stylesheets/pallete.scss";


    section{
        width: 100%;
        height: 100%;
        display: flex;
    }

    .main {
        margin-top: 60px;
    }

    button {
        margin-left: 10px;
    }

       form{
        height: 310px;

        & .divInputs{
            width: 100%;
            height: 240px;
            margin-top:50px;

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
                    border: 0 none;
                    outline: 0;

                    display: block;

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

            display: flex;

            & button{
                height: 50px;
                width: 100%;

                cursor: pointer;
                font-size: 20px;
                border: none;
                border-radius: 25px;   
                color: #ffffff;
                background-color: $colorAzul;
            }

            & button:hover{
                background-color: #060449;
            }
        }

        & .divBotoes{
            width: 100%;
            height: 50px;

           // display:block;
            & button{
                height: 50px;
                width: 100%;

                cursor: pointer;
                font-size: 20px;
                border: none;
                border-radius: 25px;   
                color: $colorPreta;
                background-color: $colorBranca;
                border: 1px solid $colorPreta;
            }

            & button:hover{
                background-color:$colorCinza;
            }
        }
    }


</style>