<template>

    <Header/>

    <section class="postagemView">
        <div class="postagemTituloEStatus">
            <h1>{{postagem.post_title}}</h1>
            <h1 id="postagemStatus0" v-if="statusColor(this.postagem.post_status) === 0">{{postagem.post_status}}</h1>
            <h1 id="postagemStatus1" v-if="statusColor(this.postagem.post_status) === 1">{{postagem.post_status}}</h1>
            <h1 id="postagemStatus2" v-if="statusColor(this.postagem.post_status) === 2">{{postagem.post_status}}</h1>            
        </div>

        <div class="postagemNome">
            <h2>Anônimo</h2>
        </div>

        <div class="postagemCaracteristicas">
            <h2>{{postagem.post_place}}</h2>
            <h2>{{postagem.post_created_at}}</h2>
            <h2>{{postagem.post_category}}</h2>
        </div>

        <div class="postagemImagem">
            <img v-bind:src="postagem.post_midia"/>
        </div>

        <div class="postagemDescricao">
            Descrição:
            <p align = "justify">{{postagem.post_description}}</p>
        </div>

        <button class="apoiarBotao">
            <div class="textoImagemApoiarBotao">
                <img src="../assets/like.png" class="iconeLike">
                Apoiar
            </div>
        </button>

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
    name: 'listarUmaPostagem',

    components: {
        Header,
        MenuBar,
    },

    data: function () {
        return{
            postagem: {}
        }
    },
    
    created: function(){
        
        Postagem.listarUmaPostagem(this.$route.params.post_id).then(res => {
            this.postagem = res.data;
            console.log(res.data);
        })
    },
    methods: {

        statusColor(status){
            var i = 0
            if(status === "Em andamento") i = 1
            else if (status === "Concluido") i = 2
            return i
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/stylesheets/pallete.scss";

    .postagemView{
        padding-left: 5%;
        padding-right: 5%;
        margin-bottom: 100px;
    }

    .postagemTituloEStatus{
        width: 100%;
        margin-top: 60px;
        font-size: 15px;
        color: $colorPreta;
        display: flex;
        flex: 1;
        justify-content: space-between;
    }

    #postagemStatus0{
        color: #CE1335;
    }

    #postagemStatus1{
        color: #090673;
    }

    #postagemStatus2{
        color: #248722;
    }

    .postagemComentario{
        margin-top: 20%;
        height: 90px;
    }

    .postagemDescricao{
        margin-top: 10%;
        height: auto;
    }

    .apoiarBotao{
        color: $colorBranca;
        background-color: $colorAzul;
        font-size: 20px;
        border: none;
        border-radius: 10px;
        margin-top: 8%;
        width: 100%;
        height: 40px;
    }

    .textoImagemApoiarBotao{
        display: inline-flex;
        height: 40px;
        align-items: center;
    }

    .iconeLike{
        height: 30px;
        margin: auto;
    }

    .postagemNome{
        font-size: 10px;
    }

    .postagemCaracteristicas{
        flex: 1;
        display: flex;
        font-size: 10px;
        justify-content: space-between; 
    }

    .postagemImagem{
        margin-top: 5%;
        text-align: center;

        & img {
            width: 100%;
        }
    }

    .postagemBotoes{
        display: flex;
        height: 100%;

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