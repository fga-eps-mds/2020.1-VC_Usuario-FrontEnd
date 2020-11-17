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
/* import NoticiaService from '@/services/noticiaService.js' */

export default {
    name: 'vizualizarNoticia',

    components: {
        Header,
        MenuBar,
    },
}
</script>

<style lang="scss">

    section{
        width: 100%;
        display: flex;
        padding-bottom: 100px;
    }

    .divVisualizarNoticia{
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
        margin-top: 65px;
        min-height: 620px;
    }
</style>