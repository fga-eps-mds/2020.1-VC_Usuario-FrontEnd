<template>

    <Header/>

    <form class="feedPostagens">
        <div class="col" v-for="postagem in this.postagemData" :key="postagem.id">
            
            <PostagemComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" author="Daniel Porto" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id" @ver-mais="verMais"/>
        
        </div>
    </form>
    
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

    .feedPostagens{
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 60px;
    }

    .col{
        margin: 0 auto;
        margin-bottom: 20px;
    }
</style>
