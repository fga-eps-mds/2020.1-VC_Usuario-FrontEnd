<template>

    <Header/>

    <section class="postagemView" v-for="postagem of postagens" :key="postagem._id">
        <div class="postagemTitulo">
            <h1>{{postagem.post_title}}</h1>
        </div>

        <div class="postagemCaracteristicas">
            <h2>{{postagem.post_place}}</h2>
            <h2>{{postagem.post_created_at}}</h2>
            <h2>{{postagem.post_category}}</h2>
        </div>

        <div class="postagemImagem">
            <img v-bind:src="postagem.post_midia" height="200px" width="150px"/>
        </div>

        <div class="postagemDescricao">
            Descrição:
            <p>{{postagem.post_description}}</p>
            <button type="submit"
            class="apoiarBotao">Apoiar</button>
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
            this.postagens = res.data;
            console.log(res.data);
        })
    },

  
}
</script>

<style scoped lang="scss">
@import "../assets/stylesheets/pallete.scss";

    .postagemView{
        padding-left: 5%;
        padding-right: 5%;
        margin-bottom: 100px;
    }

    .postagemTitulo{
        margin-top: 60px;
        max-width: 200px;
        font-size: 15px;
        color: $colorPreta;
    }

    .postagemComentario{
        margin-top: 20%;
        height: 90px;
    }

    .postagemDescricao{
        margin-top: 20%;
        height: 100px;
    }

    .apoiarBotao{
        color: $colorBranca;
        background-color: $colorAzul;
        font-size: 20px;
        border: none;
        border-radius: 10px;
        margin-top: 15%;
        width: 100%;
    }

    .postagemCaracteristicas{
        flex: 1;
        display: flex;
        font-size: 10px;
        justify-content: space-between; 
    }

    .postagemImagem{
 
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