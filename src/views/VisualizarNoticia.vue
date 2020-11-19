<template>

    <HeaderComponent/>

    <section>
        <div class="divVisualizarNoticia">
            <div class="titulo">
                <span>{{noticiasData.title}}</span>
                <span>{{noticiasData.subtitle}}</span>
            </div>

            <div class="imagem">
                <img v-bind:src="imageDaNoticia"/>
            </div>

            <div class="texto">
                <span>{{noticiasData.text}}</span>
            </div>
        </div>
    </section>

    <MenuBarComponent/>

</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'
import MenuBarComponent from '@/components/MenuBarComponent.vue'
import NoticiaService from '@/services/noticiaService.js'

export default {
    name: 'visualizarNoticia',

    components: {
        HeaderComponent,
        MenuBarComponent,
    },

    data(){
        return {
            noticiasData: {},
            imageDaNoticia: {},
        }
    },

    mounted : function(){
        this.listarUmaNoticiasFeed();
    },

    methods: {
        listarUmaNoticiasFeed() {
            NoticiaService.listarUmaNoticia(this.$route.params.id).then(res => {
                this.noticiasData = res.data;
                this.imageDaNoticia = process.env.VUE_APP_API_URL_NEWS + /img/ + this.noticiasData.image1;
            })
        }
    },
}
</script>

<style lang="scss">
@import "../assets/stylesheets/pallete.scss";

    section{
        width: 100%;
        display: flex;
        padding-bottom: 100px;
    }

    .titulo{
        height: auto;
        display: flex;
        flex-direction: column;
        padding-bottom: 15px;

        & span:first-child{
            padding-right: 30px;
            font-size: 20px;
            font-weight: bold;
            padding-bottom: 10px;
            overflow: hidden;
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: $colorAzul;
        }
    }

    .texto{
        height: auto;
        width: 100%;
    }

    .imagem{
        text-align: center;
        margin-bottom: 40px;

        & img {
            max-width:100%;
            max-height:150px;
            border-radius: 15px;
        }
    }

    .divVisualizarNoticia{
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
        margin-top: 65px;
        min-height: 620px;
    }
</style>