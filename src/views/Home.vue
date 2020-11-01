<template>

    <Header/>

    <section>
        <div class="divHome">
            <div class="divPostagem" v-for="postagem in this.postagemData" :key="postagem.id">
                
                <PostagemComponent v-bind:title="postagem.post_title"  v-bind:status="postagem.post_status" author="Anônimo" v-bind:local="postagem.post_place" v-bind:date="postagem.post_created_at" v-bind:id="postagem._id"/>
            
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
    
    data(){
        return {
            postagemData: {}
        }
    },

    created: function() {
        this.listarPostagens();
    },
        
    methods: {

        listarPostagens() {

            PostagemService.listarPostagem().then(Response => {
                this.postagemData = Response.data.posts;
            })
        },
    },
}
</script>

<style scoped lang="scss">

    section{
        width: 100%;
        padding-bottom: 120px;
        display: flex;
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