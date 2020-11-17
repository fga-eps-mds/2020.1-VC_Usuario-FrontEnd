<template>
    <div class="noticia">
        <div class="tituloESubTitulo">
            <span>{{titulo}}</span>
            <span>{{subTitulo}}</span>
            <div class="noticiaImagem">
                <img v-bind:src="this.imageDaNoticia"/>
            </div>
        <div class="divBotoes">
            <button @click="verMais(id)">Ver mais</button>
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

    .noticia {
        height: auto;
        border-radius: 15px;
        height: 180px;
        padding: 10px;
        margin-bottom: 20px;
        border: solid 1px #DADDE0;
    }

    .tituloESubTitulo {
        height: auto;
        /* border: 1px solid red; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 20px;  

        & span:first-child{
            /* width: 70%; */
            padding-right: 30px;
            /* border: 1px solid red; */
            
            font-size: 20px;
            font-weight: bold;
            color: #090673;
        }
    }

    .noticiaImagem img{
        width:150px;
        height:150px;
    }

    .divBotoes{
        & button{
            flex: 1;
            height: 30px;
            margin-right: 20px;

            cursor: pointer;
            border: none;
            border-radius: 25px; 
            color: #ffffff;
            background-color: #090673;
        }

        & button:hover{
            background-color: #060449;
        }
    }
</style>