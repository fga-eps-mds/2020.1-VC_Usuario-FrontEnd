<template>

    <HeaderComponent/>

    <section>
        <div class="divPerfil">
            <div class="divInfoPerfil">
                <h1> {{ nome }} </h1>
                    
                <img src="../assets/edit.png" onclick="window.location.href='/editarperfil'"> 
            </div>

            <div class="divPontosPerfil">
                <img src="../assets/trophy.png"> 

                <span> {{ pontos }} </span>
            </div>
        </div>

        <div class="divListagemPostagens">
            <div class="divPostagem" v-for="postagem in this.postagemData" :key="postagem.id">
                <PostagemComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" v-bind:author="postagem.post_author" v-bind:local="postagem.post_place" v-bind:category="postagem.post_category" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" v-bind:supporting="postagem.post_supporting" @ver-mais="verMais" @editar-postagem="editar"/> 
            </div>
        </div>
    </section>

    <MenuBarComponent/>

</template>

<script>
    import HeaderComponent from '@/components/HeaderComponent.vue'
    import MenuBarComponent from '@/components/MenuBarComponent.vue'
    import PostagemComponent from '@/components/PostagemComponent.vue'
    import UserService from '@/services/usuariosServices.js'
    /* eslint-disable */

    import { useStore } from 'vuex'
    import { computed } from 'vue'

export default {
    name:'Perfil',

    components: {
        HeaderComponent,
        MenuBarComponent,
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
            this.$router.push({ name: 'ListarUmaPostagem', params: { post_id: post_id }})
        },

        editar(post_id){
            this.$router.push({ name: 'EditarPostagem', params: { post_id: post_id }})
        }
    },
}

</script>

<style lang="scss" scoped>
    @import "../assets/stylesheets/pallete.scss";

    section{
        width: 100%;
        
        display: flex;
        flex-direction: column;
        padding-bottom: 100px;
    }

    .divPerfil{
        height: auto;
        flex: 1;
        min-width: 250px;
        margin: 65px 30px 0;
        
        display: block;

        border-bottom: 1px solid $colorCinza;
    }

    .divInfoPerfil{
        width: 100%;
        height: auto;

        display: flex;
        justify-content: space-between;

        & h1{
            overflow: hidden;
            
            color: $colorAzulEscuro;
        }

        & img{
            height: 20px;
            padding-left: 10px;

            cursor: pointer;
        }
    }

    .divPontosPerfil{
        height: 30px;
        width: 60px; 
        margin: 20px 0px;

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

    .divListagemPostagens{
        margin-top: 20px;
        
        display: flex;
        flex-wrap: wrap;
    }
    
    .divPostagem{
        height: auto;
        margin: 0 30px 20px;
        flex: 1 1 280px; 
    }
</style>