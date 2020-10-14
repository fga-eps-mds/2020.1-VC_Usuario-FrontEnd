<template>

    <Header/>

    <div class="main">
        <h4>
            {{ nome }}
        </h4>
        <div class="divBotoes">
                <button type="button" onclick="window.location.href='http://localhost:8080/editar'">Editar</button>
        </div>
    </div>

    <MenuBar/>
    
</template>

<script>
import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import store from "@/store/index.js";

export default {
    name:'Perfil',

    components: {
        Header,
        MenuBar
    },

    data (){
        return{
            nome: '',
        }
    },

    mounted (){
        this.nome = store.getNome();
    }
}

</script>

<style lang="scss" scoped>
    .main {
        margin-top: 60px;
    }

</style>