<template>

    <Header/>

    <section>
        <div class="divVisualizarNoticia">
            
        </div>
    </section>

    <MenuBar/>

</template>

<script>

import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import NoticiaService from '@/services/noticiaService.js'

export default {
    name: 'vizualizarNoticia',

    components: {
        Header,
        MenuBar,
    },

    data(){
        return {
            noticiasData: {}
        }
    },

    mounted : function(){
        this.listarUmaNoticiasFeed();
    },

    methods: {
        listarUmaNoticiasFeed() {
            console.log(NoticiaService);
            NoticiaService.listarUmaNoticia(this.$route.params.id).then(res => {
                console.log("111", res.data);
                console.log("2222", res);
                this.noticiasData = res.data;
            })
        }
    },
}
</script>

<style lang="scss">

    section{
        width: 100%;
        display: flex;
    }

    .divVisualizarNoticia{
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
        margin-top: 65px;
        min-height: 620px;
    }
</style>