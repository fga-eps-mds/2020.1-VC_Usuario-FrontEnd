<template>

    <Header/>

    <section>
        <div class="divHome">
            <div class="divCategorias">
                <button class="item" id = "Todas" v-on:click="select('Todas')">Todas</button>
                <button class="item" v-on:click="select('Limpeza')">Limpeza</button>
                <button class="item" v-on:click="select('Segurança')">Segurança</button>
                <button class="item" v-on:click="select('Infraestrutura')">Infraestrutura</button>
                <button class="item" v-on:click="select('Transportes')">Transportes</button>
                <button class="item" v-on:click="select('Serviços Terceirizados')">Serviços Terceirizados</button>
                <button class="item" v-on:click="select('Meio Ambiente')">Meio Ambiente</button>
                <button class="item" v-on:click="select('Jardinagem')">Jardinagem</button>
                <button class="item" v-on:click="select('Alimentação nos campi')">Alimentação nos campi</button>
                <button class="item" v-on:click="select('Saúde e seguridade')">Saúde e seguridade</button>
                <button class="item" v-on:click="select('Abuso de Assédio')">Abuso de Assédio</button>
                <button class="item" v-on:click="select('Outros')">Outros</button>
            </div>

            <div class="divSeparador"/>

            <div class="divPostagem" v-for="postagem in this.postagemData" :key="postagem.id">
                <PostagemComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" v-bind:author="postagem.post_author" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" v-bind:supporting="postagem.post_supporting"/>
            </div>
        </div>
    </section>
    
    <MenuBar/>

</template>

<script>
/* Import dos components */
import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import PostagemComponent from '@/components/PostagemComponent.vue'

/* Import dos services */
import PostagemService from '@/services/postagens.js'
/* eslint-disable */

export default {
    name: 'Home',

    components: {
        Header,
        MenuBar,
        PostagemComponent,
    },
    
    data(){
        return {
            postagemData: {},

            user: {
                fk_user_id: '',
            }
        }
    },

    created: function() {
        this.listarPostagens();
        this.listarPostagemPorCategoria('Todas');
    },
        
    methods: {

        listarPostagens() {
            try{
                if( !this.$store.getters.getSwap ){

                    const token = this.$store.getters.getToken
                    if(!token){
                        PostagemService.listarPostagem().then(Response => {
                            
                            this.postagemData = Response.data.posts;
                        })
                    }else {
                        this.user.fk_user_id = this.$store.getters.getId

                        PostagemService.listarPostagensUsuarioLogado(this.user.fk_user_id).then(Response => {

                            this.postagemData = Response.data;
                        })
                    }
                }else{
                    PostagemService.listarPostagem().then(Response => {
                        
                        this.postagemData = Response.data.posts;
                    })
                }
            }catch(err){
                console.log({error: err.message});
            }
        },

        statusColor(post_supporting){
            var auxApoio = 0

            if(post_supporting == true){
                auxApoio = 1
            } 
            
            return auxApoio
        },

        listarPostagemPorCategoria(categoria){
            if(categoria == 'Todas'){
                this.listarPostagens();
            }else{
                PostagemService.listarPorCategoria(categoria).then(Response => {
                    this.postagemData = Response.data.posts;
                })
            }
        },

        select(categoria){
            this.listarPostagemPorCategoria(categoria)
        },

        focarTodas() {
            document.getElementById("Todas").focus()
        },
    },

    mounted(){
        this.focarTodas()
    },
}

 
</script>

<style scoped lang="scss">
    @import "../assets/stylesheets/pallete.scss";

    section{
        width: 100%;
        padding-bottom: 120px;
        display: flex;
    }

    .divCategorias{
        max-height: 60px;
        display: flex;
        width: 100%;
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }

        .item{
            min-width: 80px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: $colorCinza;
            margin-left: 5px;
            color: $colorBranca;
            border-radius: 15px;
            color: $colorAzulEscuro;
            font-size: 12px;
            text-overflow: ellipsis;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            margin: 8px;

            &:focus{
                background-color: $colorAzulEscuro;
                color: $colorBranca;
            }
        }
    }

    .divHome{
        height: auto;
        width: 100%;
        margin-top: 65px;
        min-width: 250px;

        display: flex;
        flex-wrap: wrap;

        .divPostagem{
            height: auto;
            margin: 0 30px 20px;
            flex: 1 1 300px;
        }
    }

    .divSeparador{
        width: 100%;
        background-color: $colorCinza;
        height: 1px;
        margin-top: 5px;
        margin-bottom: 15px;
    }

</style>
