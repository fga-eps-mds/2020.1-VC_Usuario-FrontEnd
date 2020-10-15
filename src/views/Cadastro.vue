<template> 
    <div class="divCadastro">
        <div onclick='history.go(-1)' class="botaoVoltar">
            <img src="../assets/botaoVoltar.png">
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
                <!-- <input type="checkbox" v-on:click="alterna()">Mostrar Senha -->
                <!-- <button id="eye" v-on:Click="alterna()"><img src="../assets/visibilidade.png" /></button> -->
            </div>

            <div class="divBotoes">
                <button type="submit">Cadastrar</button>

            </div>
        </form>
    </div>  
</template> 

<script>

import Registros from '@/services/registros.js'

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
            

                //console.log(this.cadastro)
                Registros.Registrar(this.cadastro).then(resposta => {
                    console.log(resposta)
                    if(resposta.data.User){
                        window.location.href='http://localhost:8080/login'
                    }else{
                        alert(resposta.data.msg)
                        window.location.href='http://localhost:8080/cadastro'
                    }
                })
                
        },

        alterna() {

            var x = document.getElementById("senha");
            console.log("menino");
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

    .divCadastro{
        height: 100%;
        min-width: 200px;
        min-height: 600px;
        margin: 0 30px;
        padding: 0;
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

        height: 5%;
        top: 0;
        left: 0;
        width: 40px;
        
        cursor: pointer;

        & img{
            display: block;

            height: 50%;
            padding: 1px;
        }

    }

    .divLogo{
        display: flex;
        justify-content: center;

        width: 100%;
        height: 40%;
        margin-top: 2%;
        margin-bottom: -15%;

        & img{
            display: block;

            height: 50%;
            margin: auto;
            margin-top: 14%;
            padding: 0 10px;
        }
    }

    form{
        width: 100%;
        height: 40%;
        margin-top: -2%;

        & .divInputs{
            width: 100%;
            height: 40%;

            & .divUser{

                height: 100%;
                        
                input{
                    box-shadow: 0 0 0 0;
                    border: 0 none;
                    outline: 0;

                    display: block;

                    width: 100%;
                    height: 35%;

                    font-size: 14px;
                    border-bottom: 1px solid #DADDE0;
                }

            }

            & .divSenha{

                height: 100%;
                margin-top: -10%;

                input{
                    box-shadow: 0 0 0 0;
                    border: 0 none;
                    outline: 0;

                    display: block;

                    width: 100%;
                    height: 35%;

                    font-size: 14px;
                    border-bottom: 1px solid #DADDE0;
                }
                & img{
                    float: right;
                    height: 19%;
                    margin-top: -12% ;
                }
            }

            & button{
                display: flex;
                float: right;
                height: 18%;
                margin-right: 5%;
                background-color: white;
                & img{
                    height: 90%;
                }

            }

            input::placeholder {
                color: #000000;
            }
        }

        & .divBotoes{
            width: 100%;
            height: 45%;
            margin-top: 30%;

            display: flex;
            flex-direction: column;

            & button{
                height: 35%;
                width: 100%;

                cursor: pointer;
                font-size: 20px;
                border: none;
                border-radius: 10px;   
                color: #ffffff;
                background-color: #090673;
            }
        }
    }
</style>