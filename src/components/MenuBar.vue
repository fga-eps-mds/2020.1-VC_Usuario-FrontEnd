<template>
    <nav>
        <div class="divMenuOpcoes">
            <div><router-link to="/"><img id="home" src="../assets/homeIcon.png"></router-link></div>
            <div><router-link to="/criarpostagem"><img id="criarPost" src="../assets/addIcon.png" v-on:click="getURL()"></router-link></div>
            <div><img src="../assets/newsIcon.png" v-on:click="getURL()"></div>
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
        getURL(){
            console.log(window.location.href)
        },
        altera(){
            if(window.location.href === 'http://localhost:8080/'){
                document.getElementById("home").src = "img/homeIcon2.0d80039d.png"
            }else if(window.location.href === 'http://localhost:8080/criarpostagem'){
                document.getElementById("criarPost").src = "../img/addIcon2.e766826e.png"
            }else if(window.location.href === 'http://localhost:8080/perfil'){
                document.getElementById("perfil").src = "../img/userIcon2.90dd1654.png"
            }
            /* if(window.location.href === 'http://localhost:8080/'){
                document.getElementById("home").src = "../assets/homeIcon2.png"
            }else if(window.location.href === 'http://localhost:8080/criarpostagem'){
                document.getElementById("criarPost").src = "../assets/addIcon2.png"
            } */
        },
        /* changeHome(){
            document.getElementById('home').src="/img/addIcon.c9c76183.png"
        } */
    },
    mounted(){
        //this.changeHome(),
        this.altera(),
        this.getURL()
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

    .divMenuOpcoes{
        display: flex;
        width: 100%;
        max-width: 400px;
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
</style>