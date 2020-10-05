<template>

    <Header/>

    <section v-for="postagem of postagens" :key="postagem._id">
        <div class="PostagemTitulo">
            <h1>{{postagem.post_title}}</h1>
        </div>

        <div class="PostagemLugar">
            <h2>{{postagem.post_place}}</h2>
        </div>

        <div class="PostagemData">
            <h2>{{postagem.post_created_at}}</h2>
        </div>

        <div class="PostagemDescricao">
            Descrição:
            <p>{{postagem.post_description}}</p>
        </div>

        <div class="PostagemBotoes">
                <button type="submit">Comentar</button>
                <button type="submit">Cancelar</button>
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

    .PostagemTitulo{
        margin-top: 60px;
        margin-left: 5%;
        max-width: 200px;
        font-size: 15px;
        color: $colorPreta;
    }

    .PostagemLugar{
        font-size: 10px;
        margin-left: 5%;
        margin-top: 5%;
    }

    .PostagemData{
        font-size: 10px;
        margin-left: 5%;
    }

    .PostagemDescricao{
        margin-top: 20%;
        margin-left: 5%
    }

    .PostagemBotoes{
        display: flex;
        
        /* border: 1px solid blue; */

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