<template>

    <Header/>

    <section>
        <div class="divHome">

            <div class="wrapper">
                <div class="item" v-on:click="select(1)">Todas</div>
                <div class="item" v-on:click="select(2)">Limpeza</div>
                <div class="item" v-on:click="select(3)">Segurança</div>
                <div class="item" v-on:click="select(4)">Infraestrutura</div>
                <div class="item" v-on:click="select(5)">Transportes</div>
                <div class="item" v-on:click="select(6)">Serviços Terceirizados</div>
                <div class="item" v-on:click="select(7)">Meio Ambiente</div>
                <div class="item" v-on:click="select(8)">Jardinagem</div>
                <div class="item" v-on:click="select(9)">Alimentação nos campi</div>
                <div class="item" v-on:click="select(10)">Saúde e seguridade</div>
                <div class="item" v-on:click="select(11)">Abuso de Assédio</div>
                <div class="item" v-on:click="select(12)">Outros</div>
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
            PostagemService.listarPorCategoria(categoria).then(Response => {
                this.postagemData = Response.data.posts;
            }) 
        },

        select(number){

            var categoria = ''

            if (number == 2){
                categoria = 'Limpeza'
            }
            if (number == 3){
                categoria = 'Segurança'
            }
            if (number == 4){
                categoria = 'Infraestrutura'
            }
            if (number == 5){
                categoria = 'Transportes'
            }
            if (number == 6){
                categoria = 'Serviços Terceirizados'
            }
            if (number == 7){
                categoria = 'Meio Ambiente'
            }
            if (number == 8){
                categoria = 'Jardinagem'
            }
            if (number == 9){
                categoria = 'Alimentação nos campi'
            }
            if (number == 10){
                categoria = 'Saúde e seguridade'
            }
            if (number == 11){
                categoria = 'Abuso de Assédio'
            }
            if (number == 12){
                categoria = 'Outros'
            }

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
        background-color: $colorAzul;
        margin-left: 5px;
        color: $colorBranca;
        border-radius: 15px;
        font-size: 12px;
        text-overflow: ellipsis;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        margin: 8px;
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