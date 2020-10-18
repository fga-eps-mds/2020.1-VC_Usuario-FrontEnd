<template>

    <Header/>

    <div class="main">
        <h1>
            Editar
        </h1>
        <div class="divBotoes">
                <button type="button" onclick="window.location.href='http://localhost:8080/Perfil'">Confirmar</button>
                <button type="button" v-on:click="fazerLogout" >Sair</button>
        </div>

    </div>

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

    .main {
        margin-top: 60px;
    }

    button {
        margin-left: 10px;
    }


</style>