<template>

    <Header/>

    <section>
        <div class="divHome">
            <div class="divPostagem" v-for="postagem in this.postagemData" :key="postagem.id">
                
                <PostagemComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" author="Anônimo" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" v-bind:supporting="postagem.post_supporting" @ver-mais="verMais"/>
            
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

export default {
    name: 'Home',

    components: {
        Header,
        MenuBar,
        PostagemComponent
    },
    
    data (){
        return {
            postagemData: {},

            user: {
                fk_user_id: '',
            }
        }
    },

    created: function(){
        this.listarPostagens();
    },
        
    methods: {

        listarPostagens(){

            try{
                if( !this.$store.getters.getSwap ){
                console.log("sim fora")
                const token = this.$store.getters.getToken
                if(!token){
                    console.log("sim dentro ")
                    
                    PostagemService.listarPostagem().then(Response => {
                        console.log(Response);
                        this.postagemData = Response.data.posts;
                        console.log("Aqui");
                        console.log(this.postagemData);
                    })
                }else {
                    console.log("nao dentro ")
                    
                    this.user.fk_user_id = this.$store.getters.getId
                    console.log(this.user)

                    PostagemService.listarPostagensApoiadasPorUsuario(this.user.fk_user_id).then(Response => {
                        console.log("Aqui1:");
                        console.log(Response);
                        this.postagemData = Response.data;
                        console.log("Aqui:");
                        console.log(this.postagemData);
                    })
                }
            }else{
                console.log("nao fora")
            }
            }catch(err){
                console.log({error: err.message});
            }
        },

        verMais(post_id){

            this.$router.push({ name: 'listarUmaPostagem', params: { post_id: post_id }})
        }
    },
}
</script>

<style scoped lang="scss">

    section{
        width: 100%;
        padding-bottom: 120px;
        display: flex;
        /* border: 1px solid red; */
    }

    .divHome{
        height: auto;
        width: 100%;
        /* border: 1px solid green; */
        margin-top: 65px;
        min-width: 250px;

        display: flex;
        flex-wrap: wrap;

        .divPostagem{
            height: auto;
            margin: 0 30px 20px;
            flex: 1 1 300px;
            /* border: 1px solid red; */
        }
    }
</style>