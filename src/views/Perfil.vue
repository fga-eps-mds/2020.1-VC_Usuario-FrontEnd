<template>

    <Header/>

    <div>
        <h4>
            {{ user }}
        </h4>
        <div class="divBotoes">
                <button type="button" onclick="window.location.href='http://localhost:8080/editar'">Editar</button>
        </div>
    </div>

    <MenuBar/>
    
</template>

<script>

    export default {
        
        computed: {
            user (){
                return "O usuário logado é ${this.$store.state.user_name}"
            },
        }
        /* mounted(){
            this.usuarioAtual = this.$store.getters.getUsuarioAtual;
        } */
    }

</script>

<style lang="scss" scoped>

</style>