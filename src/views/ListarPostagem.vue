<template>

    <Header/>

    <section v-for="postagem of postagens" :key="postagem._id">
        <div class="postagemTitulo">
            <h1>{{postagem.post_title}}</h1>
        </div>

        <div class="postagemLugar">
            <h2>{{postagem.post_place}}</h2>
        </div>

        <div class="postagemData">
            <h2>{{postagem.post_created_at}}</h2>
        </div>

        <div class="postagemCategoria">
            <h2>{{postagem.post_category}}</h2>
        </div>

        <div class="postagemDescricao">
            Descrição:
            <p>{{postagem.post_description}}</p>
            <button type="submit" class="apoiarButton">Apoiar</button>
        </div>

        <div class="postagemComentario">
            Comentários:
        </div>

        <div class="postagemBotoes">
            <button type="submit">Comentar</button>
            <button type="submit">Reportar</button>
        </div>
    </section>

    <MenuBar/>

</template> 

<script>

import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import Postagem from '@/services/postagens.js'

export default {
    name: 'CriarPostagem',

    components: {
        Header,
        MenuBar
    },

    data: () => ({
        postagens: []
    }),
    
    mounted(){
        Postagem.listarUmaPostagem().then(res => {
            console.log(res.data)
            this.postagens = res.data;
        })
    },

  
}
</script>

<style scoped lang="scss">
@import "../assets/stylesheets/pallete.scss";

    .postagemTitulo{
        margin-top: 60px;
        margin-left: 5%;
        max-width: 200px;
        font-size: 15px;
        color: $colorPreta;
    }

    .postagemLugar{
        font-size: 10px;
        margin-left: 5%;
        margin-top: 5%;
    }

    .postagemData{
        font-size: 10px;
        margin-left: 5%;
    }

    .postagemData{
        font-size: 10px;
        margin-left: 5%;
    }

    .postagemCategoria{
        font-size: 10px;
        margin-left: 5%;
    }

    .postagemComentario{
        margin-top: 20%;
        margin-left: 5%;
        height: 100px;
    }

    .postagemDescricao{
        margin-top: 20%;
        margin-left: 5%;
        height: 100px;
    }

    .apoiarButton{
        margin-right: 20px;
        color: $colorBranca;
        background-color: $colorAzul;
        font-size: 20px;
        border: none;
        border-radius: 10px;
    }

    .postagemBotoes{
        display: flex;

        & button{
            flex: 1;
        
            font-size: 20px;
            border: none;
            border-radius: 10px;
        }

        button:first-child{
            margin-right: 20px;
            color: $colorBranca;
            background-color: $colorAzul;
        }

        button:last-child{
            background-color: $colorBranca;
            border: 1px solid $colorCinza;
        }
    }
</style>