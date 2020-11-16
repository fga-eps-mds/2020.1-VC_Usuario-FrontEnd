<template>
    
    <Header/>

    <section>
        <div class="divFeedDeNoticia">
            <div class="divNoticia">
                
                <NoticiaComponent/>
                
            </div>

            <div class="divNoticia">

                <NoticiaComponent/>
            
            </div>
        </div>
    </section>

    <MenuBar/>

</template>

<script>
/* Import dos components */
import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import NoticiaComponent from '@/components/NoticiaComponent.vue'
import Noticia from '@/services/noticiaService.js'

export default {
    name: 'FeedDeNoticias',

    components: {
        Header,
        MenuBar,
        NoticiaComponent
    },

    mounted(){
        this.listarNoticiasFeed();
    },

    methods: {
        listarNoticiasFeed() {
            Noticia.listarNoticias().then(res => {
                console.log("111", res.data);
                console.log("2222", res);
            })
        }
    },
}
</script>

<style lang="scss" scoped>

    section{
        width: 100%;
        padding-bottom: 120px;
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