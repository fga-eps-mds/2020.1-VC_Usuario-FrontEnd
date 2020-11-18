<template>

    <HeaderComponent/>

    <section>
        <div class="divHome">
            <div class="divCategorias">
                <button id="Todas" v-on:click="select('Todas')">Todas</button>
                <button id="Limpeza" v-on:click="select('Limpeza')">Limpeza</button>
                <button id="Segurança" v-on:click="select('Segurança')">Segurança</button>
                <button id="Infraestrutura" v-on:click="select('Infraestrutura')">Infraestrutura</button>
                <button id="Transportes" v-on:click="select('Transportes')">Transportes</button>
                <button id="Serviços Terceirizados" v-on:click="select('Serviços Terceirizados')">Serviços Terceirizados</button>
                <button id="Meio Ambiente" v-on:click="select('Meio Ambiente')">Meio Ambiente</button>
                <button id="Jardinagem" v-on:click="select('Jardinagem')">Jardinagem</button>
                <button id="Alimentação nos campi" v-on:click="select('Alimentação nos campi')">Alimentação nos campi</button>
                <button id="Saúde e seguridade" v-on:click="select('Saúde e seguridade')">Saúde e seguridade</button>
                <button id="Abuso de Assédio" v-on:click="select('Abuso de Assédio')">Abuso de Assédio</button>
                <button id="Outros" v-on:click="select('Outros')">Outros</button>
            </div>

            <div class="divPostagem" v-for="postagem in this.postagemData" :key="postagem.id">
                <PostagemComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" v-bind:author="postagem.post_author" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" v-bind:supporting="postagem.post_supporting"/>
            </div>
        </div>
    </section>
    
    <MenuBarComponent/>

</template>

<script>
/* Import dos components */
import HeaderComponent from '@/components/HeaderComponent.vue'
import MenuBarComponent from '@/components/MenuBarComponent.vue'
import PostagemComponent from '@/components/PostagemComponent.vue'

/* Import dos services */
import PostagemService from '@/services/postagensServices.js'
/* eslint-disable */

export default {
    name: 'Home',

    components: {
        HeaderComponent,
        MenuBarComponent,
        PostagemComponent,
    },
    
    data(){
        return {
            postagemData: {},

            user: {
                fk_user_id: '',
            },

            filtragemAntiga: "Todas"
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
            this.mudarCorFiltrageAntiga(this.filtragemAntiga)
            this.mudarCorFiltrageAtual(categoria)
            
            this.listarPostagemPorCategoria(categoria)
        },

        mudarCorFiltrageAntiga(filtragemAntiga){
            document.getElementById(filtragemAntiga).style.backgroundColor = '#ffffff';
            document.getElementById(filtragemAntiga).style.color = '#060449';
        },

        mudarCorFiltrageAtual(categoria){
            document.getElementById(categoria).style.backgroundColor = "#060449";
            document.getElementById(categoria).style.color = '#ffffff';

            this.filtragemAntiga = categoria
        },

        focarTodas() {
            document.getElementById(this.filtragemAntiga).style.backgroundColor = "#060449";
            document.getElementById(this.filtragemAntiga).style.color = '#ffffff';
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
        padding-bottom: 100px;
        display: flex;
    }

    .divCategorias{
        width: 100%;
        margin-bottom: 20px;
        padding: 5px 0px 5px 30px;
       
        display: flex;
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        border-bottom: 1px solid $colorCinza;

        &::-webkit-scrollbar {
            display: none;
        }

        & button{
            height: 30px;
            min-width: 100px;
            margin-right: 5px;
            padding: 0 10px;
            
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;

            cursor: pointer;
            border-radius: 25px;
            border: none;
            color: $colorAzulEscuro;
            background-color: $colorBranca;
        }
    }

    .divHome{
        height: auto;
        width: 100%;
        margin-top: 45px;
        min-width: 250px;

        display: flex;
        flex-wrap: wrap;

        .divPostagem{
            height: auto;
            margin: 0 30px 20px;
            flex: 1 1 300px;
        }
    }
</style>
