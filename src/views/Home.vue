<template>

    <Header/>

    <section>
        <div class="divHome">

            <div class="wrapper">
                <button class="item" v-on:click="select('Todas')">Todas</button>
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

            <div class="divPostagem" v-for="postagem in this.postagemData" :key="postagem.id">
                <div v-if="statusColor(postagem.post_supporting) == 0"><PostagemComponent v-bind:title="postagem.post_title" v-bind:status="postagem.post_status" author="Anônimo" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" v-bind:supporting="postagem.post_supporting" @ver-mais="verMais"/></div>

                <div v-if="statusColor(postagem.post_supporting) == 1"><PostagemApoiadaComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" author="Anônimo" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" v-bind:supporting="postagem.post_supporting" @ver-mais="verMais"/></div>
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
import PostagemApoiadaComponent from '@/components/PostagemApoiadaComponent.vue'

/* Import dos services */
import PostagemService from '@/services/postagens.js'

export default {
    name: 'Home',

    components: {
        Header,
        MenuBar,
        PostagemComponent,
        PostagemApoiadaComponent
    },
    
    data (){
        return {
            postagemData: {},

            user: {
                fk_user_id: '',
            }
        }
    },

    created: function() {
        this.listarPostagens();
        this.listarPostagemPorCategoria();

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

        verMais(post_id){
            this.$router.push({ name: 'listarUmaPostagem', params: { post_id: post_id }})
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
                PostagemService.listarPostagem().then(Response => {
                    this.postagemData = Response.data.posts;
                })
            }else{
                PostagemService.listarPorCategoria(categoria).then(Response => {
                    this.postagemData = Response.data.posts;
                })
            }
        },

        select(categoria){
            this.listarPostagemPorCategoria(categoria)
        },
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

    .wrapper{
        max-height: 60px;
        display: flex;
        width: 100%;
        overflow-x: auto;
    }

    .wrapper .item{
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
    }

    .wrapper .item:focus {
        background-color: $colorAzulEscuro;
        color: $colorBranca;
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
</style>