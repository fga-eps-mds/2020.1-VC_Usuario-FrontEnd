<template>
    
    <HeaderComponent/>

    <section>
        <div class="divFeedDeNoticia">
            <div class="divNoticia">
                <div v-for="noticia in this.noticiasData" :key="noticia.news_id">
                    <NoticiaComponent v-bind:titulo="noticia.title" v-bind:subTitulo="noticia.subtitle" v-bind:id="noticia.news_id"
                    v-bind:image1="noticia.image1"
                    v-bind:texto="noticia.text"/>
                </div>
            </div>
        </div>
    </section>

    <MenuBarComponent/>

</template>

<script>
/* Import dos components */
import HeaderComponent from '@/components/HeaderComponent.vue'
import MenuBarComponent from '@/components/MenuBarComponent.vue'
import NoticiaComponent from '@/components/NoticiaComponent.vue'

import Noticia from '@/services/noticiaService.js'

export default {
    name: 'FeedDeNoticias',

    components: {
        HeaderComponent,
        MenuBarComponent,
        NoticiaComponent
    },

    data(){
        return {
            noticiasData: {}
        }
    },

    mounted : function(){
        this.listarNoticiasFeed();
    },

    methods: {
        listarNoticiasFeed() {

            Noticia.listarNoticias().then(res => {
                this.noticiasData = res.data;
            })
        }
    },
}
</script>

<style lang="scss" scoped>

    section{
        width: 100%;
        padding-bottom: 100px;
        display: flex;
        
        /* border: 1px solid red; */
    }

    .divFeedDeNoticia{
        height: auto;
        width: 100%;
        margin-top: 65px;
        min-width: 250px;

        display: flex;
        flex-wrap: wrap;

        /* border: 1px solid green; */

        .divNoticia{
            height: auto;
            margin: 0 30px 20px;
            flex: 1 1 300px;

            /* border: 1px solid blue; */
        }
    }
</style>