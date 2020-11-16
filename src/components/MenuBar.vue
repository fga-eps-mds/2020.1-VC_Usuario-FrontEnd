<template>
    <nav>
        <div class="divMenuOpcoes">
            <div><router-link to="/"><img src="../assets/homeIcon.png"></router-link></div>
            <div><router-link to="/criarpostagem"><img src="../assets/addIcon.png"></router-link></div>
            <div><img src="../assets/newsIcon.png"></div>
            <div><img src="../assets/userIcon.png" v-on:click="redirectPerfilLogin"></div>
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