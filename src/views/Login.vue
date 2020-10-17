<template>
    <section>
        <div class="divLogin">
            <div class="botaoVoltar">
                <img src="../assets/blackArrow.png" onclick='history.go(-1)'> 
            </div>

            <div class="divLogo">
                <img src="../assets/vamosCuidarIcon.png"> 
            </div>  

            <form @submit.prevent="fazerLogin">
                <div class="divInputs">
                    <input type="email" placeholder="Email" v-model="login.email">
                    <input type="password" placeholder="Senha" v-model="login.password">
                    <a href="#">Esqueceu sua senha?</a>
                </div>

                <div class="divBotoes">
                    <button type="submit">Entrar</button>
                    <button type="button" onclick="window.location.href='http://localhost:8080/cadastro'">Cadastrar</button>
                </div>
            </form>
        </div>
    </section>  
</template> 

<script>
import Usuarios from '@/services/usuarios.js'
import { useStore } from 'vuex'


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

    section{
        width: 100%;
        height: 100%;
        display: flex;
    }

    .divLogin{
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
        .divLogin{
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
            height: 170px;
            margin-bottom: 20px;
            
            input{
                width: 100%;
                height: 50px;

                font-size: 14px;
                border-bottom: 1px solid #DADDE0;
                margin-bottom: 10px;
            }

            input::placeholder {
                color: #000000;
            }

            a{  
                height: 15px;

                cursor: pointer;
                color: #090673;
                font-weight: bolder;
                text-decoration: none;
                font-size: 11px;
                float: right;
            }
        }

        & .divBotoes{
            width: 100%;
            height: 120px;

            display: flex;
            flex-direction: column;

            & button{
                margin-top: 0;
                height: 50px;
                width: 100%;

                cursor: pointer;
                font-size: 20px;
                border: none;
                border-radius: 25px;
            }

            button:first-child{  
                margin-bottom: 20px;    

                color: #ffffff;
                background-color: #090673;
            }

            button:first-child:hover{
                background-color: #060449;
            }

            button:last-child{
                background-color: #ffffff;
                border: 1px solid #DADDE0;
            }

            button:last-child:hover{
                background-color: #DADDE0;
            }
        }
    }
</style>