<template> 
    <div class="divLogin">
        <div onclick='history.go(-1)' class="botaoVoltar">
            <img src="../assets/botaoVoltar.png"> 
        </div>

        <div class="divLogo">
            <img src="../assets/vamosCuidarIcon.png"> 
        </div>  

        <form @submit.prevent="fazerLogin">
            <div class="divInputs">
                <input type="text" name="" placeholder="Seu Email" v-model="login.email">
                <input type="password" name="" placeholder="Sua Senha" v-model="login.password">
                <a href="#">Esqueceu sua senha?</a>
            </div>

            <div class="divBotoes">
                <button type="submit">Entrar</button>
                <button type="button" onclick="window.location.href='http://localhost:8080/cadastro'">Cadastrar</button>
            </div>
        </form>
    </div>  
</template> 

<script>
import Usuarios from '@/services/usuarios.js'
import { useStore } from 'vuex'
//import { computed } from 'vue'

export default {
    name: 'Login',
    setup(){
        const store = useStore()
        const login = {
            email: '',
            password: ''
        }

        const fazerLogin = () => {
            Usuarios.Login(login).then(resposta => {
                    console.log(resposta)
                    store.commit('SET_USUARIO', resposta.data.user)
                    window.location.href='http://localhost:8080/perfil'
                    
            }, erro => {
                console.log(erro.response.data)
            })
        }

        return { login, fazerLogin }
    },
    /* data(){
        return{
            login: {
                email: '',
                password: ''
            }
        }
    }, */

    methods: {
    }
}

</script>

<style lang="scss" scoped>

    .divLogin{
        height: 100%;
        min-width: 200px;
        min-height: 600px;
        margin: 0 30px;
        padding: 0;
    }

    @media only screen and (min-width:500px){
        .divLogin{
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
        margin-bottom: -5%;

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
        margin-top: 2%;

        & .divInputs{
            width: 100%;
            height: 45%;
            
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

            input::placeholder {
                color: #000000;
            }

            a{  
                cursor: pointer;
                color: #090673;
                font-weight: bolder;
                text-decoration: none;
                font-size: 11px;
            }

        }

        & .divBotoes{
            width: 100%;
            height: 40%;
            margin-top: 10%;

            display: flex;
            flex-direction: column;

            & button{
                height: 40%;
                width: 100%;

                cursor: pointer;
                font-size: 20px;
                border: none;
                border-radius: 10px;
            }

            button:first-child{  
                margin-bottom: 25px;    

                color: #ffffff;
                background-color: #090673;
            }

            button:last-child{
                background-color: #ffffff;
                border: 1px solid #DADDE0;
            }
        }
    }
</style>