<template>

    <Header/>

    <section>
        <div class="divHome">
            <div class="wrapper">
                <div class="item">Todas</div>
                <div class="item">Limpeza</div>
                <div class="item">Segurança</div>
                <div class="item">Infraestrutura</div>
                <div class="item">Transportes</div>
                <div class="item">Serviços Terceirizados</div>
                <div class="item">Meio Ambiente</div>
                <div class="item">Jardinagem</div>
                <div class="item">Alimentação nos campi</div>
                <div class="item">Saúde e seguridade</div>
                <div class="item">Abuso de Assédio</div>
                <div class="item">Outros</div>
            </div>

            <div class="divPostagem" v-for="postagem in this.postagemData" :key="postagem.id">
                
                <div v-if="statusColor(postagem.post_supporting) == 0"><PostagemComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" author="Anônimo" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" v-bind:supporting="postagem.post_supporting" @ver-mais="verMais"/></div>

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
    },
        
    methods: {

        listarPostagens() {

            try{
                if( !this.$store.getters.getSwap ){

                    const token = this.$store.getters.getToken
                    if(!token){
                        PostagemService.listarPostagem().then(Response => {
                            
                            this.postagemData = Response.data.posts;

                            console.log(Response);
                        })
                    }else {
                        this.user.fk_user_id = this.$store.getters.getId

                        PostagemService.listarPostagensUsuarioLogado(this.user.fk_user_id).then(Response => {

                            this.postagemData = Response.data;

                            console.log(Response);
                        })
                    }
                }else{
                    PostagemService.listarPostagem().then(Response => {
                        
                        this.postagemData = Response.data.posts;

                        console.log(Response);
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
        }
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
        max-height: 120px;
        border: 1px solid #ddd;
        display: flex;
        overflow-x: auto;
    }

    .wrapper::webkit-scrollbar{
        width: 0;
    }

    .wrapper .item{
        min-width: 200px;
        height: 110px;
        line-height: 110px;
        text-align: center;
        background-color: $colorAzul;
        margin-right: 2px;
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