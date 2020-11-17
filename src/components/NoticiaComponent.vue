<template>
    <div class="noticia">
        <div class="tituloESubTitulo">
            <span>{{titulo}}</span>
            <span>{{subTitulo}}</span>
        </div>

        <div class="noticiaBotaoImagem">
            <div class="divBotoes">
                <button @click="verMais(id)">Ver mais</button>
            </div>

            <div class="noticiaImagem">
                <img v-bind:src="this.imageDaNoticia"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'noticia',

    setup() {
      const verMais = (noticia_id) => {
        window.location.href = `/noticias/${noticia_id}`
      }
      return { verMais }
    },

    data() {
        return{
            imageDaNoticia: process.env.VUE_APP_API_URL_NEWS + /img/ + this.image1,
        }
    },

    props: {
        id: Number,
        titulo: String,
        subTitulo: String,
        image1: String,
    }
}
</script>

<style lang="scss">
@import "../assets/stylesheets/pallete.scss";

    .noticia {
        height: auto;
        border-radius: 15px;
        padding: 10px;
        margin-bottom: 20px;
        border: solid 1px $colorCinza;
    }

    .tituloESubTitulo {
        height: auto;
        display: flex;
        flex-direction: column;

        & span:first-child{
            padding-right: 30px;
            font-size: 20px;
            font-weight: bold;
            padding-bottom: 10px;
            color: $colorAzul;
        }
    }

    .noticiaBotaoImagem{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .noticiaImagem img{
        width:150px;
        height:150px;
        border-radius: 15px;
    }

    .divBotoes{
        & button{
            height: 30px;
            cursor: pointer;
            margin-top: 100px;
            width: 90px;
            border: none;
            border-radius: 25px; 
            color: $colorBranca;
            background-color: $colorAzul;
        }

        & button:hover{
            background-color: $colorAzulEscuro;
        }
    }
</style>