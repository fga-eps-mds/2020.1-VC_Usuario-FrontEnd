<template>
    
    <HeaderComponent/>

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

    <MenuBarComponent/>

</template>

<script>
/* Import dos components */
import HeaderComponent from '@/components/HeaderComponent.vue'
import MenuBarComponent from '@/components/MenuBarComponent.vue'
import NoticiaComponent from '@/components/NoticiaComponent.vue'


export default {
    name: 'FeedDeNoticias',

    components: {
        HeaderComponent,
        MenuBarComponent,
        NoticiaComponent
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