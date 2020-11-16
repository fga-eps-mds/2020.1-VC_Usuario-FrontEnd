<template>

    <Header/>

    <section>
        <div class="PerfilContainer">
            <div class="divInfoPerfil">
                <h1> {{ nome }} </h1>
                    
                <img src="../assets/edit.png" onclick="window.location.href='/editarperfil'"> 
            </div>

            <div class="divPontosPerfil">
                <img src="../assets/trophy.png"> 

                <span> {{ pontos }} </span>
            </div>
            
            <div class="divPostagem" v-for="postagem in this.postagemData" :key="postagem.id">
                <PostagemComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" v-bind:author="postagem.post_author" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" @ver-mais="verMais" @editar-postagem="editar"/> 
            </div>
        </div>
    </section>

    <MenuBar/>

</template>

<script>
    import Header from '@/components/Header.vue'
    import MenuBar from '@/components/MenuBar.vue'
    import PostagemComponent from '@/components/PostagemComponent.vue'
    import UserService from '@/services/usuarios.js'
    /* eslint-disable */

    import { useStore } from 'vuex'
    import { computed } from 'vue'

export default {
    name:'Perfil',

    components: {
        Header,
        MenuBar,
        PostagemComponent
    },

    data() {
        return {
            postagemData: {}
        }
    },

    setup(){
        const nome = computed(() => useStore().getters.getNome)
        const pontos = computed(() => useStore().getters.getScore)
        return { nome, pontos }
    },
    
    created() {
        if( !useStore().getters.getSwap ){
            const token = useStore().getters.getToken
            if(!token){
                window.location.href='/login'
            }else {
                useStore().dispatch('validateSessionAction', token)
            }
        }else{
            useStore().commit('SET_SWAP', false)
        }

        this.listarPostagemUsuario();
    },

    methods: {
        listarPostagemUsuario() {
            UserService.listarPostagemUsuario(this.$store.getters.getId).then(Response => {
                this.postagemData = Response.data;
                console.log(this.postagemData);
            })
        },

        verMais(post_id){
            this.$router.push({ name: 'listarUmaPostagem', params: { post_id: post_id }})
        },

        editar(post_id){
            this.$router.push({ name: 'editarUmaPostagem', params: { post_id: post_id }})
        }
    },
}

</script>

<style lang="scss" scoped>
    @import "../assets/stylesheets/pallete.scss";

    section{
        width: 100%;
        display: flex;
    }

    .PerfilContainer{
        height: auto;
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
        margin-top: 65px;
        min-height: 620px;
        display: block;

         .divPostagem{
            height: auto;
            margin-top: 40px;
            flex: 1 1 300px; 
        }
    }

    .divInfoPerfil{
        width: 100%;
        height: auto;

        display: flex;
        align-content: space-between;

        & h1{
            width: 100%;
            overflow: hidden;
            
            color: $colorAzulEscuro;
        }

        & img{
            height: 25px;

            cursor: pointer;
        }
    }

    .divPontosPerfil{
        height: 30px;
        width: 60px; 
        margin-top: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
        
        font-size: 13px;
        border-radius: 5px;
        border:1px solid $colorAzulEscuro;
        
        & img{
            height: 15px;
        }

        & span{
            max-width: 40px;
            
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
        }
    }
</style>