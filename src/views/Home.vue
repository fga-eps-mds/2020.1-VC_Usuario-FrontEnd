<template>

    <Header/>

    <section>
        <div class="divHome">
            <div class="divPostagem" v-for="postagem in this.postagemData" :key="postagem.id">
                
                <div id="postagemStatus0" v-if="statusColor(postagem.post_supporting) == 0"><PostagemComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" author="Anônimo" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" v-bind:supporting="postagem.post_supporting" @ver-mais="verMais"/></div>

                <div id="postagemStatus1" v-if="statusColor(postagem.post_supporting) == 1"><PostagemComponentNao v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" author="Anônimo" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" v-bind:supporting="postagem.post_supporting" @ver-mais="verMais"/></div>

            
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
import PostagemComponentNao from '@/components/PostagemComponentNao.vue'

/* Import dos services */
import PostagemService from '@/services/postagens.js'

export default {
    name: 'Home',

    components: {
        Header,
        MenuBar,
        PostagemComponent,
        PostagemComponentNao
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

                    PostagemService.listarPostagem().then(Response => {
                        console.log(Response);
                        this.postagemData = Response.data.posts;
                        console.log("Aqui");
                        console.log(this.postagemData);
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
            console.log("+++++++++++++++++")
            console.log(post_supporting)
            var i = 0
            if(post_supporting == true){
                i = 1
                console.log("true: " + post_supporting)
            } 
            else if (post_supporting == false){
                console.log("false: " + post_supporting)
            }
            
            return i
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