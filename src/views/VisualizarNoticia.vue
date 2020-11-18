<template>

    <HeaderComponent/>

    <section>
        <div class="divVisualizarNoticia">
            
        </div>
    </section>

    <MenuBarComponent/>

</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'
import MenuBarComponent from '@/components/MenuBarComponent.vue'
/* import NoticiaService from '@/services/noticiaService.js' */

export default {
    name: 'visualizarNoticia',

    components: {
        HeaderComponent,
        MenuBarComponent,
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