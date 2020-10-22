<template>
    <section>
        <div class="divCadastro">
            <div class="botaoVoltar">
                <img src="../assets/blackArrow.png" onclick='history.go(-1)'>
            </div>

            <div class="divLogo">
                <img src="../assets/vamosCuidarIcon.png"> 
            </div>  

            <form @submit.prevent="registrarUsuario">
                <div class="divInputs">
                    <div class="divUser">
                        <input style ="padrao" type="text" name="" placeholder="Nome" v-model="this.cadastro.user_name">
                        <input style ="padrao" type="text" name="" placeholder="Email" v-model="this.cadastro.user_email">
                    </div>

                    <div class="divSenha">
                        <span>
                            <input style="senha" type="password" id="senha" name="" placeholder="Senha" v-model="this.cadastro.user_password">
                        </span>

                        <span>
                            <img src="../assets/visibilidade.png" class="iconeVisibilidade" v-on:click=alterna()> 
                        </span>
                    </div>
                </div>

                <div class="divBotoes">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    </section>  
</template> 

<script>

import Usuarios from '@/services/usuarios.js'

export default{
    name: 'Cadastro',

    data(){
        return{
            cadastro: {
                user_email: '',
                user_password: '',
                user_name: ''
            }
        }
    },

    methods:{

        registrarUsuario(){
            Usuarios.Registrar(this.cadastro).then(resposta => {
                if(resposta.data.User){
                    window.location.href='http://localhost:8080/login'
                }else{
                    alert(resposta.data.msg)
                }
            }, erro => {
                alert(erro.response.data.msg)
            })
        },

        alterna() {

            var x = document.getElementById("senha");
            if (x.type ==="password"){
                x.type = "text";
            }else{
                x.type = "password";
            }
        }
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

    .divCadastro{
        height: 620px;
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
    }

    @media only screen and (min-height:600px) {
        section{
            justify-content: center;
        }
    }

    @media only screen and (min-width:500px){
        .divCadastro{
            width: 440px;
            margin: auto;
        }
    }

    .botaoVoltar{
        display: flex;
        align-items: flex-end;
        height: 50px;
        margin-bottom: 20px;
        
        & img{
            height: 25px;
            padding: 10px 10px 0 0;

            cursor: pointer;
        }

    }

    .divLogo{
        display: flex;
        justify-content: center;

        height: 200px;
        margin-bottom: 20px;

        & img{
            display: block;

            height: 65%;
            margin: auto;
        }
    }

    form{
        height: 310px;

        & .divInputs{
            width: 100%;
            height: 240px;
            margin-bottom: 20px;

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

                & img{
                    float: right;
                    height: 10%;
                    position: relative;
                    top: 20%;
                    transform: translateY(-150%);
                }
            }
        }

        & .divBotoes{
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
                color: $colorBranca;
                background-color: $colorAzul;
            }

            & button:hover{
                background-color: $colorAzul;
            }
        }
    }
</style>