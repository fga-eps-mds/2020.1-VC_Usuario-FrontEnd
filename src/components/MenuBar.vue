<template>
    <nav class="MenuBar">
        <div class="divMenuOpcoes">
            <div><router-link to="/"><img id="home" src="../assets/homeIcon.png"></router-link></div>
            <div><router-link to="/criarpostagem"><img id="criarPost" src="../assets/addIcon.png"></router-link></div>
            <div><img src="../assets/newsIcon.png"></div>
            <div><img id="perfil" src="../assets/userIcon.png" v-on:click="redirectPerfilLogin"></div>
        </div>
        
        <!-- <div class="divSideBar">
            <input type="checkbox" id=chec>
            <label for="chec">
                <img src="../assets/sidebar.png">
            </label>
            <nav class="SideBar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/criarpostagem">Criar Postagem</a></li>
                    <li><a href="">Notícias</a></li>
                    <li><a href="/Perfil">Perfil</a></li>
                </ul>
            </nav>
        </div> -->
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
   /*          if(window.location.href === 'http://localhost:8080/'){
                document.getElementById("home").src = "img/homeIcon2.0d80039d.png"
            }else if(window.location.href === 'http://localhost:8080/criarpostagem'){
                document.getElementById("criarPost").src = "../img/addIcon2.e766826e.png"
            }else if(window.location.href === 'http://localhost:8080/perfil'){
                document.getElementById("perfil").src = "../img/userIcon2.90dd1654.png"
            } */
            if(window.location.href === 'http://localhost:8080/'){
                document.getElementById("home").src=require("../assets/homeIcon2.png");
            }else if(window.location.href === 'http://localhost:8080/criarpostagem'){
                document.getElementById("criarPost").src = require("../assets/addIcon2.png")
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

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen 
    and (min-device-width : 0px) 
    and (max-device-width : 440px) {
    /* Styles */
    nav[class="MenuBar"]{
        bottom: 0;
        position: fixed;
        display: flex;

        height: 70px;
        width: 100%;

        background-color: $colorBranca;
        border-top: 1px solid $colorCinza;
    }   

    .divMenuOpcoes{
        display: flex;
        width: 100%;
        max-width: 440px;
        margin: 10px 20px;

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
    /* .divSideBar{
        display: none;
    } */

    }

    /* iPads (portrait and landscape) ----------- */
    @media only screen 
    and (min-device-width : 440px) 
    and (max-device-width : 1024px) {
    /* Styles */

    nav[class="MenuBar"]{
        bottom: 0;
        position: fixed;
        display: flex;

        height: 70px;
        width: 100%;

        background-color: $colorBranca;
        border-top: 1px solid $colorCinza;
    }   

    .divMenuOpcoes{
        display: flex;
        width: 100%;
        max-width: 1024px;
        margin: 10px 20px;

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
    /* .divSideBar{
        display: none;
    } */

    }

    /* Desktops and laptops ----------- */
    @media only screen 
    and (min-width : 1024px) {
    /* Styles */
    nav[class="MenuBar"]{
        bottom: 0;
        position: fixed;
        display: flex;

        height: 70px;
        width: 100%;

/*         background-color: $colorBranca;
        border-top: 1px solid $colorCinza; */
    }   

    .divMenuOpcoes{
        display: none;
        width: 100%;
        max-width: 1500px;
        margin: 10px 20px;
        

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

    /* .divSideBar{
        position: fixed;
        top: 7px;
        left: 30px;
        color: $colorBranca;
        padding: 0px;
        margin: 0px;
        height: 100%;
    }
        & img{
            height: 35px;
            width: 40px;
            color: $colorBranca
        }

        &ul {
            list-style: none;
        }

        & a{
            font-weight: bold;
            color: $colorAzulEscuro;
            font-size: 30px;
            text-decoration: none;
            display: block;
            padding: 35px;
            border-bottom: 1px solid $colorCinza;
        }

        & a:hover{
            background-color: $colorAzulEscuro;
            color: $colorBranca;
        }

        & input[type="checkbox"]
        {
            display: none;
        }

        & input[type="checkbox"]:checked ~ nav
        {
            transform: translateX(305px);
            transition: 1s;
        }

        &nav[class="SideBar"]{
            background-color: $colorBranca;
            height: 100%;
            border-right: 1px solid $colorCinza;
            width: 305px;
            position:absolute;
            left: -340px
            
        }



    } */
    }
      
</style>