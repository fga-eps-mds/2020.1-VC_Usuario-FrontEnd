<template>
    <nav class="MenuBar">
        <div class="divMenuOpcoes">
            <div><router-link to="/"><img id="home" src="../assets/homeIcon.png"></router-link></div>
            <div><router-link to="/criarpostagem"><img id="criarPost" src="../assets/addIcon.png"></router-link></div>
            <div><router-link to="/noticias"><img id="noticias" src="../assets/newsIcon.png"></router-link></div>
            <div><img id="perfil" src="../assets/userIcon.png" v-on:click="redirectPerfilLogin"></div>
        </div>
    </nav>
</template>

<script>
import { useStore } from 'vuex'

export default {
    name: 'MenuBar',
    setup() {

        const store = useStore()
        const redirectPerfilLogin = () => {

            const token = store.getters.getToken
            if(!token){
                window.location.href='/login'
            }else {
                store.dispatch('validateSessionAction', token)
                store.commit('SET_SWAP', true)
                window.location.href='/perfil'
            }
        }
        return {redirectPerfilLogin}
    },
    methods: {
        altera(){
            if(window.location.href === 'http://localhost:8080/'){
                document.getElementById("home").src = require("../assets/homeIcon2.png");
            }else if(window.location.href === 'http://localhost:8080/criarpostagem'){
                document.getElementById("criarPost").src = require("../assets/addIcon2.png")
            }else if(window.location.href === 'http://localhost:8080/noticias'){
                document.getElementById("noticias").src = require("../assets/newsIcon2.png")
            }else if(window.location.href === 'http://localhost:8080/perfil'){
                document.getElementById("perfil").src = require("../assets/userIcon2.png")
            }
        },
    },
    mounted(){
        this.altera()
    }
}

</script>

<style lang="scss" scoped>
    @import "../assets/stylesheets/pallete.scss";

    nav{
        bottom: 0;
        position: fixed;
        display: flex;

        height: 70px;
        width: 100%;

        background-color: $colorBranca;
        border-top: 1px solid $colorCinza;
    }  
    
    @media only screen and (min-width:600px){
        nav{
            display: none;
        }
    }

    .divMenuOpcoes{
        display: flex;
        width: 100%;
        max-width: 440px;
        margin: 10px 20px;
        margin: auto;

        & div{
            display: flex;
            justify-content: center;

            height: 100%;
            flex: 1;
            
            & img{
                display: block;

                margin: auto;
                height: 30px;
                padding: 10px 15px;

                cursor: pointer;
            }
        }
    } 
</style>