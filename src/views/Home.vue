<template>

    <Header/>

    <section>
        <div class="divHome">
            <div class="divPostagem" v-for="postagem in this.postagemData" :key="postagem.id">
                
                <PostagemComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" v-bind:author="postagem.post_author" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" @ver-mais="verMais"/>
            
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
            postagemData: {}
        }
    },

    created: function(){
        this.listarPostagens();
    },
        
    methods: {

        listarPostagens(){

            PostagemService.listarPostagem().then(Response => {
                console.log(Response);
                this.postagemData = Response.data.posts;
                console.log(this.postagemData);
            })
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