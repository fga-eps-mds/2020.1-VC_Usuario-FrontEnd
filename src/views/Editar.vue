<template>

    <Header/>

    <div class="main">
        <h1>
            Editar
        </h1>
        <div class="divBotoes">
                <button type="button" onclick="window.location.href='http://localhost:8080/Perfil'">Confirmar</button>
        </div>

        <div class="divBotoes">
                <button type="button" onclick="window.location.href='http://localhost:8080/login'">Encerrar Sessão</button>
        </div>
    </div>

    <MenuBar/>
    
</template>

<script>
import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
//import store from "@/store/index.js";

export default {
    name: 'Editar',
    components:{
        Header,
        MenuBar
    }
}
</script>

<style lang="scss" scoped>

    .main {
        margin-top: 60px;
    }


</style>